import styled from 'styled-components';

export const ScoreBoard: React.FC<{ player: number, computer: number }> = ({ player, computer }) => {
    return (
        <Wrapper>
            <Score>
                <Row>

                    <Column>Player</Column>
                    <Column>Computer</Column>
                </Row>
                <Row>
                    <Column>{ player }</Column>
                    <Column>{ computer }</Column>
                </Row>
            </Score>
        </Wrapper>
    )
}

// TODO: fix colors
const Wrapper = styled.div`
    border: 1px solid black;
    width: min(600px, 80vw);
    margin: auto;
    padding: 20px;
    font-size: 2rem;
`;

const Score = styled.div`
    color: black;
    background-color: white;
`
const Row = styled.div`
    display: flex;
    flex-direction: row
`

const Column = styled.div`
    flex: 0 0 50%;
    text-align: center;
`
