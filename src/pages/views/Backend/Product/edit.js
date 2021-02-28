import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from "react-router-dom";

const EditProduct = (props) => {
  const { id } = useParams();
  const { register, handleSubmit, errors } = useForm();
  // tạo đối tượng qua useState
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  let history = useHistory();
  // hiển thị dữ liệu có id thông qua useEffect
  useEffect(() => {
    Axios.get(
      `https://5f276252f5d27e001612dfc4.mockapi.io/API/products/${id}`
    ).then((res) => {
      setProduct(res.data);
    });
  }, []);
  useEffect(() => {
    Axios.get(`https://5f276252f5d27e001612dfc4.mockapi.io/API/category`).then(
      (res) => {
        setCategory(res.data);
      }
    );
  }, []);
  const onSubmit = (data) => {
    const newObj = {
      ...data,
    };
    Axios.put(
      `https://5f276252f5d27e001612dfc4.mockapi.io/API/products/${id}`,
      newObj
    ).then((res) => {
      history.push("/admin/product");
      alert("Đã sửa thành công");
      window.location.reload();
    });
  };
  const [categories, setCategories] = useState([]);
  // hiển thị dữ liệu có id thông qua useEffect
  useEffect(() => {
    Axios.get(`https://5f276252f5d27e001612dfc4.mockapi.io/API/category`).then(
      (res) => {
        setCategories(res.data);
      }
    );
  }, []);
  return (
    <div>
      <div id="page-wrapper">
        <div className="header">
          <h1 className="page-header">Thêm Sản Phẩm</h1>
        </div>
        <div id="page-inner">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Tên SP</label>
              <input
                type="Text"
                className="form-control"
                id="name"
                name="name"
                defaultValue={product.name}
                ref={register({ required: true })}
              />

              {errors.username && errors.username.type === "required" && (
                <span className="alert-danger">Mời bạn nhập tên sản phẩm</span>
              )}
            </div>
            <div className="form-group">
              <label>Ảnh</label>
              <input
                type="Text"
                className="form-control"
                id="images"
                name="images"
                defaultValue={product.images}
                ref={register({ required: true })}
              />
              <img src={product.images} width="200"></img>
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
                defaultValue={product.price}
                ref={register({ required: true })}
              />
              {errors.price && errors.price.type === "required" && (
                <span className="alert-danger">Mời bạn nhập  giá </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">Nội dung ngắn</label>
              <textarea
                class="form-control"
                name="noidung"
                rows="1"
                defaultValue={product.noidung}
                ref={register({ required: true })}
              ></textarea>
              {errors.noidung && errors.noidung.type === "required" && (
                <span className="alert-danger">Mời bạn nhập  nội dung ngắn</span>
              )}
            </div>
            <div className="form-group">
              <label>Danh mục</label>
              <select
                name="cateId"
                id="cateId"
                ref={register({ required: true })}
              >
                <option value={product.cateId}>{product.cateId}</option>
                {category.map((cate, index) => (
                  <option value={cate.id}>{cate.name}</option>
                ))}
              </select>
              {errors.cateId && errors.cateId.type === "required" && (
                <span className="alert-danger">Mời Bạn chọn Danh Mục</span>
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

EditProduct.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  noidung: PropTypes.string.isRequired,
  cateId: PropTypes.string.isRequired,
};

export default EditProduct;
