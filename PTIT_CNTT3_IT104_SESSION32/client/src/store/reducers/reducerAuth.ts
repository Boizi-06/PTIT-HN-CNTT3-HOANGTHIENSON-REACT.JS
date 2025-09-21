export interface AuthState {
  email: string;
  password: string;
}

const initialState: AuthState = {
  email: "",
  password: "",
};

export const REGISTER = "REGISTER";

export const registerUser = (email: string, password: string) => ({
  type: REGISTER,
  payload: { email, password },
});

export default function reducerAuth(
  state = initialState,
  action: any
): AuthState {
  switch (action.type) {
    case REGISTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
