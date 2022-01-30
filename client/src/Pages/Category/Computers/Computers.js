import React from 'react';

const Computers = ({ product }) => {
  console.log({ product }); 
  return <div>
    
  <h4>{product.NameProduct} </h4>
  </div>;
};

export default Computers;