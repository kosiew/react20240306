import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './App.css';
import logo from './logo_beventure.png';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isEditable, setIsEditable] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleIconClick = () => {
    setIsEditable(!isEditable);
  };
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleIconClick();
    }
  };

  return (
    <div className="App">
      <AppBar position="static" style={{ backgroundColor: 'white' }}>
        <div>
          <img src={logo} alt="logo" style={{ width: "500px" }} />
        </div>
      </AppBar>
      <h2>A really fast and easy tool to make decisions</h2>

      {isEditable ? (
        <TextField
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="What's your question?"
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleIconClick}>
                <AddIcon />
              </IconButton>
            ),
          }}
        />
      ) : (
        <div>
          <span>{inputValue}</span>
          <IconButton onClick={handleIconClick}>
            <DeleteIcon />
          </IconButton>
        </div>
      )}

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