import PropTypes from 'prop-types';

import styled from 'styled-components';

type TProps = {
  onClickCallback?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id: string;
  borderColor: string;
  disabled?: boolean;
  children: React.ReactElement;
};

export const Choice: React.FC<TProps> = ({
  onClickCallback,
  id,
  borderColor,
  disabled = false,
  children,
}) => {
  return (
    <ChoiceComponent
      data-id={id}
      color={borderColor}
      onClick={onClickCallback}
      disabled={disabled}
    >
      {children}
    </ChoiceComponent>
  );
};

Choice.propTypes = {
  onClickCallback: PropTypes.func,
  id: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

const ChoiceComponent = styled.button`
  width: 10rem;
  height: 10rem;
  border: 1rem solid ${(props) => props.color ?? '#00FF00'};
  border-radius: 50%;
  cursor: pointer;
  background-color: white;

  &:disabled {
    cursor: unset;
    background-color: white;
  }

  & > * {
    width: 80%;
    height: 80%;
  }
`;
