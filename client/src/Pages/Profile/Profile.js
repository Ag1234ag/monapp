import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAuthUser } from "../../JS/Actions/authActions";
import { Link } from "react-router-dom";
import "./Profile.css"
const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(getAuthUser);
  }, [dispatch]);
  return  <div className="Profilee">
    <div  className="contant">
  <img
  alt="PicURL"
  src={auth.PicURL}
  className="d-inline-block align-top"
/>
<div className="det">
   <p> { auth.FirstName }</p>  
   <p> { auth.LastName }</p>  
   <p> { auth.Birth }</p>  
   <p> { auth.Adresse }</p>  
   <p> { auth.Phone }</p>  
   <p> { auth.Email }</p>  
   <Link to={`/Profile/${auth._id}`}>mofdifier</Link>
   </div>
   </div>

  </div>;
};

export default Profile;
