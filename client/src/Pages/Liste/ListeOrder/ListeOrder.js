import ListeItems from './ListeItems'
import { getUser } from "../../../JS/Actions/authActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const ListeOrder = ({ product }) => {
    const userToFind = useSelector(
        (state) => state.authReducer.userToFind
      );
    const dispatch = useDispatch();
useEffect(() => {
  dispatch(getUser(product.userId));
}, [dispatch]);
  return (
    <div>
      <tr>
        <td>{ userToFind.FirstName} { userToFind.LastName }</td>
       <Link to={`/Invoice/${product.userId}`} >
      <td> Invoice </td> 
      </Link>
      <td>{ product.bill }</td>
      </tr>
    </div>
 
  )
}

export default ListeOrder