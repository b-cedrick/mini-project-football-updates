import { TopLeague } from '../models/interfaces/league';

export const TOP_LEAGUE: TopLeague = {
  ENGLAND: {
    league: {
      id: 39,
      name: 'Premier League',
      type: 'League',
      logo: 'https://media.api-sports.io/football/leagues/2.png',
    },
    country: {
      name: 'England',
      code: 'GB',
      flag: 'https://media.api-sports.io/flags/gb.svg',
    },
  },
  SPAIN: {
    league: {
      id: 140,
      name: 'La Liga',
      type: 'League',
      logo: 'https://media-4.api-sports.io/football/leagues/140.png',
    },
    country: {
      name: 'Spain',
      code: 'ES',
      flag: 'https://media-4.api-sports.io/flags/es.svg',
    },
  },
  FRANCE: {
    league: {
      id: 61,
      name: 'Ligue 1',
      type: 'League',
      logo: 'https://media-4.api-sports.io/football/leagues/61.png',
    },
    country: {
      name: 'France',
      code: 'FR',
      flag: 'https://media-4.api-sports.io/flags/fr.svg',
    },
  },
  GERMANY: {
    league: {
      id: 78,
      name: 'Bundesliga',
      type: 'League',
      logo: 'https://media-4.api-sports.io/football/leagues/78.png',
    },
    country: {
      name: 'Germany',
      code: 'DE',
      flag: 'https://media-4.api-sports.io/flags/de.svg',
    },
  },
  ITALY: {
    league: {
      id: 135,
      name: 'Serie A',
      type: 'League',
      logo: 'https://media-4.api-sports.io/football/leagues/135.png',
    },
    country: {
      name: 'Italy',
      code: 'IT',
      flag: 'https://media-4.api-sports.io/flags/it.svg',
    },
  },
};
