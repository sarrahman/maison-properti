import { Box } from "@mui/material";
import AlgoliaSearch from "../components/Algolia";
import AppBar from "../components/AppBar";
import Copyright from "../components/Footer";

const Products = () => {
  return (
    <>
      <AppBar />
      <Box
        sx={{
          m: { xs: 1, md: 2 },
        }}
      >
        <AlgoliaSearch />
      </Box>
      <Copyright />
    </>
  );
};

export default Products;
