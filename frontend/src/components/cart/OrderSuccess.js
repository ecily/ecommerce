import React, { Fragment, useEffect, useState } from "react";
import api from "../../api";
import MetaData from "../layouts/MetaData";

const OrderSuccess = ({ match }) => {
  const [sessionData, setSessionData] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    api.get(`/api/v1/checkout-session?id=${id}`).then((response) => {
      console.log(response);
      setSessionData(JSON.stringify(response, null, 2));
    });
  });

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
          <h2>
            Dankeschön! Ihr Auftrag wird jetzt bearbeitet! Frohe Weihnachten!
          </h2>
          <pre class="json" id="session-data">
            {sessionData}
          </pre>
        </div>
      </div>
    </Fragment>
  );
};
export default OrderSuccess;
