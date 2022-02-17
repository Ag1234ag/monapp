import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import './AdminPrinters.css';
const Printers = ({ product }) => {
  return   <div className='car'>
       
  <div className="Card">
  
    <img src={product.ImgURL} alt={product.NameProduct} /> 
    <Link to={`/DetailsProduct/${product._id}`} >
    <p className="title">{product.NameProduct}  </p>
    </Link>
  </div>
  
</div>
};
export default Printers;
