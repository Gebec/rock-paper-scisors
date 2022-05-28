import PropTypes from 'prop-types';
import { EOption } from '../../option.enum';
import { EResult } from '../../result.enum';

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
  return (
    <>
      You picked: {userChoice}
      Computer picked: {computerChoice}
      Result: {result}
    </>
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
