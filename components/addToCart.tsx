import { useState } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../models/Product";

export default function AddToCart({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id, price, name, colour } = product;

  const addToCart = () => {
    setLoading(true);
    dispatch({
      type: "ADDTOCART",
      payload: { id, price, name, colour },
    });
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  };
  return (
    <button
      data-testid="addToCart"
      disabled={loading}
      type="button"
      onClick={addToCart}
    >
      Add{loading && "ing"} to cart
    </button>
  );
}
