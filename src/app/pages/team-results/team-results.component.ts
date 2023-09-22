import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamService } from 'src/app/services/team/team.service';
import { GameResult } from 'src/app/models/interfaces/game-results';
import { CustomUnsubscriber } from 'src/app/shared/utils/custom-unsubscriber/custom-unsubscriber';
import { takeUntil } from 'rxjs';
import { GameResultParams } from 'src/app/models/interfaces/params';

@Component({
  selector: 'app-team-results',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.scss'],
})
export class TeamResultsComponent extends CustomUnsubscriber {
  private teamService = inject(TeamService);
  @Input() team!: number;
  @Input() league!: number;
  @Input() season!: number;
  @Input() topLeagueKey = '';

  public gameResults!: GameResult[];
  private numberOfResult = 10;
  public selectedTeam = window.history.state.team;

  constructor() {
    super();
  }

  ngOnInit() {
    const params: GameResultParams = {
      league: this.league,
      season: this.season,
      team: this.team,
      last: this.numberOfResult,
    };
    this.getStandings(params);
  }

  getStandings(params: GameResultParams) {
    this.teamService
      .getGameResultByTeam(params)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (result) => {
          this.gameResults = result;
        },
        error: (err) => {
          console.log('Erreur: ', err);
          alert(err);
        },
      });
  }
}
