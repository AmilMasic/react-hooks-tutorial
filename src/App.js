import './App.css';
import { useState } from 'react';
import {useForm} from './useForm';
import { Hello } from './Hello';
import {useFetch} from './useFetch';



function App() {


  const [showHello, setShowHello] = useState(true)

  // const [count, setCount] = useState(10);
  // const [count2, setCount2] = useState(20);
  const [values, handleChange] = useForm({email: "", password: ""})

  const [count, setCount] = useState(0);
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);


  return (
    <div>
      <div>{!data ? 'loading..' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>

      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}

      <div>
        <input name="email" value={values.email} onChange={handleChange}/>
        <input name="password" type="password" value={values.password} onChange={handleChange}/>
      </div>
    </div>
  )
}

export default App;
