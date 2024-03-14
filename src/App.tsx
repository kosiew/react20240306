import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { useState } from 'react';
import './App.css';
import { InputCollector } from './component/InputCollector';
import logo from './logo_beventure.png';


type ShowAnswer = 'LOADING' | 'READY' | 'HIDDEN';
function App() {
  const [questions, setQuestions] = useState<string[]>([]);
  const [choices, setChoices] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState<ShowAnswer>('HIDDEN');

  const gotQuestion = questions.length > 0 && questions.every(question => question.length > 0)
  const gotChoices = choices.length > 1 && choices.every(choice => choice.length > 0)
  const showGetAnswer = gotQuestion && gotChoices;

  const handleGetAnswer = () => {
    // Handle the "Get Answer" button click
    // randomly select a choice
    const _choices = [...choices,
      'None of your choices will matter',
      'Wise to seek the roads not shown to your eyes',
      "All journeys converge in the mist of fate.",
      "Beyond the seen, better paths may lie hidden.",
      "A pause to reflect may reveal unseen horizons."
    ]
    const randomIndex = Math.floor(Math.random() * _choices.length);
    setShowAnswer('LOADING');
    setAnswer(_choices[randomIndex]);
  }

  return (
    <div className="App">
      <AppBar position="static" style={{ backgroundColor: 'white' }
      }>
        <div>
          <img src={logo} alt="logo" style={{ width: "500px" }} />
        </div>
      </AppBar>
      <h2>A really fast and easy tool to make decisions</h2>

      <InputCollector placeholder="Question" maxInputs={1} onInputsChange={setQuestions} />
      {gotQuestion && showAnswer === 'HIDDEN' && (
        <div>
          <InputCollector placeholder="Choice" onInputsChange={setChoices} />
        </div>
      )}

      {showGetAnswer && showAnswer === 'HIDDEN' && (
        <Button variant="contained" onClick={handleGetAnswer}>Get Answer Now</Button>)}



      <footer style={{
        position: 'fixed', left: 0,
        bottom: 0, width: '100%', backgroundColor: 'white',
        color: 'black', textAlign: 'center'
      }}>
        © {new Date().getFullYear()} BEVENTURE
      </footer>
    </div >
  )
}

export default App;