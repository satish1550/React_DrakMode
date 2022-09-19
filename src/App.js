import React from 'react'
import Main from './components/Main';
import Header from './components/Header';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  function togglerDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="App">
      <Header
        darkMode={darkMode}
        toggleDarkMode={togglerDarkMode}
      />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App;
