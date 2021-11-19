import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../actions/cartActions";
import EmptyCart from "./EmptyCart";
import api from "../../api";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const { cartItems } = useSelector((state) => state.cart);

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;

    if (newQty > stock) return;

    dispatch(addItemToCart(id, newQty));
  };

  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1;

    if (newQty <= 0) return;

    dispatch(addItemToCart(id, newQty));
  };

  // const checkoutHandler = () => {
  //     history.push('/login?redirect=shipping')
  // }

  const handleCheckout = (e) => {
    e.preventDefault();
    api
      .post(
        "/api/v1/create-checkout-session",
        { cartItems },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .then((data) => {
        console.log("Success", data);
        window.location.href = data.url;
      })
      .catch((error) => {
        console.error("Error", error);
      });
    // const { status } = response.data;
    // console.log(response.data);
    // if (status === "success") {
    //   toast.success(
    //     "Transaktion erfolgreich! Wir haben dir eine Email geschickt."
    //   );
    // } else {
    //   toast.error("Transaktionsfehler! Es wurde keine Abbuchung vorgenommen.");
    // }
  };

  return (
    <Fragment>
      <MetaData title={"Ihr Warenkorb"} />

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <Fragment>
          <ToastContainer />
          <div>
            <h2 className="mt-5">
              Ihr Warenkorb: <b>{cartItems.length} Produkte</b>
            </h2>

            <div className="row d-flex justify-content-between">
              <div className="col-12 col-lg-8">
                {cartItems.map((item) => (
                  <Fragment key={item.product}>
                    <hr />

                    <div className="cart-item">
                      <div className="row">
                        <div className="col-4 col-lg-3">
                          <img
                            src={item.image}
                            alt="Laptop"
                            height="90"
                            width="115"
                          />
                        </div>

                        <div className="col-5 col-lg-3">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                          <p id="card_item_price">€ {item.price}</p>
                        </div>

                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                          <div className="stockCounter d-inline">
                            <span
                              className="btn btn-danger minus"
                              onClick={() =>
                                decreaseQty(item.product, item.quantity)
                              }
                            >
                              -
                            </span>

                            <input
                              type="number"
                              className="form-control count d-inline"
                              value={item.quantity}
                              readOnly
                            />

                            <span
                              className="btn btn-primary plus"
                              onClick={() =>
                                increaseQty(
                                  item.product,
                                  item.quantity,
                                  item.stock
                                )
                              }
                            >
                              +
                            </span>
                          </div>
                        </div>

                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                          <i
                            id="delete_cart_item"
                            className="fa fa-trash btn btn-danger"
                            onClick={() => removeCartItemHandler(item.product)}
                          ></i>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </Fragment>
                ))}
              </div>

              <div className="col-12 col-lg-3 my-4">
                <div id="order_summary">
                  <h4>Zusammenfassung</h4>
                  <hr />
                  <p>
                    Menge:{" "}
                    <span className="order-summary-values">
                      {cartItems.reduce(
                        (acc, item) => acc + Number(item.quantity),
                        0
                      )}{" "}
                      (Units)
                    </span>
                  </p>
                  <p>
                    Gesamt:{" "}
                    <span className="order-summary-values">
                      €{" "}
                      {cartItems
                        .reduce(
                          (acc, item) => acc + item.quantity * item.price,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </p>

                  <hr />
                  <button onClick={handleCheckout}>Bezahlen</button>
                  {/* <StripeCheckout
                    stripeKey="pk_test_51JuzJIAKIrQvCrwuvgk2kRNWq50KHRmwkrYl3ZtMzXSn6EmJi3Qq9Zru5j3SGBLsPSw7L8LcDIp5KBbrY4EFYMNs007nV29iUP"
                    token={handleToken}
                    shippingAddress
                    billingAddress
                    amount={
                      cartItems
                        .reduce(
                          (acc, item) => acc + item.quantity * item.price,
                          0
                        )
                        .toFixed(2) * 100
                    }
                    name="Christbäum(e)"
                  /> */}
                  {/* <Link to="/Shipping"  className="lab-btn btn btn-block" ><span>Weiter</span></Link> */}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
