import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { EOption } from '../../Enums/option.enum';
import { EResult } from '../../Enums/result.enum';
import { Choice } from '../Choice/Choice';

import styled from 'styled-components';

import { getRandomOption } from '../../Helpers/getRandomOption';
import { evaluateResult } from '../../Helpers/evaluateResult';
import { TScore } from '../../App';
import { ButtonLarge } from '../';

type TProps = {
  userChoice: EOption | null;
  score: TScore;
  setScore(score: TScore): void;
  newGame(): void;
};

export const ResultsTable: React.FC<TProps> = ({ userChoice, score, setScore, newGame }) => {
  const [roundResult, setRoundResult] = useState<React.ReactElement | null>(null);
  const [computerChoice, setComputerChoice] = useState<EOption | null>(null);

  useEffect(() => {
    if (userChoice) {
      const resultHandler: NodeJS.Timeout = setTimeout(() => {
        const computer: EOption = getRandomOption();
        setComputerChoice(computer);
        const result: EResult = evaluateResult(userChoice, computer);
        setResult(result);
      }, 1000);

      return () => clearTimeout(resultHandler);
    }

    return;
  }, [userChoice]);

  const setResult = (result: EResult | null): void => {
    switch (result) {
      case EResult.COMPUTER_WIN:
        setScore({ player: score.player, computer: ++score.computer });
        setRoundResult(<div>You lost...</div>);
        break;
      case EResult.DRAW:
        setRoundResult(<div>It&apos;s a draw.</div>);
        break;
      case EResult.USER_WIN:
        setScore({ player: ++score.player, computer: score.computer });
        setRoundResult(<div>You win!</div>);
        break;
      default:
        setRoundResult(<div></div>);
    }
  };

  return (
    <ResultsWrapper>
      {userChoice && <Choice id={userChoice} disabled={true} />}
      {roundResult && (
        <RoundResult>
          <h3>{roundResult}</h3>
          <ButtonLarge onClickCallback={newGame}>Play again</ButtonLarge>
        </RoundResult>
      )}
      {computerChoice && <Choice id={computerChoice} disabled={true} />}
    </ResultsWrapper>
  );
};

ResultsTable.propTypes = {
  userChoice: PropTypes.oneOf([EOption.PAPER, EOption.ROCK, EOption.SCISSORS]),
  score: PropTypes.shape({
    player: PropTypes.number.isRequired,
    computer: PropTypes.number.isRequired,
  }).isRequired,
  setScore: PropTypes.func.isRequired,
  newGame: PropTypes.func.isRequired,
};

ResultsTable.defaultProps = {
  userChoice: null,
};

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;

const RoundResult = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
