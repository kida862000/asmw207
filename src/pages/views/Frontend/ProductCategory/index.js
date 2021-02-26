import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
const ProductCategory = () => {
  const { id } = useParams();
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    Axios.get(` https://5f276252f5d27e001612dfc4.mockapi.io/API/category`).then(
      (res) => {
        setCategory(res.data);
      }
    );
  }, []);
  const [page, setPage] = useState(1);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://5f276252f5d27e001612dfc4.mockapi.io/API/products` +
        "?page=" +
        page +
        "&limit=12"
    ).then((res) => {
      setProduct(res.data);
    });
  }, [page]);
  const trangTruoc = function () {
    if (page == 1) {
      return;
    }
    setPage(page - 1);
  };
  const trangSau = function () {
    setPage(page + 1);
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
                    <h2 className="text-black h5">Shop All1</h2>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                {/* {product.map((pro, index) => (
                 
                    {id === pro.cateId ? pro.name : "không tồn tại"}

                ))} */}
                {product.map((pro, index) => (
                  
                (() => {                                                       
                    if (id == pro.cateId) {
                       return  <td>{pro.name}</td>&<td>{pro.name}</td>
                   }
                   else 
                    return  null
               })()
               

                ))}
              </div>
              <div class="container" style={{ marginLeft: "86%" }}>
                <ul class="pagination">
                  <li class="page-item" onClick={trangTruoc}>
                    <a class="page-link" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Trang trước</span>
                    </a>
                  </li>
                  <li>
                    <a className="page-link">{page}</a>
                  </li>
                  <li class="page-item" onClick={trangSau}>
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
                {Category.map((cate, index) => (
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

export default ProductCategory;
