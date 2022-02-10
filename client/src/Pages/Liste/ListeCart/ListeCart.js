import React, { useEffect } from "react";
import { deletefromCart } from '../../../JS/Actions/cartActions'
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from  '../../../JS/Actions/productActions';
const ListeCart = ({ item }) => {
  const productToFind = useSelector(
    (state) => state.productReducer.productToFind
  );
  const userToFind = useSelector(
    (state) => state.authReducer.user
  );
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct(item.productId));
  }, [dispatch]);
console.log(productToFind)
  return (
    <tr>
      <td>  </td>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.Price}</td>
      <button  onClick={() => dispatch(deletefromCart("61eff6eb27c8731b1796a27b" , "61f6d4fd14fecc0ec7aeeb0b" ))}>Delete</button>
    </tr>
  )
};

export default ListeCart;
