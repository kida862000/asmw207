import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Axios from "axios";
const ProductCate = (props) => {
  const { id } = useParams();
  const removeProduct = (id) => {
    Axios.delete(
      `https://5f276252f5d27e001612dfc4.mockapi.io/API/products/${id}`
    ).then((res) => {
      alert("Đã xóa thành công");
      window.location.reload();
    });
  };

  return (
    <div>
      <div id="page-wrapper">
        <div className="header">
          <h1 className="page-header">Danh Sách Sản Phẩm Của {props.category.map((cate, index) => (
                      <span>  {id == cate.id? cate.name:null}</span>
                    
                    ))}</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/admin/product/add">Thêm Mới</Link>
            </li>
          </ol>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-9 order-2">
                <div className="row mb-5">
                  <table
                    className="table table-striped table-bordered table-hover"
                    id="dataTables-example"
                  >
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên Sản Phẩm </th>
                        <th>Ảnh</th>
                        <th>Giá </th>
                        <th>Tiêu đề</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                      </tr>
                    </thead>

                    {props.product.map((pro, index) => (
                      <tbody>
                        {id === pro.cateId ? (
                          <tr className="odd gradeX" key={index}>
                            <td>{index + 1}</td>
                            <td>{pro.name}</td>
                            <td>
                              <img
                                src={pro.images}
                                width="100"
                                height="100"
                              ></img>
                            </td>
                            <td>${pro.price}</td>
                            <td>{pro.noidung}</td>
                            <td>
                              <Link to={`/admin/product/edit/${pro.id}`}>
                                <button className="btn btn-primary btn-sm">
                                  sửa
                                </button>
                              </Link>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => removeProduct(pro.id)}
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        ) : null}
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
              <div className="col-md-3 order-1 mb-5 mb-md-0">
                <div className="border p-4 rounded mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Categories
                  </h3>
                  <ul className="list-unstyled mb-0">
                    {props.category.map((cate, index) => (
                      <li className="mb-1">
                        <a href="#" className="d-flex">
                          <span>
                            <Link to={`/admin/product/productcate/${cate.id}`}>
                              {cate.name}
                            </Link>
                          </span>
                        </a>
                      </li>
                    ))}
                    <li>
                      <a>
                        <Link to={`/admin/product`}>ALL Product</Link>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /. PAGE INNER  */}
    </div>
  );
};
ProductCate.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  noidung: PropTypes.string.isRequired,
  cateId: PropTypes.string.isRequired,
};
export default ProductCate;
