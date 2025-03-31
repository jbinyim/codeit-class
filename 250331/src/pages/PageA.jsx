import React from "react";
import { useLoggedIn } from "../contexts/loggedIn.context";

const PageA = () => {
  const loggedIn = useLoggedIn();

  return <div>PageA {loggedIn.isLoggedIn.toString()}</div>;
};

export default PageA;
