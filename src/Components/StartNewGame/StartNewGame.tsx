import { Button } from '../Button/Button';
import { Rules } from '../Rules/Rules';

import styled from 'styled-components';

export const StartNewGame: React.FC<{ restart: () => void }> = ({ restart }) => {
    return (
        <Container>
            <Button onClickCallback={ restart }>
                Start new game
            </Button>
            <RulesComponent />
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    margin: 20px;
`

const RulesComponent = styled(Rules)`

`

