import React from 'react';
import './App.css';
import PictureDisplay from './components/PictureDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Picture Versus</h1>
        <p>Click any picture to reveal descriptions for both images</p>
      </header>
      <main>
        <PictureDisplay />
      </main>
    </div>
  );
}

export default App;
