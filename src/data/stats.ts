// ==========================================
// Stats Configuration & Fallback Data
// Types, usernames, profile URLs, and static fallback values
// ==========================================

// === CONFIGURATION — Update your usernames here ===
export const STATS_CONFIG = {
  github: {
    username: "om-parmar-2121",
    profileUrl: "https://github.com/om-parmar-2121",
  },
  leetcode: {
    username: "om_parmar57385",
    profileUrl: "https://leetcode.com/u/om_parmar57385/",
  },
  codeforces: {
    handle: "om_parmar2121",
    profileUrl: "https://codeforces.com/profile/om_parmar2121",
  },
} as const;

// === Type Definitions ===
export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GitHubCalendarData {
  totalContributions: number;
  days: ContributionDay[];
}

export interface LeetCodeStatsData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  attempting: number;
  acceptanceRate: string;
  ranking: string;
  streakDays: number;
}

export interface CodeforcesStatsData {
  handle: string;
  currentRating: number;
  maxRating: number;
  rank: string;
  maxRank: string;
  rankColor: string;
  totalSolved: number;
  contestsCount: number;
  div2Solved: number;
  div3Solved: number;
  div4Solved: number;
}

// === Fallback Static Data (used when API calls fail) ===
export const FALLBACK_LEETCODE: LeetCodeStatsData = {
  totalSolved: 265,
  totalQuestions: 4029,
  easySolved: 112,
  totalEasy: 960,
  mediumSolved: 141,
  totalMedium: 2103,
  hardSolved: 12,
  totalHard: 966,
  attempting: 10,
  acceptanceRate: "71.88%",
  ranking: "Top 26.34%",
  streakDays: 49,
};

export const FALLBACK_CODEFORCES: CodeforcesStatsData = {
  handle: "om_parmar2121",
  currentRating: 930,
  maxRating: 1011,
  rank: "newbie",
  maxRank: "newbie",
  rankColor: "#CCFF00",
  totalSolved: 185,
  contestsCount: 24,
  div2Solved: 48,
  div3Solved: 82,
  div4Solved: 55,
};
