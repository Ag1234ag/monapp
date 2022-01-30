import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Auth.css'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../JS/Actions/authActions";
const Login = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleConfim = () => {
      dispatch(login(formData));
      history.push("/");
    };

  return( 
    <div className="Auth">
  
 <div className="form">
    <h3 className="heading">Login</h3>
    <input type="email" onChange={handleFormChange} placeholder="Enter Your Email..." name="Email" autocomplete="off" className="email" required />
    <br/>
    <input type="password" onChange={handleFormChange} placeholder="Enter Your Password..."  name="Password" autocomplete="off" className="password" required />
    <button onClick={handleConfim} className="submit-btn">Login</button>
 <Link to="/CreateAccount" className="link">already have an acount? Login in here</Link>
</div>
  </div>

  );
     
};
export default Login;
