import ListeItems from '../Liste/ListeOrder/ListeItems';
import { getUser } from "../../JS/Actions/authActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrder } from "../../JS/Actions/orderActions";
import logo from '../../assets/logo.png'
import './Invoice.css'


const Invoice = () => {

  const params = useParams();
  const userToFind = useSelector(
    (state) => state.authReducer.userToFind
  );
  const productsToFind = useSelector(
    (state) => state.orderReducer.orders
  );
  const load = useSelector((state) => state.orderReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(params.id));
    dispatch(getOrder(params.id));
  }, [dispatch, params.id]);

  console.log(userToFind)

  return load ? (
    <h2>loading</h2>
  ) : (
    <div>
      <img
        alt="logo"
        src={logo}
        width="100"
        height="100"
        className="d-inline-block align-top"
      />
      <div claasName="user">
        <h2>FirstName:{userToFind.FirstName}</h2>
        <h2>LastName:{userToFind.LastName}</h2>
        <h2>Birth:{userToFind.Birth}</h2>
        <h2>Adresse:{userToFind.Adresse}</h2>
        <h2>Phone:{userToFind.Phone}</h2>
        <h2>Email:{userToFind.Email}</h2>
      </div>
      {productsToFind.items.map((product) => (
        <ListeItems product={product} key={product.id} />
      ))}
      <h2>{productsToFind.bill} </h2>


    </div>

  );
};

export default Invoice