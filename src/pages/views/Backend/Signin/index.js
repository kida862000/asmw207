import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

function Signin(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <div>
      <div class="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <p className="errorMsg">{emailError}</p>
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <p className="errorMsg">{passwordError}</p>
                        </div>
                        <hr />
                        <div className="form-group">
                          {hasAccount ? (
                            <>
                              <button onClick={handleLogin}>Sig in</button>
                              <p>
                                Don't have an account?{" "}
                                <button
                                  onClick={() => setHasAccount(!hasAccount)}
                                >
                                  Sign up
                                </button>
                              </p>
                            </>
                          ) : (
                            <>
                              <button onClick={handleSignup}>Sign uP</button>
                              <p>
                                Don't an account?{" "}
                                <button
                                  onClick={() => setHasAccount(!hasAccount)}
                                >
                                  Sign in
                                </button>
                              </p>
                            </>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signin;
