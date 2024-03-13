import AppBar from '@mui/material/AppBar';
import { useState } from 'react';
import './App.css';
import { InputCollector } from './component/InputCollector';
import logo from './logo_beventure.png';

function App() {
  const [questions, setQuestions] = useState<string[]>([]);
  const [choices, setChoices] = useState<string[]>([]);




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
      <div>
        <InputCollector placeholder="Choice" onInputsChange={setChoices} />

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