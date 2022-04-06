import Copyright from "../components/Footer";
import AppBar from "../components/AppBar";
import { Box } from "@mui/material";
import BannerComp from "../sections/App/Home/Banner";
import ProductsList from "../sections/App/Home/ProductsList";

const Home = () => {
  return (
    <>
      <AppBar />
      <Box
        sx={{
          m: { xs: 1, md: 2 },
          p: 0.5,
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <BannerComp />
      </Box>
      <Box
        sx={{
          m: { xs: 1, md: 2 },
        }}
      >
        <ProductsList />
      </Box>
      <Copyright />
    </>
  );
};

export default Home;
