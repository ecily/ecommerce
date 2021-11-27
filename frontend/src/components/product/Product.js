import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, col }) => {
  return (
    <div className="row justify-content-center align-items-center g-4 product-card-container">
      <Link to={`/product/${product._id}`} className="product-card">
        <div className="fadeInUp" data-wow-delay="0.4s">
          <div className="pricing-item">
            <div className="pricing-inner text-center product-card-inner">
              <img
                className="card-img-top timmerpic"
                src={product.images[0].url}
                alt={product.name}
              />

              <div className="pricing-content">
                <h3 className="pricing-title mb-3">{product.name}</h3>

                {/* <h3 className="pricing-price mb-2" style={{ fontSize: "1rem" }}>
                  {product.description}
                </h3> */}
                <h3 className="pricing-price mb-2" style={{ fontSize: "1rem" }}>
                  € {product.price}
                </h3>
                <h3 className="pricing-price" style={{ fontSize: "1rem" }}>
                  inkl. MWST
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
