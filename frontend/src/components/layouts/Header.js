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

  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  // const logoutHandler = () => {
  //   dispatch(logout());
  //   alert.success("Logged out successfully.");
  // };

  return (
    <Fragment>
      
        <nav className="navbar header-one"  >
          <div className="col-12 col-md-3">
<<<<<<< HEAD
          <div className="navbar-brand">
              <Link to="/" style={{ textDecoration: 'none' }} className='text-white'>
                  www.christbaum-timmer.at
              </Link>
=======
            {/* <div className="navbar-brand">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="text-white"
              >
                ecily<span style={{ color: "red" }}>/</span>Webdevelopment
              </Link>
            </div> */}
>>>>>>> c37facf90dd6a6149d481fc98ae856c7f74d0ecd
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

<<<<<<< HEAD
              <Link to="/cart" style={{ textDecoration: "none" }}>
              <span style={{ color: "#fff" }}>
=======
          {/* <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <Route render={({ history }) => <Search history={history} />} />
                </div> */}

          <div className="col-12 col-md-2 mt-4 mt-md-0 text-center">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <span id="cart" className="ml-3">
          
>>>>>>> c37facf90dd6a6149d481fc98ae856c7f74d0ecd
                Warenkorb
              </span>
              <span className="ml-1" id="cart_count">
                {cartItems.length}
              </span>
            </Link>
<<<<<<< HEAD
          
=======

         
>>>>>>> c37facf90dd6a6149d481fc98ae856c7f74d0ecd
          </div>
        </nav>
     
    </Fragment>
  );
};

export default Header;
