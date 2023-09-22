import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cacheable, LocalStorageStrategy } from 'ts-cacheable';
import { ApiService } from '../api/api.service';
import {
  CacheMaxAgeEnum,
  CacheCountEnum,
} from '../../models/enums/cache-config.enum';
import { GameResult } from '../../models/interfaces/game-results';
import { GameResultParams } from '../../models/interfaces/params';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private apiService: ApiService) {}
  @Cacheable({
    storageStrategy: LocalStorageStrategy,
    maxAge: CacheMaxAgeEnum.GET_FIXTURES_BY_TEAM_MAX_AGE,
    maxCacheCount: CacheCountEnum.MAX_CACHE_COUNT,
  })
  getGameResultByTeam(params: GameResultParams): Observable<GameResult[]> {
    const endpoint = 'fixtures';
    return this.apiService.getList(endpoint, params).pipe(
      map((responseData: any) => {
        return responseData.response;
      })
    );
  }
}
