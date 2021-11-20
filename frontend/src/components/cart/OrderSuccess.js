import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
import MetaData from '../layouts/MetaData'

import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../actions/cartActions";

const OrderSuccess = ({ history }) => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    api.get(`/api/v1/checkout-session?id=${id}`).then((response) => {
      setTimeout(() => history.push("/"), 5000);
    });
  }, []);

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    const removeCartItemHandler = (id) => {
      dispatch(removeItemFromCart(id));
    };
    cartItems.every((item) => removeCartItemHandler(item.product));
  });

  return (
    <Fragment>
      <MetaData title={"Erfolg"} />

      <div className="row justify-content-center">
        <div className="banner-thumb">
          <img src="/images/banner/01.png" alt="" />
        </div>

        <div className="col-6 mt-5 text-center">
          <h2>
            Dankeschön! Ihr Tannenbaum ist unterwegs zu Ihnen! Frohe
            Weihnachten!
          </h2>
        </div>
      </div>
    </Fragment>
  );
};
export default OrderSuccess;
