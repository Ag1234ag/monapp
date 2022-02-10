import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../JS/Actions/orderActions";

const Order = () => {
  const productsToFind = useSelector(
    (state) => state.orderReducer.orders
  );
  const load = useSelector((state) => state.productReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders('61ec4dafab99d2ce2f2b5171'));
  }, [dispatch]);
  console.log(productsToFind)
  return <div>
      <p>order admin</p>
  </div>;
};

export default Order;
