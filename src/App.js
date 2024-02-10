import './App.css';
import { useState } from 'react';
import image from './samj_nhi_ata.jpg'
function App() {
  const [counter, setCounter] = useState(0);
  const [showError, setshowError] = useState(false);

  const counterStatus = ( val) => () => {
    if (val) {
      if (counter >= 10) {
        setshowError(true)

        setTimeout(() => {
          setshowError(false)
        }, 3000);
      } else {
        setCounter(counter + 1)
      }
    } else {
      if (counter <= 0) {
        setshowError(true)
        setTimeout(() => {
          setshowError(false)
        }, 5000);
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
      <div>
        {showError && (
        <div>
          <h1>AAG A TEPE - INCREMENT/DECREMENT 10 and 0 CHYA MADHYE THEV</h1>
          <img src={image} alt='Samj nhi ata' height={400} width={400}/>
        </div>
        
        )}
      </div>
    </div>
  );
}

export default App;
