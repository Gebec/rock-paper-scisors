import styled from 'styled-components';

export const Arrow: React.FC<Record<string, never>> = () => <ArrowElement />;

const ArrowElement = styled.div`
  width: 100px;
  height: 30px;
  display: flex;

  &:before {
    content: '';
    background: hsl(0, 0%, 100%);
    flex-grow: 1;
    clip-path: polygon(
      0 10px,
      calc(100% - 15px) 10px,
      calc(100% - 15px) 0,
      100% 50%,
      calc(100% - 15px) 100%,
      calc(100% - 15px) calc(100% - 10px),
      0 calc(100% - 10px)
    );
  }
`;
