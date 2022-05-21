import PropTypes from 'prop-types';

import styled from 'styled-components';

type TProps = {
  onClickCallback: () => void;
  children: string;
};

export const Button: React.FC<TProps> = ({ onClickCallback, children }) => {
  return (
    <ButtonComponent onClick={onClickCallback}>{children}</ButtonComponent>
  );
};

Button.propTypes = {
  onClickCallback: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

const ButtonComponent = styled.button`
  border: 2px solid white;
  border-radius: 4px;
  background-color: transparent;
  padding: 6px 18px;
  color: white;
`;
