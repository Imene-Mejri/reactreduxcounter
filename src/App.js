
import './App.css';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import { incrementhandler, Resethandler } from './redux/action';
import {decrementhandler} from './redux/action';



function App() {
  const Dispatch=useDispatch()
  const counter =useSelector(state=>state.counter)
  return (
    <div className="App">
      <h1>the workshop redux</h1>
      <h2>Counter</h2>
      <div className='counter'>
      <button onClick={()=>Dispatch(incrementhandler())} >PLUS</button>
      <h4>{counter }</h4>
      <button onClick={()=>Dispatch(decrementhandler())}>MOINS</button>
      <button onClick={()=>Dispatch (Resethandler())}>reset</button>
      </div>
    </div>
  );
}

export default App;
