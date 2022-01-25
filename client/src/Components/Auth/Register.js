import React from 'react';
import { Link } from "react-router-dom";
import './Auth.css'
const Register = () => {
  return <div className="Auth">
       <div className="form">
        <h3 className="heading">Register</h3>
        <input type="text" placeholder="FirstName" autocomplete="off" className="FirstName" required />
        <br/>
        <input type="text" placeholder="LastName" autocomplete="off" className="LastName" required />
        <br/>
        <select name="Gender" id="Gender" placeholder="Gender">
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <br/>
        <input type="Date" placeholder="Date of Birth" autocomplete="off" className="DateofBirth" required />
        <br/>
        <input type="text" placeholder="Pic URL" autocomplete="off" className="PicURL" required />
        <br/>
        <input type="text" placeholder="Phone" autocomplete="off" className="Phone" required />
        <br/>
        <input type="text" placeholder="Adresse" autocomplete="off" className="Adresse" required />
        <br/>
        <input type="email" placeholder="Email" autocomplete="off" className="email" required />
        <br/>
        <input type="password" placeholder="Password" autocomplete="off" className="password" required />
        <br/>
        <button className="submit-btn">Register</button>
     <Link to="/Login" className="link">D'ont have an acount? Register One</Link>
    </div>
  </div>;
};

export default Register;
