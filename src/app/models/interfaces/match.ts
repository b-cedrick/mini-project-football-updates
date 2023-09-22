export interface Match {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface Goals {
  for: number;
  against: number;
}
