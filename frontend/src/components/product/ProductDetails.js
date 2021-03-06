import React, { Fragment, useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import MetaData from "../layouts/MetaData";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetails,
  clearErrors,
  newReview,
} from "../../actions/productActions";
import { addItemToCart } from "../../actions/cartActions";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";
// import ListReviews from '../review/ListReviews'

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [quantity, setQuantity] = useState(1);
  const [rating] = useState(0);
  const [comment, setComment] = useState("");

  const { error, product } = useSelector((state) => state.productDetails);
  // const { user } = useSelector(state => state.auth)
  const { error: reviewError, success } = useSelector(
    (state) => state.newReview
  );

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Danke für Ihre Bewertung");
      dispatch({ type: NEW_REVIEW_RESET });
    }
  }, [dispatch, alert, error, reviewError, match.params.id, success]);

  const addToCart = () => {
    dispatch(addItemToCart(match.params.id, quantity));
    alert.success("Dem Warenkorb zugefügt");
  };

  if (reviewError) {
    alert.error(reviewError);
    dispatch(clearErrors());
  }

  if (success) {
    alert.success("Danke für Ihre Bewertung");
    dispatch({ type: NEW_REVIEW_RESET });
  }

  const increaseQty = () => {
    const count = document.querySelector(".count");

    if (count.valueAsNumber >= product.stock) return;
    const qty = count.valueAsNumber + 1;
    setQuantity(qty);
  };

  const decreaseQty = () => {
    const count = document.querySelector(".count");

    if (count.valueAsNumber <= 1) return;
    const qty = count.valueAsNumber - 1;
    setQuantity(qty);
  };

  const reviewHandler = () => {
    const formData = new FormData();
    formData.set("rating", rating);
    formData.set("comment", comment);
    formData.set("productId", match.params.id);

    dispatch(newReview(formData));
  };

  return (
    <Fragment>
      <MetaData title={product.name} />
      <div className="row f-flex justify-content-around">
        <div className="col-12 col-lg-5 img-fluid" id="product_image">
          <Carousel pause="hover">
            {product.images &&
              product.images.map((image) => (
                <Carousel.Item key={image.public_id}>
                  <img
                    className="d-block w-100"
                    src={image.url}
                    alt={product.title}
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </div>

        <div className="col-12 col-lg-5 mt-5">
          <h3>{product.name}</h3>

          <hr />

          <p id="product_price">EUR {product.price}</p>
          <div className="stockCounter d-inline">
            <span className="btn btn-danger minus" onClick={decreaseQty}>
              -
            </span>

            <input
              type="number"
              className="form-control count d-inline"
              value={quantity}
              readOnly
            />

            <span className="btn btn-primary plus" onClick={increaseQty}>
              +
            </span>
          </div>
          <button
            type="button lab-btn"
            className="btn lab-btn d-inline ml-4 text-white"
            disabled={product.stock === 0}
            onClick={addToCart}
          >
            Zum Warenkorb hinzufügen
          </button>

          <hr />

          <p>
            <span
              id="stock_status"
              className={product.stock > 0 ? "greenColor" : "redColor"}
            >
              {product.stock > 0 ? "Auf Lager" : "Leider ausverkauft"}
            </span>
          </p>

          <hr />

          <h4 className="mt-2">Beschreibung:</h4>
          <p>{product.description}</p>
          <hr />

          <div className="row mt-2 mb-5">
            <div className="rating w-50">
              <div
                className="modal fade"
                id="ratingModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="ratingModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="ratingModalLabel">
                        Bewertung abgeben
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <ul className="stars">
                        <li className="star">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>

                      <textarea
                        name="review"
                        id="review"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="form-control mt-3"
                      ></textarea>

                      <button
                        className="btn my-3 float-right review-btn px-4 text-white"
                        onClick={reviewHandler}
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        Absenden
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
