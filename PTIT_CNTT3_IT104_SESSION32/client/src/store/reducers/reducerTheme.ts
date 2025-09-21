// reducerTheme.ts
export interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false, // mặc định chế độ sáng
};

export const TOGGLE_THEME = "TOGGLE_THEME";

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

export default function reducerTheme(
  state = initialState,
  action: any
): ThemeState {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}
