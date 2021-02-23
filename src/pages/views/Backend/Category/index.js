import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Axios from "axios";
const Category = (props) => {
  const { id } = useParams();
  const removeCategory = (id) => {
    Axios.delete(`http://localhost:3000/category/${id}`).then((res) => {
      alert("Đã xóa thành công");
      window.location.reload();
    });
  };
  return (
    <div>
      <div id="page-wrapper">
        <div className="header">
          <h1 className="page-header">Danh Mục Sản Phẩm</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/admin/category/add">Thêm Mới</Link>
            </li>
          </ol>
        </div>
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              {/* Advanced Tables */}
              <div className="panel panel-default">
                <div className="panel-heading">Danh sách Danh Mục</div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table
                      className="table table-striped table-bordered table-hover"
                      id="dataTables-example"
                    >
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Tên Danh Mục</th>
                          <th>Sửa</th>
                          <th>Xóa</th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.category.map((cate, index) => (
                          <tr className="odd gradeX" key={index}>
                            <td>{index + 1}</td>
                            <td>{cate.name}</td>
                            <td>
                              <Link to={`/admin/category/edit/${cate.id}`}>
                                <button className="btn btn-primary btn-sm">
                                  sửa
                                </button>
                              </Link>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => removeCategory(cate.id)}
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
Category.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default Category;
