import React from 'react';
import './App.css';
import hebrewDictionary from './hebrew/dictionary.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          English - Hebrew dictionary
        </p>
        {Object.entries(hebrewDictionary).map(([key, value]) => {
          return (
            <div>
              <span className='english'>{`${key} - `}</span>
              <span className='hebrew'>{`${value[0]} - `}</span>
              <span className='pronounce'>{value[1]}</span>
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
