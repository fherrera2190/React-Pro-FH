import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const CounterReducer = (
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
