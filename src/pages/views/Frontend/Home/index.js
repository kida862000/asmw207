import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
const Home = (props) => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://5f276252f5d27e001612dfc4.mockapi.io/API/products` +
        "?page=" +
        page +
        "&limit=12"
    ).then((res) => {
      setProducts(res.data);
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
      <div
        className="site-blocks-cover"
        style={{
          backgroundImage:
            "url(https://www.chupsanpham.net/wp-content/uploads/2017/08/chup-quang-cao-banner-1-900x371.jpg)",
        }}
        data-aos="fade"
      ></div>
      <div className="site-section site-blocks-2">
        <div className="container">
          <div className="row">
            {props.category.map((cate) => (
              <div
                className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0"
                data-aos="fade"
                data-aos-delay
              >
                <a className="block-2-item" href="#">
                  <div className="text">
                    <h3 style={{ color: "white", fontSize: 18 }}>
                      {cate.name}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h2 className="mb-4">Danh sách sản phẩm</h2>
            </div>
          </div>
        </div>
        <div class="container" style={{marginLeft:'86%'}}>
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
        <div className="row mb-5">
          {products.map((pro, index) => (
            <div
              className="col-sm-6 col-lg-3 mb-4"
              data-aos="fade-up"
              key={index}
            >
              <div className="block-4 text-center border">
                <figure className="block-4-image">
                  <Link to={`/products/details/${pro.id}`}>
                    <img src={pro.images} width="250" height="300"></img>
                  </Link>
                </figure>
                <div className="block-4-text p-4">
                  <h3>
                    <Link to={`/product/details/${pro.id}`}>{pro.name}</Link>
                  </h3>
                  <p className="text-primary font-weight-bold">
                    New Price: ${pro.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </section>
    </div>
  );
};

export default Home;
