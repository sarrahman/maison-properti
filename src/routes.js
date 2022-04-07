import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Register from "./pages/Register";
import AddProductDashboard from "./pages/Dashboard/form/Product";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import EditProduct from "./pages/Dashboard/form/EditProduct";
import { connect } from "react-redux";
import { refreshToken } from "./configs/redux/Functions/Auth.js";
import { useEffect } from "react";
import Me from "./pages/Me";

const Router = (props) => {
  useEffect(() => {
    if (props.isLogin) {
      props.refreshToken();
    }
  }, [props]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:uid" element={<Profile />} />
        <Route
          path="/profile"
          element={props.isLogin ? <Me /> : <Navigate to="/404" />}
        />
        <Route
          path="/profile/edit"
          element={props.isLogin ? <EditProfile /> : <Navigate to="/404" />}
        />
        {/* private pages */}
        <Route
          path="/dashboard"
          element={props.isLogin ? <Dashboard /> : <Navigate to="/404" />}
        />
        <Route
          path="/dashboard/product/new"
          element={
            props.isLogin ? <AddProductDashboard /> : <Navigate to="/404" />
          }
        />
        <Route
          path="/dashboard/product/edit/:id"
          element={props.isLogin ? <EditProduct /> : <Navigate to="/404" />}
        />

        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const reduxState = (state) => ({
  isLogin: state.isLogin,
});

const reduxAction = (dispatch) => ({
  refreshToken: () => dispatch(refreshToken()),
});

export default connect(reduxState, reduxAction)(Router);
