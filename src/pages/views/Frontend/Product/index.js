import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
const Product = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    Axios.get(` https://5f276252f5d27e001612dfc4.mockapi.io/API/category`).then(
      (res) => {
        setCategory(res.data);
      }
    );
  }, []);
  const [pagep, setPagep] = useState(1);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://5f276252f5d27e001612dfc4.mockapi.io/API/products` +
        "?page=" +
        pagep +
        "&limit=12"
    ).then((res) => {
      setProducts(res.data);
    });
  }, [pagep]);
  const trangTruocp = function () {
    if (pagep == 1) {
      return;
    }
    setPagep(pagep - 1);
  };
  const trangSaup = function () {
    setPagep(pagep + 1);
  };
  return (
    <div>
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">Shop</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-9 order-2">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="float-md-left mb-4">
                    <h2 className="text-black h5">Tất cả sản phẩm</h2>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                {products.map((pro, index) => (
                  <div
                    className="col-sm-6 col-lg-4 mb-4"
                    data-aos="fade-up"
                    key={index}
                  >
                    <div className="block-4 text-center border">
                      <figure className="block-4-image">
                        <Link to={`/products/details/${pro.id}`}>
                          {" "}
                          <img src={pro.images} width="200" height="250"></img>
                        </Link>
                      </figure>
                      <div className="block-4-text p-4">
                        <h3>
                          <Link to={`/product/details/${pro.id}`}>
                            {pro.name}
                          </Link>
                        </h3>
                        <p className="text-primary font-weight-bold">
                          New Price: ${pro.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div class="container" style={{ marginLeft: "86%" }}>
                <ul class="pagination">
                  <li class="page-item" onClick={trangTruocp}>
                    <a class="page-link" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Trang trước</span>
                    </a>
                  </li>
                  <li>
                    <a className="page-link">{pagep}</a>
                  </li>
                  <li class="page-item" onClick={trangSaup}>
                    <a class="page-link" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Trang sau</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 order-1 mb-5 mb-md-0">
              <div className="border p-4 rounded mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">
                  Categories
                </h3>
                <ul className="list-unstyled mb-0">
                  {category.map((cate, index) => (
                    <li className="mb-1">
                      <a href="#" className="d-flex">
                        <span> <Link to={`/productcategory/${cate.id}`}>{cate.name}</Link></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
