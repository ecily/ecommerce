import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
import Header from "./components/layouts/Header";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ProtectedRoute from "./components/route/ProtectedRoute";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";
import Shipping from "./components/cart/Shipping";
import Cart from "./components/cart/Cart";
// import Payment from "./components/cart/Payment";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import OrderSuccess from "./components/cart/OrderSuccess";
import OrderError from "./components/cart/OrderError";
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import ProductsList from "./components/admin/ProductsList";
import NewProduct from "./components/admin/NewProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import OrdersList from "./components/admin/OrdersList";
import ProcessOrder from "./components/admin/ProcessOrder";
import UsersList from "./components/admin/UsersList";
import UpdateUser from "./components/admin/UpdateUser";
import ProductReviews from "./components/admin/ProductReviews";
// import { loadUser } from "./actions/userActions";
// import store from "./store";
// import api from "./api";
//import { forgotPasswordReducer } from './reducers/userReducers'

//Payments
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

function App() {
  // const [stripeApiKey, setStripeApiKey] = useState("");

  // useEffect(() => {
  //   //store.dispatch(loadUser());
  //   async function getStripeApiKey() {
  //     const { data } = await api.get("/api/v1/stripeapi");

  //     setStripeApiKey(data.stripeApiKey);
  //   }
  //   getStripeApiKey();
  // }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={Home} exact />
        <div className="container container-fluid">
          <Route path="/search/:keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} exact />
          <Route path="/cart" component={Cart} exact />
          <ProtectedRoute path="/shipping" component={Shipping} />
          <ProtectedRoute path="/confirm" component={ConfirmOrder} exact />
          <ProtectedRoute path="/order/:id" component={OrderDetails} exact />
          <Route path="/success" component={OrderSuccess} />
          <ProtectedRoute path="/cancel" component={OrderError} />
          {/* {stripeApiKey && (
            <Elements stripe={loadStripe(stripeApiKey)}>
              <ProtectedRoute path="/payment" component={Payment} />
            </Elements>
          )} */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/password/forgot" component={ForgotPassword} exact />
          <Route path="/password/reset/:token" component={NewPassword} exact />
          <ProtectedRoute path="/me" component={Profile} exact />
          <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
          <ProtectedRoute
            path="/password/update"
            component={UpdatePassword}
            exact
          />
          <ProtectedRoute path="/orders/me" component={ListOrders} exact />
        </div>
        <ProtectedRoute
          path="/dashboard"
          isAdmin={true}
          component={Dashboard}
          exact
        />
        <ProtectedRoute
          path="/admin/products"
          isAdmin={true}
          component={ProductsList}
          exact
        />
        <ProtectedRoute
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
          exact
        />
        <ProtectedRoute
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
          exact
        />
        <ProtectedRoute
          path="/admin/orders"
          isAdmin={true}
          component={OrdersList}
          exact
        />
        <ProtectedRoute
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
          exact
        />
        <ProtectedRoute
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
          exact
        />
        <ProtectedRoute
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
          exact
        />
        <ProtectedRoute
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
          exact
        />

        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
