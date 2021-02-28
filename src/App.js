import LayoutAdmin from "./pages/LayoutAdmin";
import LayoutMain from "./pages/LayoutMain";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Dashboard from "./pages/views/Backend/Dashboard";
import Category from "./pages/views/Backend/Category";
import AddCategory from "./pages/views/Backend/Category/add";
import EditCategory from "./pages/views/Backend/Category/edit";
import Product from "./pages/views/Backend/Product";
import AddProduct from "./pages/views/Backend/Product/add";
import EditProduct from "./pages/views/Backend/Product/edit";
import ProductCate from "./pages/views/Backend/Product/ProductCate";
// import Signin from "./pages/views/Backend/Signin";
import ContactA from "./pages/views/Backend/Contact";
// frontend
import Home from "./pages/views/Frontend/Home";
import Products from "./pages/views/Frontend/Product";
import ProductDetails from "./pages/views/Frontend/ProductDetails";
import ProductCategory from "./pages/views/Frontend/ProductCategory";
import Contact from "./pages/views/Frontend/Contact";
import Login from "./pages/views/Frontend/Login";
//firebase
import firebase from "firebase";
const config = {
  apiKey: "AIzaSyBX9b2G_VuFwEDZCIM1YSXYQAbU_6nbhLA",
  authDomain: "reactjs-aa820.firebaseapp.com",
  databaseURL: "https://reactjs-aa820.firebaseio.com",
  projectId: "reactjs-aa820",
  storageBucket: "reactjs-aa820.appspot.com",
  messagingSenderId: "421834289164",
  appId: "1:421834289164:web:94af1f6f26859bc3aefe29",
  // ...
};
firebase.initializeApp(config);
function App() {
  const [pagec, setPagec] = useState(1);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    Axios.get(
      ` https://5f276252f5d27e001612dfc4.mockapi.io/API/category` +
        "?page=" +
        pagec +
        "&limit=10"
    ).then((res) => {
      setCategory(res.data);
    });
  }, [pagec]);
  const [page, setPage] = useState(1);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://5f276252f5d27e001612dfc4.mockapi.io/API/products` +
        "?page=" +
        page +
        "&limit=10"
    ).then((res) => {
      setProduct(res.data);
    });
  }, [page]);
  const trangTruocc = function () {
    if (pagec == 1) {
      return;
    }
    setPagec(pagec - 1);
  };
  const trangSauc = function () {
    setPagec(pagec + 1);
  };
  const trangTruoc = function () {
    if (page == 1) {
      return;
    }
    setPage(page - 1);
  };
  const trangSau = function () {
    setPage(page + 1);
  };
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = () => {
    clearError();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignup = () => {
    clearError();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleLogout = () => {
    firebase.auth().signOut();
  };
  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/admin/:path?/:path?/:path?" exact>
            <LayoutAdmin>
              <Switch>
                {/* <Route exact path="/admin/">
                  <Signin
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                  />
                </Route> */}
                <Route exact path="/admin/">
                  <Dashboard category={category} product={product} />
                </Route>
                {/* Category*/}
                <Route exact path="/admin/category">
                  <Category category={category} />
                  <ul className="pagination">
                    <li className="page-item" onClick={trangTruocc}>
                      <a className="page-link">Trang trước</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">{pagec}</a>
                    </li>
                    <li className="page-item" onClick={trangSauc}>
                      <a className="page-link">Trang sau</a>
                    </li>
                  </ul>
                </Route>
                <Route exact path="/admin/category/add">
                  <AddCategory />
                </Route>
                <Route exact path="/admin/category/edit/:id">
                  <EditCategory category={category} />
                </Route>
                {/* Product*/}
                <Route exact path="/admin/product">
                  <Product product={product} category={category} />
                  <ul className="pagination">
                    <li className="page-item" onClick={trangTruoc}>
                      <a className="page-link">Trang trước</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">{page}</a>
                    </li>
                    <li className="page-item" onClick={trangSau}>
                      <a className="page-link">Trang sau</a>
                    </li>
                  </ul>
                </Route>
                <Route exact path="/admin/product/add">
                  <AddProduct category={category} />
                </Route>
                <Route exact path="/admin/product/edit/:id">
                  <EditProduct category={category} product={product} />
                </Route>
                <Route exact path="/admin/product/productcate/:id">
                  <ProductCate category={category} product={product} />
                  <ul className="pagination">
                    <li className="page-item" onClick={trangTruoc}>
                      <a className="page-link">Trang trước</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">{page}</a>
                    </li>
                    <li className="page-item" onClick={trangSau}>
                      <a className="page-link">Trang sau</a>
                    </li>
                  </ul>
                </Route>
                <Route exact path="/admin/contact">
                  <ContactA />
                </Route>
              </Switch>
            </LayoutAdmin>
          </Route>

          <Route path="/:path?/:path?/:path?" exact>
            <LayoutMain>
              <Route exact path="/">
                <Home category={category} />
              </Route>
              <Route exact path="/product">
                <Products category={category} />
              </Route>
              <Route exact path="/productcategory/:id">
                <ProductCategory />
              </Route>
              <Route exact path="/product/details/:id">
                <ProductDetails category={category} product={product} />{" "}
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </LayoutMain>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
