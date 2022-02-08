import React from 'react';
import { Link } from "react-router-dom";
const Tablettes = ({ product }) => {
  return <div>
      <Link to={`/DetailsProduct/${product._id}`}>{product.NameProduct}</Link>
  </div>;
};

export default Tablettes;
