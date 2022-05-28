import { Button } from '../Button/Button';
import PropTypes from 'prop-types';
import { EOption } from '../../option.enum';

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
    <>
      <Button id={EOption.ROCK.toString()} onClickCallback={setChoice}>
        Rock
      </Button>
      <Button id={EOption.PAPER.toString()} onClickCallback={setChoice}>
        Paper
      </Button>
      <Button id={EOption.SCISSORS.toString()} onClickCallback={setChoice}>
        Scissors
      </Button>
    </>
  );
};

Game.propTypes = {
  setUserChoice: PropTypes.func.isRequired,
};
