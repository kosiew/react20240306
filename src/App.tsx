import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img src="/path/to/your/image.jpg" className="App-logo" alt="logo" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;