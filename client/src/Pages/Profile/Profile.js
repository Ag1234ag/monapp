import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAuthUser } from "../../JS/Actions/authActions";
import "./Profile.css"
const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(getAuthUser);
  }, [dispatch]);
  return  <div className="Profilee">
  <img
  alt="PicURL"
  src={auth.PicURL}
  className="d-inline-block align-top"
/>
   <p> { auth.FirstName }</p>  
   <p> { auth.LastName }</p>  
   <p> { auth.Birth }</p>  
   <p> { auth.Adresse }</p>  
   <p> { auth.Phone }</p>  
   <p> { auth.Email }</p>  
     

  </div>;
};

export default Profile;
