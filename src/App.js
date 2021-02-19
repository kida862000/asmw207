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
import User from "./pages/views/Backend/User";
import AddUser from "./pages/views/Backend/User/add";
import EditUser from "./pages/views/Backend/User/edit";
import Category from "./pages/views/Backend/Category";
import AddCategory from "./pages/views/Backend/Category/add";
import EditCategory from "./pages/views/Backend/Category/edit";
import Product from "./pages/views/Backend/Product";
import AddProduct from "./pages/views/Backend/Product/add";
import EditProduct from "./pages/views/Backend/Product/edit";
import Order from "./pages/views/Backend/Order";
// frontend
import Home from "./pages/views/Frontend/Home";
import Products from "./pages/views/Frontend/Product";
import ProductDetails from "./pages/views/Frontend/ProductDetails";
function App() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3000/category?_sort=id&_order=DESC`).then(
      (res) => {
        setCategory(res.data);
      }
    );
  }, []);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3000/product?_sort=id&_order=DESC`).then(
      (res) => {
        setProduct(res.data);
      }
    );
  }, []);
  const [user, setUser] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3000/user?_sort=id&_order=DESC`).then((res) => {
      setUser(res.data);
    });
  }, []);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3000/order?_sort=id&_order=DESC`).then((res) => {
      setOrder(res.data);
    });
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/admin/:path?/:path?/:path?" exact>
            <LayoutAdmin>
              <Switch>
                <Route exact path="/admin">
                  <Dashboard
                    user={user}
                    category={category}
                    product={product}
                    order={order}
                  />
                </Route>
                {/* User*/}
                <Route exact path="/admin/user">
                  <User user={user} />
                </Route>
                <Route exact path="/admin/user/add">
                  <AddUser />
                </Route>
                <Route exact path="/admin/user/edit/:id">
                  <EditUser user={user} />
                </Route>
                {/* Category*/}
                <Route exact path="/admin/category">
                  <Category category={category} />
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
                </Route>
                <Route exact path="/admin/product/add">
                  <AddProduct category={category} />
                </Route>
                <Route exact path="/admin/product/edit/:id">
                  <EditProduct category={category} product={product} />
                </Route>
                  {/* order*/}
                  <Route exact path="/admin/order">
                  <Order order={order} />
                </Route>
              </Switch>
            </LayoutAdmin>
          </Route>

          <Route path="/:path?/:path?/:path?" exact>
            <LayoutMain>
              <Route exact path="/">
                <Home category={category} product={product} />
              </Route>
              <Route exact path="/product">
                <Products product={product} category={category} />
              </Route>
              <Route exact path="/product/details/:id">
                <ProductDetails category={category} product={product} />{" "}
              </Route>
            </LayoutMain>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
