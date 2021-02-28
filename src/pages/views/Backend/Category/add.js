import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
const AddCate = () => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const onSubmit = (data) => {
    Axios.post("https://5f276252f5d27e001612dfc4.mockapi.io/API/category", data).then((res) => {
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
          <h1 className="page-header">Thêm Danh Mục</h1>
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
                ref={register({ required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="alert-danger">Nhập tên danh mục</span>
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

AddCate.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default AddCate;
