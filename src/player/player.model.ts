export const UNKNOWN_ID = '-1';

export default interface Player {
  readonly id:string,
  name:string
}

export const nullPlayer:Player = {
  id: UNKNOWN_ID,
  name: '<unknown>',
};
