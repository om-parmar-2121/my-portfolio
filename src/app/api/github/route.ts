// ==========================================
// GitHub API Route — Fetches real contribution data
// ==========================================
import { NextResponse } from "next/server";

interface GqlContributionDay {
  contributionCount: number;
  date: string;
  color: string;
  weekday: number;
}

interface GqlContributionWeek {
  contributionDays: GqlContributionDay[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "om-parmar-2121";

  try {
    const token = process.env.GITHUB_TOKEN;

    if (token) {
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
                    weekday
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "User-Agent": "Portfolio-App",
        },
        body: JSON.stringify({ query, variables: { username } }),
        next: { revalidate: 1800 }, // Cache for 30 minutes
      });

      if (response.ok) {
        const data = await response.json();
        const calendar = data?.data?.user?.contributionsCollection?.contributionCalendar;

        if (calendar && calendar.weeks) {
          const days = calendar.weeks.flatMap((week: GqlContributionWeek) =>
            week.contributionDays.map((day: GqlContributionDay) => ({
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

    // Public fallback (if GITHUB_TOKEN is not set or rate-limited)
    const publicRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 1800 } }
    );

    if (publicRes.ok) {
      const publicData = await publicRes.json();
      const days = (publicData.contributions || []).map((day: { date: string; count: number; level: number }) => ({
        date: day.date,
        count: day.count,
        level: Math.min(day.level, 4) as 0 | 1 | 2 | 3 | 4,
      }));

      const totalContributions =
        publicData.total?.lastYear ??
        days.reduce((sum: number, d: { count: number }) => sum + d.count, 0);

      return NextResponse.json({
        success: true,
        totalContributions,
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
