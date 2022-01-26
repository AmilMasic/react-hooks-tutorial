import './App.css';
import { useState } from 'react';
import {useForm} from './useForm';
import { Hello } from './Hello';



function App() {


  const [showHello, setShowHello] = useState(true)

  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  const [values, handleChange] = useForm({email: "", password: ""})

  return (
    <div>
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
