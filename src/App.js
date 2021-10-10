import React from 'react';

const text = await Promise.resolve('Hello World');

function App() {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default App;
