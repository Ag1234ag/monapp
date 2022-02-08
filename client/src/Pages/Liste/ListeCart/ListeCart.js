import React from 'react';
import { deletefromCart } from '../../../JS/Actions/productActions'

const ListeCart = ({ item }) => {



  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.Price}</td>
      <button  onClick={() => dispatch(AddToCart("61eff6eb27c8731b1796a27b" , "61f6d4fd14fecc0ec7aeeb0b" ))}>Delete</button>
    </tr>
  )
};

export default ListeCart;
