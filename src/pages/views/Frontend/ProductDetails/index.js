import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";

const ProductDetails = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    Axios.get(
      `http://localhost:3000/product/${id}`
    ).then((res) => {
      console.log(res);
      setProduct(res.data);
    });
  }, []);
  return (
    <div>
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <Link to={`/`}>Home</Link> <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">{product.name}</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={product.images} alt="Image" className="img-fluid" width="500px"  />
            </div>
            <div className="col-md-6">
              <h2 className="text-black">{product.name}</h2>
              <p>{product.noidung}</p>
              <p>
                <strong className="text-primary h4">
                  Sale Price: ${product.price}
                </strong>
              </p>

              <div className="mb-5">
                <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-primary js-btn-minus"
                      type="button"
                    >
                      −
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control text-center"
                    defaultValue={1}
                    placeholder
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-primary js-btn-plus"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <p>
                <Link to={`/cart`} className="buy-now btn btn-sm btn-primary">
                  Add To Cart
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
