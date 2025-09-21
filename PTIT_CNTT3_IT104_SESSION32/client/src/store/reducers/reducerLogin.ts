interface LoginState {
  email: string;
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  email: "",
  isLoggedIn: false,
};

export const loginReducer = (
  state = initialState,
  action: { type: string; payload?: any }
): LoginState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, email: action.payload.email, isLoggedIn: true };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
