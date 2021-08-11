import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../models/Product";

export default function UpdateCart({ product }: { product: Product }) {
  const initialCount = useSelector((state: any) => state.basketMap).get(
    product.id
  ).count;

  const [itemAmount, setItemAmount] = useState(initialCount);
  const dispatch = useDispatch();
  const { id } = product;

  const increase = () => {
    setItemAmount(itemAmount + 1);
  };
  const decrease = () => {
    itemAmount !== 0 && setItemAmount(itemAmount - 1);
  };

  const addToCart = () => {
    dispatch({
      type: "UPDATECART",
      payload: { id, count: itemAmount },
    });
    setTimeout(function () {}, 1000);
  };
  const remove = () => {
    dispatch({
      type: "UPDATECART",
      payload: { id, count: 0 },
    });
  };
  return (
    <div>
      <button disabled={itemAmount < 1} type="button" onClick={decrease}>
        -
      </button>
      {itemAmount}
      <button type="button" onClick={increase}>
        +
      </button>
      <button onClick={addToCart}>update</button>
      <button onClick={remove}>remove</button>
    </div>
  );
}
