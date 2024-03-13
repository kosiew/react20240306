import AppBar from '@mui/material/AppBar';
import './App.css';
import { TextInput } from './component/TextInput';
import logo from './logo_beventure.png';

function App() {

  return (
    <div className="App">
      <AppBar position="static" style={{ backgroundColor: 'white' }}>
        <div>
          <img src={logo} alt="logo" style={{ width: "500px" }} />
        </div>
      </AppBar>
      <h2>A really fast and easy tool to make decisions</h2>

      <TextInput placeHolder="What is your question?" />


      <footer style={{
        position: 'fixed', left: 0,
        bottom: 0, width: '100%', backgroundColor: 'white',
        color: 'black', textAlign: 'center'
      }}>
        © {new Date().getFullYear()} BEVENTURE
      </footer>
    </div>
  );
}

export default App;