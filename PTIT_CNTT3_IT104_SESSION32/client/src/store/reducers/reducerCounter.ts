// Định nghĩa kiểu state
export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};


interface IncrementAction {
  type: "INCREMENT";
}
interface DecrementAction {
  type: "DECREMENT";
}

type CounterAction = IncrementAction | DecrementAction;

export default function reducerCounter(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
