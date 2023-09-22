export interface StandingParams {
  league?: number;
  season: number;
  team?: number;
}

export interface GameResultParams {
  id?: number;
  ids?: string;
  live?: string;
  date?: Date;
  league?: number;
  season: number;
  team?: number;
  last?: number;
  next?: number;
  from?: Date;
  to?: Date;
  round?: string;
  status?: string;
  venue?: number;
  timezone?: string;
}
