import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [answer, setAnswer] = useState(0);

  const addNumbers = () => {
    setAnswer(Number(first)+Number(second))
  }

  const subtractNumbers = () => {
    setAnswer(Number(first)-Number(second))
  }

  const multiplyNumbers = () => {
    setAnswer(Number(first)*Number(second))
  }

  const divideNumbers = () => {
    setAnswer(Number(first)/Number(second))
  }

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input type="number" placeholder="0" onChange={e => setFirst(e.target.value)} />
        <input type="number" placeholder="0" onChange={e => setSecond(e.target.value)} />
      </div>

      <button type="button" onClick={() => addNumbers()}>+</button>

      <button type="button" onClick={() => subtractNumbers()}>-</button>

      <button type="button" onClick={() => multiplyNumbers()}>×</button>

      <button type="button" onClick={() => divideNumbers()}>÷</button>

      <h2>{answer}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
