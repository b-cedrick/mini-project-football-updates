// Based on the frequency of request per day/hours recommended according to the API DOCS
export enum CacheMaxAgeEnum {
  GET_STADINGS_MAX_AGE = 60 * 60 * 1000, // 60 minutes/1 hour
  GET_FIXTURES_BY_TEAM_MAX_AGE = 60 * 1000, // 1 minute
}

//maximum allowed unique caches (different parameters)
export enum CacheCountEnum {
  MAX_CACHE_COUNT = 60,
}
