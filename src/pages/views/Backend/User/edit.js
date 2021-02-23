import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from "react-router-dom";

const EditUser = (props) => {
  const { id } = useParams();
  const { register, handleSubmit, errors } = useForm();
  // tạo đối tượng qua useState
  const [user, setUser] = useState([]);
  let history = useHistory();
  // hiển thị dữ liệu có id thông qua useEffect
  useEffect(() => {
    Axios.get(
      `http://localhost:3000/user/${id}`
    ).then((res) => {
      console.log(res);
      setUser(res.data);
    });
  }, []);
  const onSubmit = data => {
    const newObj = {
      ...data,
    
    };
    Axios.put(
      `http://localhost:3000/user/${id}`, newObj
    ).then((res) => {
      console.log(res.data);
      history.push("/admin/user");
      alert("Đã sửa thành công"); 
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
            <li className="active">Sửa User</li>
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
                defaultValue={user.username}
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
                id="password"
                name="password"
                defaultValue={user.password}
                ref={register({ required: true, maxLength: 15 })}
              />
              {errors.passwword && errors.passwword.type === "required" && (
                <span className="alert-danger">Nhập tên danh mục</span>
              )}
              {errors.passwword && errors.passwword.type === "maxLength" && (
                <span className="alert-danger">Tối đa 15 ký tự</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">SĐT</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                defaultValue={user.phone}
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
                defaultValue={user.email}
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
                <option defaultValue={user.power}>{user.power == 0 ? "Admin" : "Người dùng"}</option>
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

EditUser.propTypes = {
  id : PropTypes.number.isRequired,
  Username : PropTypes.string.isRequired,
  Passwword : PropTypes.string.isRequired,
  phone : PropTypes.number.isRequired,
  email : PropTypes.string.isRequired,
};

export default EditUser;
