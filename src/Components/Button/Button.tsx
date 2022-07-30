import PropTypes from 'prop-types';

import styled from 'styled-components';

type TProps = {
  onClickCallback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
};

const ButtonDefault: React.FC<TProps> = ({ onClickCallback, children }) => {
  return <Default onClick={onClickCallback}>{children}</Default>;
};

const ButtonLarge: React.FC<TProps> = ({ onClickCallback, children }) => {
  return <Large onClick={onClickCallback}>{children}</Large>;
};

export { ButtonDefault as Button, ButtonLarge };

const componentProps = {
  onClickCallback: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

ButtonDefault.propTypes = componentProps;
ButtonLarge.propTypes = componentProps;

const Button = styled.button`
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  cursor: pointer;
`;

const Default = styled(Button)`
  border-color: white;
  background-color: transparent;
  padding: 6px 18px;
  color: white;
`;

const Large = styled(Button)`
  border-color: white;
  background-color: white;
  padding: 10px 24px;
  color: hsl(240, 33%, 23%);
  font-weight: 700;
  font-size: 1.1rem;
`;
