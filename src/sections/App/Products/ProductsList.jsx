import { Grid } from "@mui/material";
import { connect } from "react-redux";
import CardProduct from "../../../../components/CardProduct";
import { getProducts } from "../../../../configs/redux/Functions/Products";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import loading from "../../../../assets/lottie/loading.json";

const ProductsList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    props.getProducts().then((res) => {
      setProducts(res.data);
    });
  }, [props]);

  if (products.length === 0) {
    return (
      <Lottie
        loop
        animationData={loading}
        play
        style={{ width: "100%", height: "300px" }}
      />
    );
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={product._id}>
          <CardProduct
            key={product._id}
            id={product._id}
            name={product.name}
            image={product.image}
            category={product.category}
            price={product.price}
            updatedAt={product.updatedAt}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const reduxDispatch = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(null, reduxDispatch)(ProductsList);
