import './App.css';
import { useState } from 'react';

function expensiveInitialState() {
  return 10;
}

function App() {
  // const [{count, count2}, setCount] = useState({count: 10, count2: 20});
  // its better to do them seperatelly
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);

  return (
    <div>
      <button onClick={() =>{
          setCount(c => c +1);
          setCount2(c => c +1);
        }}
      >
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
    </div>);
}

export default App;
