interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const initialState: Item[] = [];

export default function cartReducer(state = initialState, action: any) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload as Item;
      const exist = state.find((p) => p.id === item.id);
      if (exist) {
        return state.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...state, item];
    }
   case "UPDATE_QUANTITY":
  return state.map(p =>
    p.id === action.payload.id ? { ...p, quantity: action.payload.quantity } : p
  );
case "DELETE_ITEM":
  return state.filter(p => p.id !== action.payload);

    default:
      return state;
  }
}
