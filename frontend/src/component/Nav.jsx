import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import logo from "../foodielogo.png";

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [display, setDisplay] = useState(null);

  const fetchRestaurants = async () => {
    const response = await fetch("/business/businesses");
    const data = await response.json();
    setDisplay(
      data.map((restaurant, key) => {
        return (
          <div key={key}>
            <a href={`/interface/business/${restaurant._id}`}>
              <h2>{restaurant.username}</h2>
            </a>
          </div>
        );
      })
    );
    navigate("/interface");
  };

  return (
    <div className="nav-bar">
      <div>
        {user ? (
          user.accountType === "customer" ? (
            <div className="nav-bar2">
              <div className="navbar2-sec1">
                <div className="logo">
                  <img
                    src={logo}
                    alt=""
                    onClick={() => {
                      navigate("/");
                    }}
                  />
                </div>
                <div>
                  <h2>Welcome {user.username}</h2>
                </div>
              </div>
              <div className="navbar2-sec2">
                <button
                  onClick={() => {
                    navigate("/interface/myreviews");
                  }}
                >
                  My Reviews
                </button>
                <button onClick={fetchRestaurants}>Restaurants</button>
                <button
                  onClick={() => {
                    navigate(`/profile/${user._id}`);
                  }}
                >
                  Profile
                </button>
              </div>
              <div className="navbar2-sec3">
                <button
                  onClick={() => {
                    dispatch(logout());
                    dispatch(reset());
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="nav-bar2">
              <div className="navbar2-sec1">
                <div className="logo">
                  <img
                    src={logo}
                    alt=""
                    onClick={() => {
                      navigate("/");
                    }}
                  />
                </div>
                <div>
                  <h2>Welcome {user.username}</h2>
                </div>
              </div>
              <div className="navbar2-sec2">
                <button
                  onClick={() => {
                    navigate("/businessinterface");
                  }}
                >
                  Business Page
                </button>
                <button
                  onClick={() => {
                    navigate(`/businessinterface/${user._id}`);
                  }}
                >
                  Edit Business
                </button>
              </div>
              <div className="navbar2-sec3">
                <button
                  onClick={() => {
                    dispatch(logout());
                    dispatch(reset());
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          )
        ) : (
          // <button onClick={()=>{
          //   dispatch(logout())
          //   dispatch(reset())
          //   navigate('/')
          // }}>
          //   Logout
          // </button>
          <div className="nav-bar1">
            <div className="navbar1-sec1">
              <div className="logo">
                <img
                  src={logo}
                  alt=""
                  onClick={() => {
                    navigate("/");
                  }}
                />
              </div>
            </div>
            <div className="navbar1-sec2">
              <button
                onClick={() => {
                  navigate("/business");
                }}
              >
                Business
              </button>
              <button
                onClick={() => {
                  navigate("/customer");
                }}
              >
                Customer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
