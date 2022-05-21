import PropTypes from 'prop-types';

import { Button } from '../Button/Button';
import { Rules } from '../Rules/Rules';

import styled from 'styled-components';

type TProps = {
  restart(): void;
};

export const Footer: React.FC<TProps> = ({ restart }) => {
  return (
    <Container>
      <Button onClickCallback={restart}>Start new game</Button>
      <Rules />
    </Container>
  );
};

Footer.propTypes = {
  restart: PropTypes.func.isRequired,
};

const Container = styled.div`
  margin: 20px;
  display: flex;

  & > * {
    margin-left: auto;
  }
`;
