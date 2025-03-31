import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { useLoggedIn } from "../contexts/loggedIn.context";

const Layout = () => {
  const loggedIn = useLoggedIn();

  return (
    <div>
      <header className="header">
        <button onClick={loggedIn.toggleLogIn}>로그인 토글</button>
        <span>로그인 여부 {loggedIn.isLoggedIn.toString()}</span>
      </header>

      <nav>
        <Link to={"/a"}>/a</Link> | <Link to={"/b"}>/b</Link> |
        <Link to={"/c"}>/c</Link> |
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
