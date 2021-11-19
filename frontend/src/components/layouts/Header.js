import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from '../../actions/userActions'

import "../../App.css";
import "../../assets/css/style.css";

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };

  return (
    <Fragment>
      
        <nav className="navbar header-one"  >
          <div className="col-12 col-md-3">
            <div className="navbar-brand">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="text-white"
              >Christbaum-Timmer
              </Link>
            </div>
          </div>
          
          <div className="col-12 col-md-3 mt-4 mt-md-2 text-center row">
          
          
            {user && user.role === 'admin' && (
              <span style={{ color: "#fff", marginRight: "2rem" }}>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>Dashboard</Link>
            </span>
            )}
             {user && user.role === 'admin' && (
            <span style={{ color: "#fff", marginRight: "2rem" }}>
            <Link to='/' style={{ textDecoration: "none" }} onClick={logoutHandler}>Logout</Link>
            </span>
            )}

              <Link to="/cart" style={{ textDecoration: "none" }}>
              <span style={{ color: "#fff" }}>
                Warenkorb
              </span>
              <span className="ml-1" id="cart_count">
                {cartItems.length}
              </span>
            </Link>
          
          </div>
        </nav>
     
    </Fragment>
  );
};

export default Header;
