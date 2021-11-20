import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";

const OrderError = () => {
  return (
    <Fragment>
      <MetaData title={"Erfolg"} />

      <div className="row justify-content-center">
        <div className="col-6 mt-5 text-center">
          <img
            className="my-5 img-fluid d-block mx-auto"
            src="/images/santa.jpg"
            alt="Order Success"
            width="200"
            height="200"
          />
          <h2>Fehler bei der Abwicklung ihrer Zahlung</h2>
          <Link to="/orders/me">Meine Aufträge</Link>
        </div>
      </div>
    </Fragment>
  );
};
export default OrderError;
