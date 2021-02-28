import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
const AddProduct = (props) => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const onSubmit = (data) => {
    Axios.post(
      "https://5f276252f5d27e001612dfc4.mockapi.io/API/products",
      data
    ).then((res) => {
      console.log(res.data);
      history.push("/admin/product");
      alert("Đã thêm danh mục thành công");
      window.location.reload();
    });
  };

  return (
    <div>
      <div id="page-wrapper">
        <div className="header">
          <h1 className="page-header">Sửa Sản Phẩm</h1>
        </div>
        <div id="page-inner">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Tên Sản Phẩm</label>
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
            <div className="form-group">
              <label>Ảnh</label>
              <input
                type="Text"
                className="form-control"
                id="images"
                name="images"
                ref={register({ required: true })}
              />
              {errors.images && errors.images.type === "required" && (
                <span className="alert-danger">Mời bạn nhập ảnh</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Giá</label>
              <input
                type="number"
                className="form-control"
                name="price"
                ref={register({ required: true })}
              />
              {errors.price && errors.price.type === "required" && (
                <span className="alert-danger">Nhập giá thường</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">Nội dung ngắn</label>
              <textarea
                class="form-control"
                name="noidung"
                rows="1"
                ref={register({ required: true })}
              ></textarea>
              {errors.noidung && errors.noidung.type === "required" && (
                <span className="alert-danger">Nhập nội dung ngắn</span>
              )}
            </div>
            <div className="form-group">
              <label>Danh mục</label>
              <select
                name="cateId"
                id="cateId"
                ref={register({ required: true, maxLength: 15 })}
              >
                <option value="">--Mời bạn chọn danh mục--</option>
                {props.category.map((cate, index) => (
                  <option value={cate.id}>{cate.name}</option>
                ))}
              </select>
              {errors.cateId && errors.cateId.type === "required" && (
                <span className="alert-danger">Nhập tên danh mục</span>
              )}
              {errors.cateId && errors.cateId.type === "maxLength" && (
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

AddProduct.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  noidung: PropTypes.string.isRequired,
  cateId: PropTypes.string.isRequired,
};

export default AddProduct;
