import { useEffect, useState } from 'react';
import { Footer, Game, ScoreBoard } from './Components';

import styled from 'styled-components';

const App = () => {
  const [playerScore, setPlayerScore] = useState(5);
  const [computerScore, setComputerScore] = useState(2);
  const [userChoice, setUserChoice] = useState<string | null>(null);

  const restart = (): void => {
    setPlayerScore(0);
    setComputerScore(0);
  };

  useEffect(() => {
    console.log(userChoice);
  }, [userChoice]);

  return (
    <AppComponent className='App'>
      <Heading>Rock - Paper - Scissors Game</Heading>
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} />
      <GameWrapper>
        <Game setUserChoice={setUserChoice} />
      </GameWrapper>
      <Footer restart={restart} />
    </AppComponent>
  );
};

const AppComponent = styled.div`
  background-color: #28284f;
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Heading = styled.h1`
  text-align: center;
`;

const GameWrapper = styled.div`
  flex-grow: 1;
`;

export default App;
