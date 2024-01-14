import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectToken, selectUserId } from "../auth/AuthSlice";




export default function Navbar() {
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);
  const userid = useSelector(selectUserId);
  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  const closeNav = () => {
    document.getElementById('toggle').checked = false;
  };

  return (
    <>
      <input type="checkbox" id="toggle" />
      <nav id="top">
        <h1 id="title">JOHN WILLIAMS PORTFOLIO</h1>
        <label className="navbar-toggler" htmlFor="toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <menu className="nav-list">
        <li className="nav-item">
            <NavLink to="/" onClick={closeNav}>Home</NavLink>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <NavLink to={`/user/${userid}`} onClick={closeNav}>My Account</NavLink>
              </li>
              <li className="nav-item">
                <a onClick={() => {handleLogout(); closeNav();}}>Log Out</a>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <NavLink to="/login" onClick={closeNav}>Log In</NavLink>
            </li>
          )}
        </menu>
      </nav>
    </>
  );
}