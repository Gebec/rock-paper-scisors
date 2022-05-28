import { useEffect, useState } from 'react';
import { Footer, Game, ResultsTable, ScoreBoard } from './Components';
import { EResult } from './result.enum';
import { EOption } from './option.enum';
import { getRandomOption } from './Helpers/getRandomOption';
import { evaluateResult } from './Helpers/evaluateResult';

import styled from 'styled-components';

const App = () => {
  const [playerScore, setPlayerScore] = useState(5);
  const [computerScore, setComputerScore] = useState(2);
  const [userChoice, setUserChoice] = useState<EOption | null>(null);
  const [computerChoice, setComputerChoice] = useState<EOption | null>(null);
  const [roundResult, setRoundResult] = useState<EResult | null>(null);

  const restart = (): void => {
    setPlayerScore(0);
    setComputerScore(0);
  };

  const handleUserChoice = (choice: EOption): void => {
    setUserChoice(choice);

    const computer: EOption = getRandomOption();
    console.log(computer);
    setComputerChoice(computer);
    const result: EResult = evaluateResult(choice, computer);
    console.log(result);
    setRoundResult(result);
  };

  useEffect(() => {
    console.log(userChoice);
  }, [userChoice]);

  useEffect(() => {
    console.log(computerChoice);
  }, [computerChoice]);

  return (
    <AppComponent className='App'>
      <Heading>Rock - Paper - Scissors Game</Heading>
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} />
      <GameWrapper>
        {roundResult === null ? (
          <Game setUserChoice={handleUserChoice} />
        ) : (
          <ResultsTable
            userChoice={userChoice}
            computerChoice={computerChoice}
            result={roundResult}
          />
        )}
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
