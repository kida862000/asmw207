import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
const Home = (props) => {
  const { id } = useParams();
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
              <h2 className="mb-4">New Shoes Arrival</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {props.product.map((pro) => (
              <div className="col-sm-12 col-md-6 col-lg-3 ftco-animate d-flex" style={{marginTop: '25px'}}>
                <div className="product d-flex flex-column">
                  <a href="#" className="img-prod">
                    <img src={pro.images} width="200" height="300"></img>
                    <div className="overlay" />
                  </a>
                  <h3>
                    <Link to={`/product/details/${pro.id}`}>{pro.name}</Link>
                  </h3>
                  <div class="pricing">
                    <p class="price">
                      <span>${pro.price}</span>
                    </p>
                  </div>
                  <Link
                    to={`/product/details/${pro.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Chi Tiết
                  </Link>
                  <a href="#" className="btn btn-danger btn-sm">
                    Add to cart
                  </a>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
