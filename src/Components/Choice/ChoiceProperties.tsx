import { EOption } from '../../Enums/option.enum';

import Rock from '../../Assets/images/rock';
import Paper from '../../Assets/images/paper';
import Scissors from '../../Assets/images/scissors';

export type TChoiceProperties = {
  icon: JSX.Element;
  colorBase: string;
  colorDarker: string;
};
export const ChoiceProperties: { [key in EOption]: TChoiceProperties } = {
  [EOption.PAPER]: {
    icon: <Paper />,
    colorBase: 'hsl(40, 100%, 50%)',
    colorDarker: 'hsl(40, 100%, 15%)',
  },
  [EOption.ROCK]: {
    icon: <Rock />,
    colorBase: 'hsl(230, 50%, 50%)',
    colorDarker: 'hsl(230, 50%, 15%)',
  },
  [EOption.SCISSORS]: {
    icon: <Scissors />,
    colorBase: 'hsl(350, 100%, 50%)',
    colorDarker: 'hsl(350, 100%, 15%)',
  },
};
