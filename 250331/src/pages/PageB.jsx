import React from "react";
import { useLoggedIn } from "../contexts/loggedIn.context";

const PageB = () => {
  const loggedIn = useLoggedIn();
  return <div>PageB {loggedIn.isLoggedIn.toString()}</div>;
};

export default PageB;
