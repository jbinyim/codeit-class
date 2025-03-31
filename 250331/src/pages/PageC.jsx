import React from "react";
import { useLoggedIn } from "../contexts/loggedIn.context";

const PageC = () => {
  const loggedIn = useLoggedIn();

  return <div>PageC {loggedIn.isLoggedIn.toString()}</div>;
};

export default PageC;
