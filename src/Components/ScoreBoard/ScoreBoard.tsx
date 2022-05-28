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
        <thead>
          <tr>
            <th>Player</th>
            <th>Computer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{playerScore}</td>
            <td>{computerScore}</td>
          </tr>
        </tbody>
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

const Score = styled.table`
  width: 100%;
  text-align: center;
`;
