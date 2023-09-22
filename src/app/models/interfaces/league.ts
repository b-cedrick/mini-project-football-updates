import { Country } from './country';

export interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface TopLeague {
  [key: string]: TopLeagueItem;
}

export interface TopLeagueItem {
  league: League;
  country: Country;
}
