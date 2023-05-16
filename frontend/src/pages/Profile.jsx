import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, deleteUser, reset } from "../features/auth/authSlice";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => state.auth);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(deleteUser(user._id));
          dispatch(logout());
          dispatch(reset());
          navigate("/");
        }}
      >
        Delete Account
      </button>
    </div>
  );
}

export default Profile;
