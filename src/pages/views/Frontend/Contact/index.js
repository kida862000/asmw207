import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const onSubmit = (data) => {
    Axios.post(
      "https://5f276252f5d27e001612dfc4.mockapi.io/API/contact",
      data
    ).then((res) => {
      console.log(res.data);
      history.push("/contact");
      alert("Cảm ơn bạn đã gửi phản hồi đến chúng tôi");
      window.location.reload();
    });
  };

  return (
    <div>
      {/*Section: Contact v.2*/}
      <section className="mb-4" style={{ margin: "0 auto", width: "80%" }}>
        {/*Section heading*/}
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        {/*Section description*/}

        <div className="row">
          {/*Grid column*/}
          <div className="col-md-9 mb-md-0 mb-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Họ và tên</label>
                <input
                  type="Text"
                  className="form-control"
                  id="name"
                  name="name"
                  ref={register({ required: true })}
                />
                {errors.name && errors.name.type === "required" && (
                  <span className="alert-danger">Mời bạn nhập họ và tên</span>
                )}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  ref={register({ required: true })}
                />
                {errors.email && errors.email.type === "required" && (
                  <span className="alert-danger">Mời bạn nhập Email</span>
                )}
              </div>
              <div className="form-group">
                <label>Tiêu đề</label>
                <input
                  type="text"
                  className="form-control"
                  id="Subject"
                  name="Subject"
                  ref={register({ required: true })}
                />
                {errors.Subject && errors.Subject.type === "required" && (
                  <span className="alert-danger">Mời bạn nhập Tiêu đề</span>
                )}
              </div>
              <div className="form-group">
                <label>Nội dung cần phản ánh</label>
                <input
                  type="text"
                  className="form-control"
                  id="message"
                  name="message"
                  ref={register({ required: true })}
                />
                {errors.message && errors.message.type === "required" && (
                  <span className="alert-danger">Mời bạn nhập Nội dung cần phản ánh</span>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <div className="status" />
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-3 text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044334!2d105.74459841476343!3d21.03812778599329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1614417682550!5m2!1svi!2s"
              width={400}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          {/*Grid column*/}
        </div>
      </section>
      {/*Section: Contact v.2*/}
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
