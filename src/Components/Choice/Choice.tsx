import PropTypes from 'prop-types';
import styled from 'styled-components';

import { EOption } from '../../option.enum';
import { ChoiceProperties, TChoiceProperties } from './ChoiceProperties';

type TProps = {
  onClickCallback?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id: EOption;
  disabled?: boolean;
};

export const Choice: React.FC<TProps> = ({ onClickCallback, id, disabled = false }) => {
  const choiceProperties: TChoiceProperties = ChoiceProperties[id];
  const theme = {
    colorBase: choiceProperties.colorBase,
    colorDark: choiceProperties.colorDarker,
  };

  return (
    <ChoiceComponent data-id={id} onClick={onClickCallback} disabled={disabled} theme={theme}>
      {choiceProperties.icon}
    </ChoiceComponent>
  );
};

Choice.propTypes = {
  onClickCallback: PropTypes.func,
  id: PropTypes.oneOf([...Object.values(EOption)] as EOption[]).isRequired,
  disabled: PropTypes.bool,
};

const ChoiceComponent = styled.button`
  width: 10rem;
  height: 10rem;
  border: 1rem solid ${(props) => props.theme.colorBase};
  border-radius: 50%;
  cursor: pointer;
  background-color: white;
  box-shadow: inset 5px 10px 5px hsl(0, 0%, 60%), 5px 10px 0px ${(props) => props.theme.colorDark};
  transition: transform linear 0.05s;

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    cursor: unset;
    background-color: white;

    &:hover {
      transform: scale(1);
    }
  }

  & > * {
    width: 80%;
    height: 80%;
  }
`;
