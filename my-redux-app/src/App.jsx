import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement, reset } from "./features/counter/counterSlice";

function App() {
  const { count, userName } = useSelector((state) => {
    console.log(state);
    return state.counter;
  });

  //action dispatch
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <>
      <h1>Hello {userName}</h1>
      <h3>Count : {count}</h3>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrease</button>
    </>
  );
}

export default App;
