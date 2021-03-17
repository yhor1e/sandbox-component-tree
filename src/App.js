import { useState, useReducer } from 'react';
import './App.css';
import Child from './Child';
import Child2 from './Child2';
import Label from './Label';

function App() {
  console.log('App called');
  const [useStateNumber, setUseStateNumber] = useState(0);
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1;
      default:
        throw new Error();
    }
  }
  const [useReducerNumber, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <h1>useState</h1>
      <Label number={useStateNumber} />
      <Child onClick={setUseStateNumber} />
      <hr />
      <h1>useReducer</h1>
      <Label number={useReducerNumber} />
      <Child2 dispatch={dispatch} />
    </div>
  );
}

export default App;
