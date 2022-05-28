import { EOption } from '../option.enum';
import { EResult } from '../result.enum';

const choices: { [key in EOption]: { [key in EOption]: EResult } } = {
  [EOption.PAPER]: {
    [EOption.PAPER]: EResult.DRAW,
    [EOption.ROCK]: EResult.USER_WIN,
    [EOption.SCISSORS]: EResult.COMPUTER_WIN,
  },
  [EOption.ROCK]: {
    [EOption.PAPER]: EResult.COMPUTER_WIN,
    [EOption.ROCK]: EResult.DRAW,
    [EOption.SCISSORS]: EResult.USER_WIN,
  },
  [EOption.SCISSORS]: {
    [EOption.PAPER]: EResult.USER_WIN,
    [EOption.ROCK]: EResult.COMPUTER_WIN,
    [EOption.SCISSORS]: EResult.DRAW,
  },
};
export const evaluateResult = (
  userChoice: EOption,
  computerChoice: EOption
): EResult => {
  return choices[userChoice][computerChoice];
};
