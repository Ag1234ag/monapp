import React from 'react';
import {
  getProduct,
} from "../../../JS/Actions/productActions";
import { useDispatch } from "react-redux";
const Computers = ({ product }) => {
  console.log({ product }); 
  const dispatch = useDispatch();
  return <div>
    
  <h4> {product.NameProduct} </h4>
  </div>;
};

export default Computers;