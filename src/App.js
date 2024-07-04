import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const handleCounterTitleClick = () => {
  console.log('handleCounterTitleClick');
};

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const logoClass = reverse ? 'reverse' : '';

  //componentDidUpdate
  useEffect(() => {
    handleConsoleLog('componentDidUpdate');
  });
  //componentDidMount
  useEffect(() => {
    const counterTitle = document.getElementById('counter-title');
    counterTitle?.addEventListener('click', handleCounterTitleClick);
    handleConsoleLog('componentDidMount');
    //componentWillUmount
    return () => {
      handleConsoleLog('componentWillUmount');
      counterTitle.removeEventListener('click', handleCounterTitleClick);
    };
  }, []);
  //useEffect with dependences
  useEffect(() => {
    handleConsoleLog('useEffect with dependences counter: ', counter);
  }, [counter]);

  const handleConsoleLog = (str, val) => {
    console.log('handleConsoleLog: ', str, val);
  };

  const handleReverse = () => {
    setReverse((reverse) => !reverse);
    //setReverse(!reverse);
  };

  const handleCounterIncrement = () => {
    setCounter(counter + 1);
  };
  const handleCounterDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="counter-title">Counter: {counter}</div>
        <img src={logo} className={`App-logo ${logoClass}`} alt="logo" />
        <button onClick={handleReverse}>Reverse</button>
        <br />
        <button onClick={handleCounterIncrement}>Count +</button>
        <button onClick={handleCounterDecrement}>Count -</button>
      </header>
    </div>
  );
}

export default App;
