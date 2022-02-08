import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from 'react-bootstrap'

import { getCart } from "../../JS/Actions/cartActions";
import ListeCart from "../Liste/ListeCart/ListeCart";
import { getAuthUser } from "../../JS/Actions/authActions";


const Cart = () => {

  const user = useSelector((state) => state.authReducer.user);
  const cartToFind = useSelector((state) => state.cartReducer.cartToFind);
  const load = useSelector((state) => state.cartReducer.load);

  const dispatch = useDispatch();

  const token = localStorage.getItem('token')

  console.log({ user })

  useEffect(() => {
    // user &&
    if (token) {
      dispatch(getAuthUser())
      dispatch(getCart(user._id))
    }
  }, [dispatch, user._id, token]);


  console.log({ cartToFind })



  return load ? (
    <h2>loading</h2>
  ) : (
    cartToFind ? (
      <div className="productlist">
        <br /><br />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartToFind.map(item =>
              <ListeCart item={item} key={item._id} />
            )}
          </tbody>
        </Table>
      </div>
    ) : (<h2>Empty Shopping Cart, you have to add products in basket !!</h2>)
  );
};

export default Cart;
