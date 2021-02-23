import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Axios from "axios";
const User = (props) => {
  const { id } = useParams();
  const removeUser = (id) => {
    Axios.delete(
      `http://localhost:3000/user/${id}`
    ).then((res) => {
      alert("Đã xóa thành công");
      window.location.reload();
    });
  };
  return (
    <div>
      <div id="page-wrapper">
        <div className="header">
          <h1 className="page-header">Danh sách User</h1>
          <ol className="breadcrumb">
            <li>
            <Link to="/admin/user/add">Thêm Mới</Link>
            </li>
          </ol>
        </div>
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              {/* Advanced Tables */}
              <div className="panel panel-default">
                <div className="panel-heading">Danh sách Người dùng</div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table
                      className="table table-striped table-bordered table-hover"
                      id="dataTables-example"
                    >
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Username</th>
                          <th>Passwword</th>
                          <th>SĐT</th>
                          <th>Email</th>
                          <th>Quyền hạn</th>
                          <th>Sửa</th>
                          <th>Xóa</th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.user.map((user, index) => (
                          <tr className="odd gradeX" key={index}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>
                              {user.power == 0 ? "Admin" : "Người dùng"}
                            </td>
                            <td>
                              <Link to={`/admin/user/edit/${user.id}`}>
                                <button className="btn btn-primary btn-sm">
                                  sửa
                                </button>
                              </Link>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => removeUser(user.id)}
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
User.propTypes = {
  id : PropTypes.number.isRequired,
  Username : PropTypes.string.isRequired,
  Passwword : PropTypes.string.isRequired,
  phone : PropTypes.number.isRequired,
  email : PropTypes.string.isRequired,
}
export default User;
