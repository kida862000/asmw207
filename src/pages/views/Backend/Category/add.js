import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
const AddCate = () => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const onSubmit = (data) => {
    Axios.post("http://localhost:3000/category", data).then((res) => {
      console.log(res.data);
      history.push("/admin/category");
      alert("Đã thêm danh mục thành công");
      window.location.reload();
    });
  };
  return (
    <div>
      <div id="page-wrapper">
        <div className="header">
          <h1 className="page-header">Danh sách danh mục</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="active">
              <Link to="/admin/category">Danh Mục</Link>
            </li>
            <li className="active">Thêm Mới Danh Mục</li>
          </ol>
        </div>
        <div id="page-inner">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Danh Mục</label>
              <input
                type="Text"
                className="form-control"
                id="name"
                name="name"
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

AddCate.propTypes = {};

export default AddCate;
