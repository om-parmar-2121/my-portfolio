// ==========================================
// LeetCode API Route — Fetches real stats from LeetCode's GraphQL
// ==========================================
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "om_parmar57385";

  try {
    const query = `
      query userProblemsSolved($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
          }
        }
      }
    `;

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({ query, variables: { username } }),
      next: { revalidate: 3600 },
    });

    if (response.ok) {
      const data = await response.json();
      const allQuestions = data?.data?.allQuestionsCount;
      const acSubmissions = data?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
      const ranking = data?.data?.matchedUser?.profile?.ranking;

      if (allQuestions && acSubmissions) {
        const findCount = (arr: Array<{ difficulty: string; count: number }>, diff: string) =>
          arr.find((x) => x.difficulty === diff)?.count || 0;

        const result = {
          success: true,
          totalSolved: findCount(acSubmissions, "All"),
          totalQuestions: findCount(allQuestions, "All"),
          easySolved: findCount(acSubmissions, "Easy"),
          totalEasy: findCount(allQuestions, "Easy"),
          mediumSolved: findCount(acSubmissions, "Medium"),
          totalMedium: findCount(allQuestions, "Medium"),
          hardSolved: findCount(acSubmissions, "Hard"),
          totalHard: findCount(allQuestions, "Hard"),
          ranking: ranking || 0,
        };

        return NextResponse.json(result);
      }
    }

    // Fallback: Use alfa-leetcode-api (a public LeetCode API proxy)
    const fallbackRes = await fetch(
      `https://alfa-leetcode-api.onrender.com/userProfile/${username}`,
      { next: { revalidate: 3600 } }
    );

    if (fallbackRes.ok) {
      const fallbackData = await fallbackRes.json();
      return NextResponse.json({
        success: true,
        totalSolved: fallbackData.totalSolved || 0,
        totalQuestions: fallbackData.totalQuestions || 0,
        easySolved: fallbackData.easySolved || 0,
        totalEasy: fallbackData.totalEasy || 0,
        mediumSolved: fallbackData.mediumSolved || 0,
        totalMedium: fallbackData.totalMedium || 0,
        hardSolved: fallbackData.hardSolved || 0,
        totalHard: fallbackData.totalHard || 0,
        ranking: fallbackData.ranking || 0,
      });
    }

    return NextResponse.json({ success: false, error: "Could not fetch LeetCode data" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "LeetCode API error" }, { status: 500 });
  }
}
