import { Grid } from "@mui/material";
import { connect } from "react-redux";
import AppBar from "../components/AppBar";
import CardDetailProduct from "../sections/App/Product/CardDetailProduct";
import { useParams } from "react-router-dom";
import { getProduct } from "../configs/redux/Functions/Products";
import { useEffect, useState } from "react";
import DeskripsiProduct from "../sections/App/Product/DeskripsiProduct";
import Fasilitas from "../sections/App/Product/Fasilitas";
import Copyright from "../components/Footer";
import ButtonChatWa from "../components/ButtonChatWa";
import CardProfile from "../sections/App/Product/CardProfile";

const Product = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [contactSeller, setContactSeller] = useState({});

  useEffect(() => {
    props.getProduct(id).then((res) => {
      setProduct(res.data);
    });
  }, [id, props]);

  return (
    <>
      <AppBar />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CardDetailProduct data={product} />
          <DeskripsiProduct description={product.description} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Fasilitas data={product} />
          <CardProfile
            uid={product.uid}
            handleContact={(phone) => setContactSeller(phone)}
          />
          <ButtonChatWa
            contactSeller={contactSeller}
            productName={product.judul}
          />
        </Grid>
      </Grid>
      <Copyright />
    </>
  );
};

const reduxActions = (dispatch) => ({
  getProduct: (id) => dispatch(getProduct(id)),
});

export default connect(null, reduxActions)(Product);
