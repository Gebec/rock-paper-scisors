import { Choice } from '../';
import PropTypes from 'prop-types';
import { EOption } from '../../option.enum';

import styled from 'styled-components';

type TProps = {
  setUserChoice(choice: EOption): void;
};

export const Game: React.FC<TProps> = ({ setUserChoice }) => {
  const setChoice = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const choice: string | null = event.currentTarget.getAttribute('data-id');
    if (choice !== null) {
      setUserChoice(choice as unknown as EOption);
    }
  };

  return (
    <GameWrapper>
      <Choice id={EOption.PAPER} onClickCallback={setChoice} />
      <Choice id={EOption.ROCK} onClickCallback={setChoice} />
      <Choice id={EOption.SCISSORS} onClickCallback={setChoice} />
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
    margin-top: 15rem;
  }
`;
