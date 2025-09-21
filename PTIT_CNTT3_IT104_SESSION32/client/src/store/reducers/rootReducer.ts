import { combineReducers } from "redux";
import reducerUser from "./reducerUser";
import reducerUser2 from "./reducerUser2";
import reducerCounter from "./reducerCounter";
import reducerRandom from "./reducerRamdom";
import reducerCompany from "./reducerCompany";
import reducerTheme from "./reducerTheme";
import reducerAuth from "./reducerAuth";
import { loginReducer } from "./reducerLogin";





export const rootReducer = combineReducers({
    user: reducerUser,
    userState: reducerUser2,
    counter: reducerCounter,
    random: reducerRandom,
    companyState: reducerCompany,
    themeState: reducerTheme,
     auth: reducerAuth,
      login: loginReducer,
})