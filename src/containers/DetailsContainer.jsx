import React, { useEffect /* , useState */ } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { getPostById } from "../apis/postApi";
import GoBackLink from "../components/GoBackLink";
import PostCard from "../components/PostCard";
import { resetPostDetails } from "../redux/actions/dashboardAction/actions";
import { DASHBOARD_CONSTANTS } from "../redux/actions/dashboardAction/actionTypes";

function DetailsContainer() {
  const params = useParams();
  const state = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const { postDetails: post } = state;

  const { id } = params;

  useEffect(() => {
    dispatch({ type: DASHBOARD_CONSTANTS.FETCH_POST_DETAILS, payload: { id } });
  }, [id, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetPostDetails());
    };
  }, [dispatch]);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="w-75">
        <PostCard post={post} />
        <GoBackLink />
      </div>
    </div>
  );
}

export default DetailsContainer;
