// ==========================================
// Codeforces API Route — Fetches real user info & stats
// ==========================================
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const handle = searchParams.get("handle") || "om_parmar2121";

  try {
    // Fetch user info from Codeforces public API
    const userInfoRes = await fetch(
      `https://codeforces.com/api/user.info?handles=${handle}`,
      { next: { revalidate: 3600 } }
    );

    if (!userInfoRes.ok) {
      return NextResponse.json({ success: false, error: "Codeforces API error" }, { status: 500 });
    }

    const userInfoData = await userInfoRes.json();
    
    if (userInfoData.status !== "OK" || !userInfoData.result?.length) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }

    const user = userInfoData.result[0];

    // Fetch user rating history to count contests
    const ratingRes = await fetch(
      `https://codeforces.com/api/user.rating?handle=${handle}`,
      { next: { revalidate: 3600 } }
    );

    let contestsCount = 0;
    if (ratingRes.ok) {
      const ratingData = await ratingRes.json();
      if (ratingData.status === "OK") {
        contestsCount = ratingData.result.length;
      }
    }

    // Fetch user submissions to count solved problems
    const submissionsRes = await fetch(
      `https://codeforces.com/api/user.status?handle=${handle}&from=1&count=10000`,
      { next: { revalidate: 3600 } }
    );

    let totalSolved = 0;
    let div2Solved = 0;
    let div3Solved = 0;
    let div4Solved = 0;

    if (submissionsRes.ok) {
      const submissionsData = await submissionsRes.json();
      if (submissionsData.status === "OK") {
        // Unique accepted problems
        const solvedProblems = new Set<string>();
        for (const sub of submissionsData.result) {
          if (sub.verdict === "OK") {
            const key = `${sub.problem.contestId}-${sub.problem.index}`;
            if (!solvedProblems.has(key)) {
              solvedProblems.add(key);

              // Categorize by rating/difficulty
              const rating = sub.problem.rating || 0;
              if (rating <= 1200) div4Solved++;
              else if (rating <= 1600) div3Solved++;
              else div2Solved++;
            }
          }
        }
        totalSolved = solvedProblems.size;
      }
    }

    // Map Codeforces rank to color
    const rankColorMap: Record<string, string> = {
      newbie: "#808080",
      pupil: "#008000",
      specialist: "#03A89E",
      expert: "#0000FF",
      "candidate master": "#AA00AA",
      master: "#FF8C00",
      "international master": "#FF8C00",
      grandmaster: "#FF0000",
      "international grandmaster": "#FF0000",
      "legendary grandmaster": "#FF0000",
    };

    const result = {
      success: true,
      handle: user.handle,
      currentRating: user.rating || 0,
      maxRating: user.maxRating || 0,
      rank: user.rank || "unrated",
      maxRank: user.maxRank || "unrated",
      rankColor: rankColorMap[user.rank?.toLowerCase() || "newbie"] || "#808080",
      totalSolved,
      contestsCount,
      div2Solved,
      div3Solved,
      div4Solved,
    };

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ success: false, error: "Codeforces API error" }, { status: 500 });
  }
}
