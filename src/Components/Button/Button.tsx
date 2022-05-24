import PropTypes from 'prop-types';

import styled from 'styled-components';

type TProps = {
  onClickCallback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  children: string;
};

export const Button: React.FC<TProps> = ({ onClickCallback, id, children }) => {
  return (
    <ButtonComponent data-id={id} onClick={onClickCallback}>
      {children}
    </ButtonComponent>
  );
};

Button.propTypes = {
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.string,
  children: PropTypes.string.isRequired,
};

const ButtonComponent = styled.button`
  border: 2px solid white;
  border-radius: 4px;
  background-color: transparent;
  padding: 6px 18px;
  color: white;
`;
