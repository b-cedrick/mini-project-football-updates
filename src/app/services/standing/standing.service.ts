import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable, map, pipe, tap } from 'rxjs';
import { Standings } from 'src/app/models/interfaces/standings';
import { Cacheable, LocalStorageStrategy } from 'ts-cacheable';
import {
  CacheCountEnum,
  CacheMaxAgeEnum,
} from 'src/app/models/enums/cache-config.enum';
import { StandingParams } from 'src/app/models/interfaces/params';

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
