import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

export const Rules: React.FC = () => {
    const [isModalShown, toggleModal] = useState(false);

    const showRules = () => {
        toggleModal(true);
    }

    const closeRules = (): void => {
        toggleModal(false);
    }

    return (
        <>
            <Button onClickCallback={ () => showRules() }>
                Rules
            </Button>
            <Modal isShown={ isModalShown } onClose={ () => closeRules() }>
                Game rules
            </Modal>
        </>
    )
}
