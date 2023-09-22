import { Match } from './match';
import { Team } from './team';

export interface Standings {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  from: string;
  status: string;
  description: string;
  all: Match;
  home: Match;
  away: Match;
  update: Date;
}

export interface StandingsResponse {
  league: LeagueForStandings;
}

interface LeagueForStandings {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Standings[][];
}
