import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { CounterReducer } from "./state/counterReducer";
import * as actions from "./actions/actions";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    CounterReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch(actions.doReset());
  };
  const handleIncreaseBy = (value: number) => {
    dispatch(actions.doIncreaseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer Segmentado</h1>
      <h1>Counter Reducer Counter: {counter}</h1>
      <h1>Counter Reducer Previous: {previous}</h1>
      <h1>Counter Reducer Changes: {changes}</h1>

      <button onClick={() => handleIncreaseBy(1)}>+1</button>

      <button onClick={() => handleIncreaseBy(5)}>+5</button>
      <button onClick={() => handleIncreaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
