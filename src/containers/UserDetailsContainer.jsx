import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserDetails from "../components/UserDetails";
import {
  fetchUserDetails,
  resetUserDetails,
} from "../redux/actions/userDetailsAction/actions";

function UserDetailsContainer() {
  const dispatch = useDispatch();
  const { userDetails: user } = useSelector((state) => state.userDetails);
  useEffect(() => {
    // dispatch fetchUserDetails action with payload id
    dispatch(fetchUserDetails());
    return () => {
      // reset state of user from userdetails state
      dispatch(resetUserDetails());
    };
  }, [dispatch]);

  // const user = JSON.parse(localStorage.getItem("user"));
  return <UserDetails user={user} />;
}

export default UserDetailsContainer;
