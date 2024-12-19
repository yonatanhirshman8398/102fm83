import React from 'react';
import RadioPlayer from './components/RadioPlayer';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">102FM Radio</h1>
      </div>
      <RadioPlayer />
    </div>
  );
}

export default App;