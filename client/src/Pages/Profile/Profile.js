import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from 'react-bootstrap'
import { getAuthUser, toggleTrue } from "../../JS/Actions/authActions";
import { Link } from "react-router-dom";
import "./Profile.css"


const Profile = () => {

  const dispatch = useDispatch()

  const auth = useSelector((state) => state.authReducer.user);
  const token = useSelector((state) => state.authReducer.token);
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const isLoading = useSelector((state) => state.authReducer.isLoading);

  // console.log({ auth })

  // const token = localStorage.getItem('token')


  // useEffect(() => {
  //     token &&
  //         dispatch(getAuthUser())
  // }, [dispatch, token]);


  return (
    isLoading ? <h2>estenaaaa</h2>
      :
      <div className="profile-container">
        {/* <img src={auth.} alt="cover" className="cover-img" /> */}
        <div className="profile-details">
          <div className="pd-left">
            <div className="pd-row">
              <img src={auth.PicURL} alt="imageprofile" className="pd-image" />
              <div>
                <h3>{auth.FirstName} {auth.LastName}</h3>

              </div>
            </div>
          </div>
          <div className="pd-right">
            <Link to={`Profile/${auth._id}`} >
              <button onClick={() => dispatch(toggleTrue())} >
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
        <div className="profile-info">
          <div className="info-col">
            <div className="profile-intro">
              <h3>Info</h3>
              <h2>{auth.Birth}</h2>
              <h2>{auth.Adresse}</h2>
              <h2>{auth.Phone}</h2>
              <h2>{auth.Email}</h2>

            </div>
          </div>
        </div>
      </div>
  )
};

export default Profile;
