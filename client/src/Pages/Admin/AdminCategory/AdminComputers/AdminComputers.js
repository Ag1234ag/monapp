import React from 'react';
import { Link } from "react-router-dom";
import {Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  getProduct,
  toggleTrue,
} from '../../../../JS/Actions/productActions'
import './AdminComputers.css';
const Computers = ({ product }) => {
  const dispatch = useDispatch();
  return   <div className='car'>
       
  <div className="Card">
  
    <img src={product.ImgURL} alt={product.NameProduct} /> 
    <Link to={`/DetailsProduct/${product._id}`} >
    <p className="title">{product.NameProduct}  </p>
    </Link>
    <Link to={`/EditProduct/${product._id}`}>
    <Button onClick={() => {
                dispatch(toggleTrue());
                dispatch(getProduct(product._id));
              }}>edit  </Button>
               </Link>
    <Button  onClick={() => dispatch(deleteProduct(product._id))}>delete </Button>
  </div>
  
</div>
};

export default Computers;