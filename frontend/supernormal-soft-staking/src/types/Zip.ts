export enum HARVESTING {
  HARD = 'hard',
  SOFT = 'soft',
  NOT = 'not'
}

export interface Zip {
  id: string;
  harvesting: HARVESTING;
}
