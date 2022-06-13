import { useState } from 'react';
import { Footer, Game, ResultsTable, ScoreBoard } from './Components';
import { EOption } from './option.enum';

import styled from 'styled-components';

export type TScore = {
  player: number;
  computer: number;
};

const App = () => {
  const [score, setScore] = useState<TScore>({ player: 0, computer: 0 });
  const [userChoice, setUserChoice] = useState<EOption | null>(null);

  const newGame = (): void => {
    setUserChoice(null);
  };

  const handleUserChoice = (choice: EOption): void => {
    setUserChoice(choice);
  };

  return (
    <AppComponent className='App'>
      <Heading>Rock - Paper - Scissors Game</Heading>
      <ScoreBoard score={score} />
      <GameWrapper>
        {userChoice === null ? (
          <Game setUserChoice={handleUserChoice} />
        ) : (
          <ResultsTable userChoice={userChoice} score={score} setScore={setScore} />
        )}
      </GameWrapper>
      <Footer newGame={newGame} />
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
