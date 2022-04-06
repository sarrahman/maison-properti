import { Box, Button, Grid, Typography } from "@mui/material";
import { connect } from "react-redux";
import {
  deleteProduct,
  getProductByUid,
} from "../../configs/redux/Functions/Products";
import { useEffect, useState } from "react";
import DashboardLayouts from "../../layouts/DashboardLayouts";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import CardListProduct from "../../components/CardListProduct";
import { profile } from "../../configs/redux/Functions/Auth";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [uid, setUid] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    props.profile().then((res) => {
      setUid(res.user.id);
    });
   if(uid !== ''){
    props.getProductByUid(uid).then((res) => {
      setProducts(res.data);
    });
   }
  }, [props, uid]);

  return (
    <DashboardLayouts
      main={
        <>
          <Box>
            <Button
              variant="contained"
              onClick={() => navigate("/dashboard/product/new")}
            >
              <AddIcon />
              Add Product
            </Button>
          </Box>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={12} md={12}>
              <Box
                sx={{
                  width: "100%",
                  display: { xs: "flex", md: "none" },
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderRadius: "10px",
                  padding: "10px",
                  boxShadow: "0px 0px 10px #00000029",
                }}
              >
                <Typography>Nama</Typography>
                <Typography>Harga</Typography>
                <Typography>Action</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderRadius: "10px",
                  padding: "10px",
                  boxShadow: "0px 0px 10px #00000029",
                }}
              >
                <Typography>Gambar</Typography>
                <Typography>Nama Barang</Typography>
                <Typography>Kategori</Typography>
                <Typography>Harga</Typography>
                <Typography>Action</Typography>
              </Box>
            </Grid>
            {products.map((product) => (
              <>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  key={product._id}
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <CardListProduct
                    handleRemove={(id, judul) => {
                      const cfm = window.confirm(`Hapus ${judul}?`);
                      if (cfm) {
                        props.removeProduct(id).then((res) => {
                          window.location.reload();
                        });
                      }
                    }}
                    name={product.judul}
                    price={product.price}
                    id={product._id}
                  />
                </Grid>
              </>
            ))}
            {products.map((product) => (
              <>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  key={product._id}
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <CardListProduct
                    handleRemove={(id, judul) => {
                      const cfm = window.confirm(`Hapus ${judul}?`);
                      if (cfm) {
                        props.removeProduct(id).then((res) => {
                          window.location.reload();
                        });
                      }
                    }}
                    img={product.image}
                    name={product.judul}
                    price={product.price}
                    category={product.category}
                    id={product._id}
                  />
                </Grid>
              </>
            ))}
          </Grid>
        </>
      }
    />
  );
};

const reduxDispatch = (dispatch) => ({
  getProductByUid: (uid) => dispatch(getProductByUid(uid)),
  removeProduct: (id) => dispatch(deleteProduct(id)),
  profile: () => dispatch(profile()),
});

export default connect(null, reduxDispatch)(Dashboard);
