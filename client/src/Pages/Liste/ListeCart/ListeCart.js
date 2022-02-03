import React from 'react';
import { useDispatch } from "react-redux";
const ListeCart = ({ items }) => {
  console.log(items)
  const dispatch = useDispatch();
  return <div>
    <p>  {items}</p> 
  </div>;
};

export default ListeCart;
