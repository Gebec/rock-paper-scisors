import { ReactElement } from 'react';

import PropTypes from 'prop-types';
import { EOption } from '../../option.enum';
import { EResult } from '../../result.enum';
import { Choice } from '../Choice/Choice';

import styled from 'styled-components';

import Rock from '../../Assets/images/rock';
import Paper from '../../Assets/images/paper';
import Scissors from '../../Assets/images/scissors';

type TProps = {
  userChoice: EOption | null;
  computerChoice: EOption | null;
  result: EResult | null;
};

export const ResultsTable: React.FC<TProps> = ({
  userChoice,
  computerChoice,
  result,
}) => {
  const getChoice = (choice: EOption): ReactElement => {
    switch (choice) {
      case EOption.PAPER:
        return <Paper />;
      case EOption.ROCK:
        return <Rock />;
      case EOption.SCISSORS:
        return <Scissors />;
      default:
        return <div></div>;
    }
  };

  const getResult = (result: EResult | null): ReactElement => {
    switch (result) {
      case EResult.COMPUTER_WIN:
        return <div>Computer win</div>;
      case EResult.DRAW:
        return <div>It&apos;s a draw</div>;
      case EResult.USER_WIN:
        return <div>You win</div>;
      default:
        return <div></div>;
    }
  };

  return (
    <ResultsWrapper>
      {getResult(result)}
      {userChoice && (
        <Choice id={EOption.ROCK} borderColor='#4055bf' disabled={true}>
          {getChoice(userChoice)}
        </Choice>
      )}
      {computerChoice && (
        <Choice id={EOption.SCISSORS} borderColor='#ff002b' disabled={true}>
          {getChoice(computerChoice)}
        </Choice>
      )}
    </ResultsWrapper>
  );
};

ResultsTable.propTypes = {
  userChoice: PropTypes.oneOf([EOption.PAPER, EOption.ROCK, EOption.SCISSORS]),
  computerChoice: PropTypes.oneOf([
    EOption.PAPER,
    EOption.ROCK,
    EOption.SCISSORS,
  ]),
  result: PropTypes.oneOf([
    EResult.COMPUTER_WIN,
    EResult.DRAW,
    EResult.USER_WIN,
  ]),
};

ResultsTable.defaultProps = {
  userChoice: null,
  computerChoice: null,
  result: null,
};

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
