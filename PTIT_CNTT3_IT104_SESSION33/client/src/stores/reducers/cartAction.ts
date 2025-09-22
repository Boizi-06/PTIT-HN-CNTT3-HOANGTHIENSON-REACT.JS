// Redux actions
export const addToCart = (product: {id:number; name:string; price:number; quantity:number}) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const updateQuantity = (id:number, quantity:number) => ({
  type: "UPDATE_QUANTITY",
  payload: { id, quantity },
});

export const deleteItem = (id:number) => ({
  type: "DELETE_ITEM",
  payload: id,
});
