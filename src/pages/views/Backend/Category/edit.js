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
    Axios.get(
      `https://5f276252f5d27e001612dfc4.mockapi.io/API/category/${id}`
    ).then((res) => {
      console.log(res);
      setCategory(res.data);
    });
  }, []);
  const onSubmit = (data) => {
    const newObj = {
      ...data,
    };
    Axios.put(
      `https://5f276252f5d27e001612dfc4.mockapi.io/API/category/${id}`,
      newObj
    ).then((res) => {
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
          <h1 className="page-header">Sửa Danh Mục</h1>
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
                defaultValue={category.name}
                ref={register({ required: true})}
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

EditCate.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default EditCate;
