import React from 'react';
import './App.css';
import PictureDisplay from './components/PictureDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Versusy APP</h1>
        <p>Wybieraj między dwoma obrazami i zobacz jak inni zagłosowali</p>
      </header>
      <main>
        <PictureDisplay />
      </main>
    </div>
  );
}

export default App;
