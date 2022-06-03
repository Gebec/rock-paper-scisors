import { Choice } from '../';
import PropTypes from 'prop-types';
import { EOption } from '../../option.enum';

import styled from 'styled-components';

import Rock from '../../Assets/images/rock';
import Paper from '../../Assets/images/paper';
import Scissors from '../../Assets/images/scissors';

type TProps = {
  setUserChoice(choice: EOption): void;
};

export const Game: React.FC<TProps> = ({ setUserChoice }) => {
  const setChoice = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const choice: string | null = event.currentTarget.getAttribute('data-id');
    if (choice !== null) {
      setUserChoice(Number(choice) as unknown as EOption);
    }
  };

  return (
    <GameWrapper>
      <Choice
        id={EOption.PAPER.toString()}
        onClickCallback={setChoice}
        borderColor='#ffaa00'
      >
        <Paper />
      </Choice>
      <Choice
        id={EOption.ROCK.toString()}
        onClickCallback={setChoice}
        borderColor='#4055bf'
      >
        <Rock />
      </Choice>
      <Choice
        id={EOption.SCISSORS.toString()}
        onClickCallback={setChoice}
        borderColor='#ff002b'
      >
        <Scissors />
      </Choice>
    </GameWrapper>
  );
};

Game.propTypes = {
  setUserChoice: PropTypes.func.isRequired,
};

const GameWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;

  button:nth-child(2) {
    transform: translate(0, 150%);
  }
`;
