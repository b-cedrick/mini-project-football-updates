import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cacheable, LocalStorageStrategy } from 'ts-cacheable';
import {
  CacheMaxAgeEnum,
  CacheCountEnum,
} from '../../models/enums/cache-config.enum';
import { StandingParams } from '../../models/interfaces/params';
import { Standings } from '../../models/interfaces/standings';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class StandingService {
  constructor(private apiService: ApiService) {}
  @Cacheable({
    storageStrategy: LocalStorageStrategy,
    maxAge: CacheMaxAgeEnum.GET_STADINGS_MAX_AGE,
    maxCacheCount: CacheCountEnum.MAX_CACHE_COUNT,
  })
  getStandigns(params: StandingParams): Observable<Standings[]> {
    const endpoint = 'standings';
    return this.apiService.getList(endpoint, params).pipe(
      map((responseData: any) => {
        return responseData?.response[0]?.league?.standings[0];
      })
    );
  }
}
