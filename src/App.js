import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, Loggin } from './actions';

function App() {
  // Accessing state from the Redux store
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  // Creating a dispatch function
  const dispatch = useDispatch();
 
  return (
    <div className="App">
      {/* Displaying the counter value */}
      <h1>Counter: {counter}</h1>
      
      {/* Buttons to increment and decrement the counter */}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {/* Conditionally rendering content based on login state */}
      {isLogged ? <h3>Some important information from user</h3> : ""}

      {/* Button to toggle login state */}
      <button onClick={() => dispatch(Loggin())}>
        {isLogged ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
