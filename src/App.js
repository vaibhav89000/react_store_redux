import logo from './logo.svg';
import './App.css';
import { incNumber,decNumber } from './actions';
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const myState = useSelector((state)=>state.number);
  console.log(myState)
  const dispatch = useDispatch();

  const handleIncrement = () =>{
    dispatch(incNumber(10))
  }

  const handleDecrement = () =>{
    dispatch(decNumber(10))
  }

  return (
    <div className="App">
      hello world {myState}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
