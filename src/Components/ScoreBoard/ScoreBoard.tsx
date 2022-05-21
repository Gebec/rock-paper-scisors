import PropTypes from 'prop-types';
import styled from 'styled-components';

type TProps = {
  playerScore: number;
  computerScore: number;
};

export const ScoreBoard: React.FC<TProps> = ({
  playerScore,
  computerScore,
}) => {
  return (
    <Wrapper>
      <Score>
        <Row>
          <Column>Player</Column>
          <Column>Computer</Column>
        </Row>
        <Row>
          <Column>{playerScore}</Column>
          <Column>{computerScore}</Column>
        </Row>
      </Score>
    </Wrapper>
  );
};

ScoreBoard.propTypes = {
  playerScore: PropTypes.number.isRequired,
  computerScore: PropTypes.number.isRequired,
};

// TODO: fix colors
const Wrapper = styled.div`
  border: 5px solid white;
  border-radius: 20px;
  width: min(600px, 80vw);
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  font-size: 2rem;
`;

const Score = styled.div``;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  flex: 0 0 50%;
  text-align: center;
`;
