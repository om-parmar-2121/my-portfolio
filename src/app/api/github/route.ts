// ==========================================
// GitHub API Route — Fetches real contribution data
// ==========================================
import { NextResponse } from "next/server";

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "om-parmar-2121";

  try {
    // GitHub GraphQL API to get contribution calendar
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
        }
      }
    `;

    const token = process.env.GITHUB_TOKEN;

    if (token) {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables: { username } }),
        next: { revalidate: 3600 }, // Cache for 1 hour
      });

      if (response.ok) {
        const data = await response.json();
        const calendar = data?.data?.user?.contributionsCollection?.contributionCalendar;

        if (calendar) {
          const days = calendar.weeks.flatMap((week: ContributionWeek) =>
            week.contributionDays.map((day: ContributionDay) => ({
              date: day.date,
              count: day.contributionCount,
              level: getLevel(day.contributionCount),
            }))
          );

          return NextResponse.json({
            success: true,
            totalContributions: calendar.totalContributions,
            days,
          });
        }
      }
    }

    // Fallback: Use GitHub's public contribution page scraping approach
    // Fetch from GitHub's public contributions API
    const publicRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } }
    );

    if (publicRes.ok) {
      const publicData = await publicRes.json();
      const days = publicData.contributions.map((day: { date: string; count: number; level: number }) => ({
        date: day.date,
        count: day.count,
        level: Math.min(day.level, 4),
      }));

      return NextResponse.json({
        success: true,
        totalContributions: publicData.total?.lastYear || days.reduce((sum: number, d: { count: number }) => sum + d.count, 0),
        days,
      });
    }

    return NextResponse.json({ success: false, error: "Could not fetch GitHub data" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "GitHub API error" }, { status: 500 });
  }
}

function getLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}
