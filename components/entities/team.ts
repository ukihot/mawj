export class Team {
  constructor(
    readonly code: TeamCode,
    readonly score: TeamScore,
  ) {}
}

export class TeamCode {
  constructor(
    readonly value: number,
  ) {}
}
export class TeamScore {
  constructor(
    readonly value: number,
  ) {}
}
