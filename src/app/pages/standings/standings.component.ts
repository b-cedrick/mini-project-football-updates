import { Component, Input, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { TOP_LEAGUE } from '../../constants/top-league';
import { League } from '../../models/interfaces/league';
import { StandingParams } from '../../models/interfaces/params';
import { Standings } from '../../models/interfaces/standings';
import { StandingService } from '../../services/standing/standing.service';
import { CustomUnsubscriber } from '../../shared/utils/custom-unsubscriber/custom-unsubscriber';

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [CommonModule, RouterModule, NgFor],
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
})
export class StandingsComponent extends CustomUnsubscriber {
  private standingService = inject(StandingService);
  @Input() set topLeagueKey(value: string) {
    if (value) {
      const topLeagueKeys: string[] = Object.keys(TOP_LEAGUE);
      const key: string = value.toUpperCase();
      if (topLeagueKeys.includes(key)) {
        this.league = TOP_LEAGUE[key].league;
        this.leagueKey = value;
        const params = { league: this.league.id, season: this.currentSeason };
        this.getStandings(params);
      }
    }
  }
  public league!: League;
  public leagueKey!: string;
  public standings!: Standings[];
  public currentSeason = new Date().getFullYear();

  constructor() {
    super();
  }

  ngOnInit() {
    const params: StandingParams = {
      league: this.league.id,
      season: this.currentSeason,
    };
    this.getStandings(params);
  }

  getStandings(params: StandingParams) {
    this.standingService
      .getStandigns(params)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (result) => {
          this.standings = result;
        },
        error: (err) => {
          console.log('Erreur: ', err);
          alert(err);
        },
      });
  }
}
