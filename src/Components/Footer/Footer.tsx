import { Rules } from '../Rules/Rules';

import styled from 'styled-components';

export const Footer: React.FC = () => {
  return (
    <Container>
      <Rules />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
  display: flex;

  & > * {
    margin-left: auto;
  }
`;
