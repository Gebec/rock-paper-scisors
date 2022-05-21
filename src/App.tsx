import { useState } from 'react';
import { ScoreBoard }  from './Components/ScoreBoard/ScoreBoard';
import { Footer } from './Components/Footer/Footer';
import styled from 'styled-components';


const App = () => {
  const [playerScore, setPlayerScore] = useState(5);
  const [computerScore, setComputerScore] = useState(2);


  const restart = (): void => {
    setPlayerScore(0);
    setComputerScore(0);
  }

  return (
    <AppComponent className="App">
      <Heading>Rock - Paper - Scissors Game</Heading>
      <ScoreBoardWrapper>
        <ScoreBoard playerScore={ playerScore } computerScore={ computerScore }/>
      </ScoreBoardWrapper>
      <Footer restart={ restart } />
    </AppComponent>
  );
}

const AppComponent = styled.div`
  background-color: #28284F;
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Heading = styled.h1`
  text-align: center
`;

const ScoreBoardWrapper = styled.div`
  flex-grow: 1;
`

export default App;
