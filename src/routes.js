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
    props.refreshToken();
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
        <Route path="/profile" element={<Me />} />
        <Route path="/profile/:uid" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="*" element={<NotFound />} />

        {/* private pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/product/new"
          element={<AddProductDashboard />}
        />
        <Route path="/dashboard/product/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

const reduxAction = (dispatch) => ({
  refreshToken: () => dispatch(refreshToken()),
});

export default connect(null, reduxAction)(Router);
