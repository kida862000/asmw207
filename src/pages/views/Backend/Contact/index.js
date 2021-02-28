import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Axios from "axios";
const Contact = (props) => {
  const { id } = useParams();
  const [contact, setContact] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    Axios.get(
      `https://5f276252f5d27e001612dfc4.mockapi.io/API/contact` +
        "?page=" +
        page +
        "&limit=10"
    ).then((res) => {
      console.log(res);
      setContact(res.data);
    });
  }, [page]);
  const removeContact = (id) => {
    Axios.delete(
      `https://5f276252f5d27e001612dfc4.mockapi.io/API/contact/${id}`
    ).then((res) => {
      alert("Đã xóa thành công");
      window.location.reload();
    });
  };
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
      <div id="page-wrapper">
        <div className="header">
          <h1 className="page-header">Danh Sách Phản Hồi</h1>
        </div>
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              {/* Advanced Tables */}
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="table-responsive">
                    <table
                      className="table table-striped table-bordered table-hover"
                      id="dataTables-example"
                    >
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Họ và tên</th>
                          <th>Email</th>
                          <th>Tiêu đề</th>
                          <th>Chi tiết</th>
                          <th>Xóa</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contact.map((cont, index) => (
                          <tr className="odd gradeX" key={index}>
                            <td>{index + 1}</td>
                            <td>{cont.name}</td>
                            <td>{cont.email}</td>
                            <td>{cont.Subject}</td>
                            <td>{cont.message}</td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => removeContact(cont.id)}
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <ul className="pagination">
                        <li className="page-item" onClick={trangTruoc}>
                          <a className="page-link">Trang trước</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link">{page}</a>
                        </li>
                        <li className="page-item" onClick={trangSau}>
                          <a className="page-link">Trang sau</a>
                        </li>
                      </ul>
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
Contact.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  Subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default Contact;
