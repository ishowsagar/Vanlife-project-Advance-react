import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedin");

  // we have to send user back to where he/she was originally intended to go to
  //  so we fetch prev location history with useloc, and grab pathname from where user actually redirected from
  const location = useLocation();

  //   if user is not authenticated, then navigate him to login page
  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ message: "You must log in first", path: location.pathname }}
      />
    );
  }
  //   otherwise render whatever rest Content or give access to rest content
  return <Outlet />;
}
