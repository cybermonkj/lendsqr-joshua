import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  const id = localStorage.getItem("id");

  if (
    !id &&
    ["/dashboard", "/usersshowingfilters", "/usersgeneraldetails"].includes(
      pathname
    )
  ) {
    return <Navigate to="/" />;
  }
  return <Element />;
};
