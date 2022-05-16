import { useState } from 'react';
import { ScoreBoard }  from './Components/ScoreBoard/ScoreBoard';
import { StartNewGame } from './Components/StartNewGame/StartNewGame';
import styled from 'styled-components';


const App = () => {
  const [playerScore, setPlayerScore] = useState(5);
  const [compScore, setCompScore] = useState(2);


  const restart = (): void => {
    setPlayerScore(0);
    setCompScore(0);
  }

  return (
    <div className="App">
      <Heading>Rock - Paper - scissors</Heading>
      <ScoreBoard player={ playerScore } computer={ compScore }/>
      <StartNewGame restart={ restart } />
    </div>
  );
}

const Heading = styled.h1`
  text-align: center
`;

export default App;
