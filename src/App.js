import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const counterStatus = ( val) => () => {
    console.log("======val-------",val);
    if (val) {
      if (counter >= 10) {
        alert("counter should be below '10'")
      } else {
        setCounter(counter + 1)
      }
    } else {
      if (counter <= 0) {
        alert("counter should be above '0'")
      } else {
        setCounter(counter - 1 )
      }
    }

  }
  const resetCounter = () => {
    setCounter(0);
  }
  return (
    <div className="App">
      <h1>react app for deploy created by tuka</h1>
      <h2>{ counter }</h2>
      <button onClick={counterStatus(true)}>Increment</button>
      <button onClick={counterStatus(false)}>Decrement</button>
      <button onClick={() => resetCounter()}>Reset</button>
    </div>
  );
}

export default App;
