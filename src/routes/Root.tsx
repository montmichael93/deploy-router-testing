import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../NavBar";

export function Root() {
  return (
    <>
      <h1> select from below</h1>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
