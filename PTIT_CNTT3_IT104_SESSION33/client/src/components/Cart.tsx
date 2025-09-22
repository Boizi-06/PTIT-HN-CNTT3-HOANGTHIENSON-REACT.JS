import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

interface Data {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// actions thuần Redux
const updateQuantity = (id: number, quantity: number) => ({
  type: "UPDATE_QUANTITY",
  payload: { id, quantity },
});

const deleteItem = (id: number) => ({
  type: "DELETE_ITEM",
  payload: id,
});

export default function Cart() {
  const result: Data[] = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState<{ [k: number]: number }>({});

  const handleUpdate = (id: number) => {
    const newQty = editing[id];
    if (!newQty || newQty < 1) return;
    dispatch(updateQuantity(id, newQty));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "4%" }}>STT</th>
                <th>Name</th>
                <th style={{ width: "15%" }}>Price</th>
                <th style={{ width: "4%" }}>Quantity</th>
                <th style={{ width: "25%" }}>Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              {result.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <input
                      type="number"
                      defaultValue={item.quantity}
                      min={1}
                      onChange={(e) =>
                        setEditing({
                          ...editing,
                          [item.id]: Number(e.target.value),
                        })
                      }
                    />
                  </td>
                  <td>
                    <a
                      className="label label-info update-cart-item"
                      onClick={() => handleUpdate(item.id)}
                      style={{ cursor: "pointer", marginRight: 8 }}
                    >
                      Update
                    </a>
                    <a
                      className="label label-danger delete-cart-item"
                      onClick={() => handleDelete(item.id)}
                      style={{ cursor: "pointer" }}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot id="my-cart-footer">
              <tr>
                <td colSpan={4}>
                  There are <b>{result.length}</b> items in your shopping cart.
                </td>
                <td colSpan={2} className="total-price text-left">
                  {result.reduce(
                    (total, curr) => total + curr.quantity * curr.price,
                    0
                  )}{" "}
                  USD
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="alert alert-success" role="alert" id="mnotification">
        Add to cart successfully
      </div>
    </div>
  );
}
