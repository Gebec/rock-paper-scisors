import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { EOption } from '../../option.enum';
import { EResult } from '../../result.enum';
import { Choice } from '../Choice/Choice';

import styled from 'styled-components';

import { getRandomOption } from '../../Helpers/getRandomOption';
import { evaluateResult } from '../../Helpers/evaluateResult';
import { TScore } from '../../App';

type TProps = {
  userChoice: EOption | null;
  score: TScore;
  setScore(score: TScore): void;
};

export const ResultsTable: React.FC<TProps> = ({ userChoice, score, setScore }) => {
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
        setRoundResult(<div>Computer win</div>);
        break;
      case EResult.DRAW:
        setRoundResult(<div>It&apos;s a draw</div>);
        break;
      case EResult.USER_WIN:
        setScore({ player: ++score.player, computer: score.computer });
        setRoundResult(<div>You win</div>);
        break;
      default:
        setRoundResult(<div></div>);
    }
  };

  return (
    <ResultsWrapper>
      {roundResult}
      {userChoice && <Choice id={userChoice} disabled={true} />}
      {computerChoice && <Choice id={EOption.SCISSORS} disabled={true} />}
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
};

ResultsTable.defaultProps = {
  userChoice: null,
};

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
