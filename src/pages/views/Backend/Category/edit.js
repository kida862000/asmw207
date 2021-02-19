import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from "react-router-dom";

const EditCate = (props) => {
  const { id } = useParams();
  const { register, handleSubmit, errors } = useForm();
  // tạo đối tượng qua useState
  const [category, setCategory] = useState([]);
  let history = useHistory();
  // hiển thị dữ liệu có id thông qua useEffect
  useEffect(() => {
    Axios.get(`http://localhost:3000/category/${id}`).then((res) => {
      console.log(res);
      setCategory(res.data);
    });
  }, []);
  const onSubmit = (data) => {
    const newObj = {
      ...data,
    };
    Axios.put(`http://localhost:3000/category/${id}`, newObj).then((res) => {
      console.log(res.data);
      history.push("/admin/category");
      alert("Đã sửa thành công");
      window.location.reload();
    });
  };
  return (
    <div>
      <div id="page-wrapper">
        <div className="header">
          <h1 className="page-header">Danh sách Danh Mục</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="active">
              <Link to="/admin/category">Danh Mục</Link>
            </li>
            <li className="active">Sửa Danh MỤc</li>
          </ol>
        </div>
        <div id="page-inner">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>UserName</label>
              <input
                type="Text"
                className="form-control"
                id="name"
                name="name"
                defaultValue={category.name}
                ref={register({ required: true, maxLength: 15 })}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="alert-danger">Nhập tên danh mục</span>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <span className="alert-danger">Tối đa 15 ký tự</span>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

EditCate.propTypes = {};

export default EditCate;
