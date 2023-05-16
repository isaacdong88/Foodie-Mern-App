import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBusiness } from "../features/business/businessSlice";
import { reset } from "../features/business/businessSlice";

function BusinessInterface() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { business } = useSelector((state) => state.business);
  const { user } = useSelector((state) => state.auth);
  const [busReview, setBusReview] = useState(null);

  const fetchReviews = async () => {
    const response = await fetch(`/reviews/${user._id}`);
    const data = await response.json();
    setBusReview(
      data.map((review, key) => {
        return (
          <div key={key} className="rest-page-reviews">
            <div className="rpr-sec1">Review by {review.customerName}</div>
            <div className="rpr-sec2">
              <div>Rating {review.rating}/10</div>
              <div>{new Date(review.createdAt).toLocaleString()}</div>
            </div>
            <div className="rpr-sec3">{review.review}</div>
          </div>
        );
      })
    );
  };

  useEffect(() => {
    dispatch(getBusiness(user?._id));
    return () => {
      dispatch(reset());
    };
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  //initially fetches all reviews when page loads
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="bus-interface-ctn">
      <div className="bus-interface-profile">
        <h2>Profile Picture</h2>
        <img src={business.image} alt="" />
      </div>
      <div className="bus-interface-rewiew">
        <div>
          <h2>Customer Reviews</h2>
        </div>
        <div className="bus-page-reviewsDis">{busReview}</div>
      </div>
    </div>
  );
}

export default BusinessInterface;
