import { useReducer, useState } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}
const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | {
      type: "increaseBy";
      payload: { value: number };
    }
  | { type: "reset" };

const CounterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { counter, changes } = state;

  switch (action.type) {
    case "increaseBy":
      return {
        changes: changes + 1,
        previous: counter,
        counter: counter + action.payload.value,
      };

    case "reset":
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      };
    default:
      return state;
  }
};
export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    CounterReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  const handleIncreaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };

  return (
    <>
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
