import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Arrow, Button, Choice } from '../';
import { EOption } from '../../Enums/option.enum';

type TProps = {
  isShown: boolean;
  onClose: () => void;
};

export const Modal: React.FC<TProps> = ({ isShown, onClose }) => {
  if (!isShown) {
    return null;
  }

  return (
    <ModalComponent>
      <ModalWrapper>
        <CloseButton>
          <Button onClickCallback={onClose}>X</Button>
        </CloseButton>
        <Content>
          <ButtonsWrapper>
            <Choice id={EOption.PAPER} disabled={true} />
            <Choice id={EOption.ROCK} disabled={true} />
            <Choice id={EOption.SCISSORS} disabled={true} />
          </ButtonsWrapper>

          <ArrowsWrapper>
            <div>
              <Arrow />
            </div>
            <div>
              <Arrow />
            </div>
            <div>
              <Arrow />
            </div>
          </ArrowsWrapper>
        </Content>
      </ModalWrapper>
    </ModalComponent>
  );
};

Modal.propTypes = {
  isShown: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const ModalComponent = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  width: min(42rem, 50%);
  height: min(40rem, 75%);
  background-color: hsl(240, 33%, 23%);
  margin-top: 9vh;
  border-radius: 0.5rem;
`;

const Content = styled.div`
  position: relative;
`;

const CloseButton = styled.div`
  text-align: right;
  cursor: pointer;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;

  button:nth-child(2) {
    margin-top: 17rem;
  }
`;

const ArrowsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  & > * {
    position: absolute;
  }

  & > div:nth-child(3n + 0) {
    transform: translate(13rem, 18rem) rotate(56deg);
  }

  & > div:nth-child(3n + 1) {
    transform: translate(23rem, 18rem) rotate(303deg);
  }

  & > div:nth-child(3n + 2) {
    transform: translate(18rem, 9rem) rotate(180deg);
  }
`;
