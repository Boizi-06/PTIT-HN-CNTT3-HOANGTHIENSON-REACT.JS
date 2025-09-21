// src/store/reducers/reducerUser.ts
export interface UserState {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

const initialState: UserState = {
  id: 1,
  userName: "Nguyen Van A",
  gender: "Male",
  dateBirth: "2000-01-01",
  address: "Hà Nội, Việt Nam",
};

interface UpdateUserAction {
  type: "UPDATE_USER";
  payload: Partial<UserState>;
}

type UserAction = UpdateUserAction;

export default function reducerUser(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
