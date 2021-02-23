import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Axios from "axios";
const Order = (props) => {
  const { id } = useParams();
  const remoOrder = (id) => {
    Axios.delete(`http://localhost:3000/order/${id}`).then((res) => {
      alert("Đã xóa thành công");
      window.location.reload();
    });
  };
  return (
    <div>
      <div id="page-wrapper">
        <div className="header">
          <h1 className="page-header">Danh sách Order</h1>
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
                          <th>Pro_Id</th>
                          <th>Xóa</th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.order.map((or, index) => (
                          <tr className="odd gradeX" key={index}>
                            <td>{index + 1}</td>
                            <td>{or.proId}</td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => remoOrder(or.id)}
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
Order.propTypes = {
  id: PropTypes.number.isRequired,
  proId: PropTypes.number.isRequired,
};
export default Order;
