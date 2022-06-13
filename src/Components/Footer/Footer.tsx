import PropTypes from 'prop-types';

import { Button } from '../Button/Button';
import { Rules } from '../Rules/Rules';

import styled from 'styled-components';

type TProps = {
  newGame(): void;
};

export const Footer: React.FC<TProps> = ({ newGame }) => {
  return (
    <Container>
      <Button onClickCallback={newGame}>Start new game</Button>
      <Rules />
    </Container>
  );
};

Footer.propTypes = {
  newGame: PropTypes.func.isRequired,
};

const Container = styled.div`
  margin: 20px;
  display: flex;

  & > * {
    margin-left: auto;
  }
`;
