import AppBar from '@mui/material/AppBar';
import { useState } from 'react';
import './App.css';
import { InputCollector } from './component/InputCollector';
import logo from './logo_beventure.png';


export type InputState = 'ENTERING' | 'CONFIRMED' | 'INITIAL'

function App() {
  const [questions, setQuestions] = useState<string[]>([]);
  const [choices, setChoices] = useState<string[]>([]);
  const [inputState, setInputState] = useState<InputState>('INITIAL');


  console.log(`%c👀  ==> [] 👀`, "background-color: #0595DE; color: yellow; padding: 8px; border-radius: 4px;", { questions });
  return (
    <div className="App">
      <AppBar position="static" style={{ backgroundColor: 'white' }
      }>
        <div>
          <img src={logo} alt="logo" style={{ width: "500px" }} />
        </div>
      </AppBar>
      <h2>A really fast and easy tool to make decisions</h2>

      <InputCollector placeholder="Question" maxInputs={1}
        onInputsChange={setQuestions}
        inputState={inputState}
        setInputState={setInputState} />
      {questions.length > 0 && inputState === 'CONFIRMED' && questions.every(question => question.length > 0) && (
        <div>
          <InputCollector placeholder="Choice" onInputsChange={setChoices}
            inputState={inputState}
            setInputState={setInputState} />
        </div>
      )}
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