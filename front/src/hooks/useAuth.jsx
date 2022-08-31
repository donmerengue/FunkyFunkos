import axios from "axios";
// React
import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Components
import { userActions } from "../store/userState";

const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/me", { withCredentials: true })
      .then((user) => {
        // console.log("user", user.data);
        console.log(`User Auth OK, user is ${user.data.email}`);
        dispatch(userActions.login(user.data));
      })
      .catch(({ response }) => {
        console.error(response.status, response.statusText);
      });
  }, []);

  return user;
};

export default useAuth;
