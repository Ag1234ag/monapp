import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../JS/Actions/cartActions";
import ListeCart from "../Liste/ListeCart/ListeCart";
const Cart = () => {
  const dispatch = useDispatch();
  const cartToFind = useSelector(
    (state) => state.cartReducer
  );
  const load = useSelector((state) => state.cartReducer.loading);
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  console.log(cartToFind)
  return load ? (
    <h2>loading</h2>
  ) : (
    <div className="productlist">
      { cartToFind.items.map((items) => (
        <ListeCart items={items} key={items.id} />
      ))}
    </div>
  );
};

export default Cart;
