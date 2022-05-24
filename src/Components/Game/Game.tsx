import { Button } from '../Button/Button';
import PropTypes from 'prop-types';

type TProps = {
  setUserChoice: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Game: React.FC<TProps> = ({ setUserChoice }) => {
  const setChoice = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setUserChoice(event.currentTarget.getAttribute('data-id'));
  };

  return (
    <>
      <Button id='rock' onClickCallback={setChoice}>
        Rock
      </Button>
      <Button id='paper' onClickCallback={setChoice}>
        Paper
      </Button>
      <Button id='scissors' onClickCallback={setChoice}>
        Scissors
      </Button>
    </>
  );
};

Game.propTypes = {
  setUserChoice: PropTypes.func.isRequired,
};
