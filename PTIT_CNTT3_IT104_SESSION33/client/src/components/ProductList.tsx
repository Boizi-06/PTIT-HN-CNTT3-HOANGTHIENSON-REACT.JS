import { useDispatch } from "react-redux";

import { useState } from "react";

import bread from "../imgs/image.png";
import pizza from "../imgs/image copy.png";
import cake from "../imgs/image copy 2.png";
import { addToCart } from "../stores/reducers/cartAction";

const data = [
  {
    id: 1,
    name: "pizza",
    quantity: 5,
    price: 30,
    description: "pizza1",
    image: bread,
  },
  {
    id: 2,
    name: "pizza2",
    quantity: 5,
    price: 30,
    description: "pizza1",
    image: pizza,
  },
  {
    id: 3,
    name: "pizza3",
    quantity: 5,
    price: 30,
    description: "pizza1",
    image: cake,
  },
  {
    id: 4,
    name: "pizza4",
    quantity: 5,
    price: 30,
    description: "pizza1",
    image: bread,
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const [qty, setQty] = useState<{ [k: number]: number }>({});

  const handleBuy = (item: (typeof data)[number]) => {
    const number = qty[item.id] ?? 1;
    if (number < 1) return;
    if (number > item.quantity) {
      alert(`Chỉ còn tối đa ${item.quantity}`);
      return;
    }
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: number,
      })
    );
  };

  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {data.map((item) => (
              <div className="media product" key={item.id}>
                <div className="media-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src={item.image}
                      alt={item.name}
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">{item.name}</h4>
                  <p>{item.description}</p>
                  <input
                    name={`quantity-product-${item.id}`}
                    type="number"
                    defaultValue={1}
                    min={1}
                    max={item.quantity}
                    onChange={(e) =>
                      setQty({ ...qty, [item.id]: Number(e.target.value) })
                    }
                  />
                  <span
                    className="price"
                    style={{ cursor: "pointer", marginLeft: 10 }}
                    onClick={() => handleBuy(item)}
                  >
                    {item.price} USD
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
