import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../JS/Actions/cartActions";
import  {getAuthUser } from "../../JS/Actions/authActions";
import ListeCart from "../Liste/ListeCart/ListeCart";
const Cart = () => {
  const auth = useSelector((state) => state.authReducer.user._id);
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUser);
  }, [dispatch]);
  useEffect(() => {
        dispatch(getCart(auth));
      }, [dispatch]);
     
      
      return (
       
        <div className="productlist">
        { for (var i = 0; i < 9; i++) {
          console.log(i);
       }
        </div>
      );
    };

export default Cart;
