import PropTypes from 'prop-types';
import styled from 'styled-components';

type TProps = {
  score: {
    player: number;
    computer: number;
  };
};

export const ScoreBoard: React.FC<TProps> = ({ score }) => {
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
            <td>{score.player}</td>
            <td>{score.computer}</td>
          </tr>
        </tbody>
      </Score>
    </Wrapper>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.shape({
    player: PropTypes.number.isRequired,
    computer: PropTypes.number.isRequired,
  }).isRequired,
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
