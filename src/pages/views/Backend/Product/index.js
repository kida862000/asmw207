import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Axios from "axios";
const Product = (props) => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3000/category?_sort=id&_order=DESC`).then(
      (res) => {
        setCategory(res.data);
      }
    );
  }, []);
  const removeProduct = (id) => {
    Axios.delete(`http://localhost:3000/product/${id}`).then((res) => {
      alert("Đã xóa thành công");
      window.location.reload();
    });
  };
  return (
    <div>
      <div id="page-wrapper">
        <div className="header">
          <h1 className="page-header">Danh Sách Sản Phẩm</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/admin/product/add">Thêm Mới</Link>
            </li>
          </ol>
        </div>
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              {/* Advanced Tables */}
              <div className="panel panel-default">
                <div className="panel-heading">Danh Sách Sản Phẩm</div>
                <div className="panel-body">
                  <div className="table-responsive">
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
                          <th>Danh Mục</th>
                          <th>Sửa</th>
                          <th>Xóa</th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.product.map((pro, index) => (
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
                            <td>{pro.cateId}</td>
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
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/*End Advanced Tables */}
            </div>
          </div>
        </div>
      </div>
      {/* /. PAGE INNER  */}
    </div>
  );
};

export default Product;
