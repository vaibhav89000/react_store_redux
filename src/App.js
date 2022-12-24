import logo from './logo.svg';
import './App.css';
import { incNumber,decNumber, input } from './actions';
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const myState = useSelector((state)=>state.number);
  const inputState = useSelector((state)=>state.inputval);
  
  const dispatch = useDispatch();

  const handleIncrement = () =>{
    dispatch(incNumber(10))
  }

  const handleDecrement = () =>{
    dispatch(decNumber(10))
  }

  const handleInput = (e) => {
    dispatch(input(e.target.value))
  }


  return (
    <div className="App">
      Value {myState}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <br></br>

      <input onChange={handleInput}/>
      <br></br>
      {inputState}
      
    </div>
  );
}

export default App;
