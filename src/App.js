import './App.css';
import { useState } from 'react';
import {useForm} from './useForm';

function expensiveInitialState() {
  return 10;
}

function App() {
  // const [{count, count2}, setCount] = useState({count: 10, count2: 20});
  // its better to do them seperatelly
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  const [values, handleChange] = useForm({email: "", password: ""})

  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange}/>
      <input name="password" type="password" value={values.password} onChange={handleChange}/>
    </div>);
}

export default App;
