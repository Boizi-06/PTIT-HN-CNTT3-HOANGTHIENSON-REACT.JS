export interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      gender: "Nam",
      dateBirth: "20/11/2023",
      address: "Thanh Xuân, Hà Nội",
    },
    {
      id: 2,
      userName: "Nguyễn Thị B",
      gender: "Nữ",
      dateBirth: "20/11/2023",
      address: "Cầu Giấy, Hà Nội",
    },
  ],
};

interface AddUserAction {
  type: "ADD_USER";
  payload: User;
}
interface UpdateUserAction {
  type: "UPDATE_USER";
  payload: User;
}
interface DeleteUserAction {
  type: "DELETE_USER";
  payload: number; // id
}

type UserAction = AddUserAction | UpdateUserAction | DeleteUserAction;

export default function reducerUser(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.id ? action.payload : u
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };
    default:
      return state;
  }
}
