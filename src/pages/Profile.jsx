import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import AppBar from "../components/AppBar";
import Copyright from "../components/Footer";
import { getUser } from "../configs/redux/Functions/Auth";
import CardProfile from "../sections/App/Profile/CardProfile";
import ProfileDetail from "../sections/App/Profile/ProfileDetail";
import { useParams } from "react-router-dom";
import { getProductByUid } from "../configs/redux/Functions/Products";
import CardProduct from "../components/CardProduct";

const Profile = (props) => {
  const { uid } = useParams();
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    props.getUser(uid).then((res) => {
      setUser(res.data);
    });
    props.getProductByUid(uid).then((res) => {
      setProducts(res.data);
    });
  }, [uid, props]);

  return (
    <div>
      <AppBar />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} >
          <CardProfile username={user.username} photoUrl={user.photoUrl} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <ProfileDetail
            email={user.email}
            phone={user.contact && user.contact.phone}
            address={user.address && user.address.street}
            city={user.address && user.address.city}
            uid={user._id}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          m: { xs: 1, md: 2 },
        }}
      >
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={product._id}>
              <CardProduct
                key={product._id}
                id={product._id}
                name={product.judul}
                image={product.image}
                category={product.category}
                price={product.price}
                updatedAt={product.updatedAt}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Copyright />
    </div>
  );
};

const reduxActions = (dispatch) => ({
  getUser: (id) => dispatch(getUser(id)),
  getProductByUid: (uid) => dispatch(getProductByUid(uid)),
});

export default connect(null, reduxActions)(Profile);
