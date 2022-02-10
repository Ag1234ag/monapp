import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {EditUser , register } from "../../JS/Actions/authActions"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './Auth.css'
const EditUserr = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      FirstName: "",
      LastName: "",
      Gender: "",
      Birth: "",
      PicURL: "",
      Phone: "",
      Adresse: "",
      Email: "",
      Password: "",
      Role: "User",
    });
    const edit = useSelector((state) => state.authReducer.edit);
    const userToFind = useSelector(
      (state) => state.authReducer.user
    );
  console.log(userToFind)
    useEffect(() => {
      edit
        ? setFormData(userToFind)
        : setFormData({
          FirstName: "",
          LastName: "",
          Gender: "",
          Birth: "",
          PicURL: "",
          Phone: "",
          Adresse: "",
          Email: "",
          Role: "User",
          });
    }, [edit, userToFind]);
    const handleFormChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const handleConfim = () => {
      dispatch(register(formData));
      history.push("/");
    };
    return ( <div className="Auth">
         <div className="form">
          <h3 className="heading">Register</h3>
          <input type="text"  value={userToFind.FirstName} onChange={handleFormChange} placeholder="FirstName"  name="FirstName" autocomplete="off" className="FirstName" required />
          <br/>
          <input type="text" value={userToFind.LastName} onChange={handleFormChange} placeholder="LastName" name="LastName" autocomplete="off" className="LastName" required />
          <br/>
          <select name="Gender" value={userToFind.Gender} onChange={handleFormChange} id="Gender" placeholder="Gender">
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
            </select>
            <br/>
          <input type="Date" value={userToFind.Birth}  onChange={handleFormChange} placeholder="Date of Birth" name="Birth" autocomplete="off" className="DateofBirth" required />
          <br/>
          <input type="text" value={userToFind.PicURL}  onChange={handleFormChange} placeholder="Pic URL" name="PicURL" autocomplete="off" className="PicURL" required />
          <br/>
          <input type="text" value={userToFind.Phone} onChange={handleFormChange}  placeholder="Phone" name="Phone" autocomplete="off" className="Phone" required />
          <br/>
          <input type="text" value={userToFind.Adresse} onChange={handleFormChange} placeholder="Adresse" name="Adresse" autocomplete="off" className="Adresse" required />
          <br/>
          <input type="email" value={userToFind.Email} onChange={handleFormChange} placeholder="Email" name="Email" autocomplete="off" className="email" required />
          <br/>
          <input type="password"   onChange={handleFormChange} placeholder="Password" name="Password" autocomplete="off" className="password" required />
          <br/>
          <button onClick={() => dispatch(EditUser(userToFind._id, formData))} className="submit-btn">Register</button>
       <Link to="/login" className="link">D'ont have an acount? Register One</Link>
      </div>
    </div>
    );
  };

export default EditUserr