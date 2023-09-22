import { Routes } from '@angular/router';
import { TopLeagueKeyEnum } from './models/enums/top-league.enum';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    redirectTo: 'standigns/' + TopLeagueKeyEnum.ENGLAND.toLocaleLowerCase(),
    pathMatch: 'full',
  },
  {
    path: 'standigns/:topLeagueKey',
    title: 'Standigns',
    loadComponent: () =>
      import('./pages/standings/standings.component').then(
        (module) => module.StandingsComponent
      ),
  },
  {
    path: 'team-results/:team/:league/:season/:topLeagueKey',
    title: 'Team Results',
    loadComponent: () =>
      import('./pages/team-results/team-results.component').then(
        (module) => module.TeamResultsComponent
      ),
  },
  {
    path: '**',
    title: 'Oage not found',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/page-no-found/page-no-found.component').then(
        (module) => module.PageNoFoundComponent
      ),
  },
];
