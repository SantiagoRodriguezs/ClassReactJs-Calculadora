import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
      setHistory((prev) => [...prev, `${display} = ${result}`]);
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
<div className="calculator">
      <div className="display">{display || '0'}</div>

      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>
        ))}
        
        {['+', '-', '*', '/'].map((op) => (
          <button key={op} onClick={() => handleClick(op)}>{op}</button>
        ))}


        <button className='borrar' onClick={handleClear}>C</button>
        <button className='iquals' onClick={handleCalculate}>=</button>
      </div>

      <div className="history">
        <h3>Historial</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index} > {item}</li>
          ))}
        </ul>
        <button onClick={handleClearHistory}>Borrar historial</button>
      </div>
    </div>
  );
};

export default App;
