import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Chip from '@mui/material/Chip';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skill';
import ParticleBackground from './components/ParticleBackground';
import WorkTimeline from './components/WorkTimeline';
import IconPanel from './components/Iconpanel';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const className = 'dark-theme';
    if (darkMode) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }, [darkMode]);
  
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      ...(darkMode ? {
        primary: {
          main: '#3282B8', 
        },
        secondary: {
          main: '#0F4C75', 
        },
        background: {
          default: '#1B262C', 
          paper: '#1B262C', 
        },
        text: {
          primary: '#BBE1FA', 
          secondary: '#BBE1FA', 
        },
      } : {
        primary: {
          main: '#3F72AF', 
        },
        secondary: {
          main: '#112D4E', 
        },
        background: {
          default: '#F9F7F7', 
          paper: '#DBE2EF', 
        },
        text: {
          primary: '#112D4E', 
          secondary: '#3F72AF', 
        },
      }),
    },
  });
  
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <ParticleBackground darkMode={darkMode} />
        <Chip
          icon={darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          label={darkMode ? 'Light Mode' : 'Dark Mode'}
          onClick={() => setDarkMode(!darkMode)}
          sx={{ position: 'fixed', top: 8, right: 8, zIndex: 1300 }}
          color="primary"
          variant="outlined"
        />
        <Header />
        <Skills />
        <Projects />
        <WorkTimeline />
        <IconPanel />
      </div>
    </ThemeProvider>
  );
}

export default App;
