// reducerRandom.ts
export interface RandomState {
  numbers: number[];
}

const initialState: RandomState = {
  numbers: [],
};

export const ADD_NUMBER = "ADD_NUMBER";

export const addNumber = (num: number) => ({
  type: ADD_NUMBER,
  payload: num,
});

export default function reducerRandom(
  state = initialState,
  action: any
): RandomState {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, numbers: [...state.numbers, action.payload] };
    default:
      return state;
  }
}
