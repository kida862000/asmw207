import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
const AddUser = () => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const onSubmit = (data) => {
    Axios.post("http://localhost:3000/user", data).then((res) => {
      console.log(res.data);
      history.push("/admin/user");
      alert("Đã thêm danh mục thành công");
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
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="active">
              <Link to="/admin/user">user</Link>
            </li>
            <li className="active">Thêm Mới User</li>
          </ol>
        </div>
        <div id="page-inner">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>UserName</label>
              <input
                type="Text"
                className="form-control"
                id="username"
                name="username"
                ref={register({ required: true, maxLength: 15 })}
              />
              {errors.username && errors.username.type === "required" && (
                <span className="alert-danger">Nhập tên danh mục</span>
              )}
              {errors.username && errors.username.type === "maxLength" && (
                <span className="alert-danger">Tối đa 15 ký tự</span>
              )}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="paswword"
                name="password"
                ref={register({ required: true, maxLength: 15 })}
              />
              {errors.password && errors.password.type === "required" && (
                <span className="alert-danger">Nhập tên danh mục</span>
              )}
              {errors.password && errors.password.type === "maxLength" && (
                <span className="alert-danger">Tối đa 15 ký tự</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">SĐT</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                ref={register({ required: true, maxLength: 15 })}
              />
              {errors.phone && errors.phone.type === "required" && (
                <span className="alert-danger">Nhập tên danh mục</span>
              )}
              {errors.phone && errors.phone.type === "maxLength" && (
                <span className="alert-danger">Tối đa 15 ký tự</span>
              )}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                ref={register({ required: true, maxLength: 15 })}
              />
              {errors.email && errors.email.type === "required" && (
                <span className="alert-danger">Nhập tên danh mục</span>
              )}
              {errors.email && errors.email.type === "maxLength" && (
                <span className="alert-danger">Tối đa 15 ký tự</span>
              )}
            </div>
            <div className="form-group">
              <label>Quyền hạn </label>
              <select
                id="power"
                name="power"
                ref={register({ required: true, maxLength: 15 })}
              >
                <option value="">--Mời bạn chọn quyền hạn--</option>
                <option value="0">Admin</option>
                <option value="1">Người dùng</option>
              </select>
              {errors.power && errors.power.type === "required" && (
                <span className="alert-danger">Nhập tên danh mục</span>
              )}
              {errors.power && errors.power.type === "maxLength" && (
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

AddUser.propTypes = {};

export default AddUser;
