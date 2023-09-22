export interface GameResult {
  fixture: Fixture;
  league: LeagueForGameResult;
  teams: TeamsForGameResult;
  goals: Goals;
  score: Score;
}

interface TeamsForGameResult {
  home: TeamForGameResult;
  away: TeamForGameResult;
}

interface TeamForGameResult {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

interface LeagueForGameResult {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Goals {
  home: number;
  away: number;
}

interface Score {
  halftime: {
    home: number;
    away: number;
  };
  fulltime: {
    home: number;
    away: number;
  };
  extratime: {
    home: string | number | null;
    away: string | number | null;
  };
  penalty: {
    home: string | number | null;
    away: string | number | null;
  };
}

export interface Fixture {
  id: number;
  referee: string;
  timezone: string;
  date: Date;
  timestamp: number;
  periods: Period;
  venue: Venue;
  status: Status;
}

interface Period {
  first: number;
  second: number;
}

interface Venue {
  id: number;
  name: string;
  city: string;
}

interface Status {
  long: string;
  short: string;
  elapsed: number;
}
