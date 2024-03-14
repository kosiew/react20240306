import AppBar from '@mui/material/AppBar';
import { useState } from 'react';
import './App.css';
import { AnswerSection } from './component/AnswerSection';
import { ChoiceSection } from './component/ChoiceSection';
import { HeadScript } from './component/HeadScript';
import { InputCollector } from './component/InputCollector';
import { LoadingText } from './component/LoadingText';
import logo from './logo_beventure.png';
import star from './star.png';

type ShowAnswer = 'LOADING' | 'READY' | 'HIDDEN';
const WAIT_SECONDS = 5
function App() {
  const [questions, setQuestions] = useState<string[]>([]);
  const [choices, setChoices] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState<ShowAnswer>('HIDDEN');

  const gotQuestion = questions.length > 0 && questions.every(question => question.length > 0)
  const gotChoices = choices.length > 1 && choices.every(choice => choice.length > 0)
  const showGetAnswer = gotQuestion && gotChoices;

  const handleAskAnotherQuestion = () => {
    // setQuestions([]);
    setChoices([]);
    setAnswer('');
    setShowAnswer('HIDDEN');
  }

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
    setTimeout(() => {
      setAnswer(_choices[randomIndex]);
      setShowAnswer('READY');
    }, WAIT_SECONDS * 1000);
  }

  return (
    <div className="App">
      <HeadScript />
      <AppBar position="static" style={{ backgroundColor: 'white' }
      }>
        <div>
          <img src={logo} alt="logo" style={{ width: "500px" }} />
        </div>
      </AppBar>
      <div style={{
        backgroundImage: `url(${star})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat'
      }}>
        <h2>A really fast and easy tool to make decisions</h2>
        <InputCollector placeholder="Question" maxInputs={1} onInputsChange={setQuestions} />
        <ChoiceSection
          gotQuestion={gotQuestion}
          showAnswer={showAnswer}
          showGetAnswer={showGetAnswer}
          handleGetAnswer={handleGetAnswer}
          setChoices={setChoices}
        />
        {showAnswer === 'LOADING' && (
          <LoadingText items={choices} interval={200} />
        )}
        {showAnswer === 'READY' && (
          <AnswerSection answer={answer} handleAskAnotherQuestion={handleAskAnotherQuestion} />
        )}
      </div>
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