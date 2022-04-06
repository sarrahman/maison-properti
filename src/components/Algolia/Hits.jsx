import { Grid } from '@mui/material';
import { useHits } from 'react-instantsearch-hooks';
import Lottie from 'react-lottie-player';
import CardProduct from '../CardProduct';
import loading from "../../assets/lottie/loading.json";

export function Hits() {
  const { hits } = useHits();

  if (hits.length === 0) {
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
      {hits.map((product) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={product._id}>
          <CardProduct
            key={product.objectID}
            id={product._id}
            name={product.judul}
            image={product.image}
            category={product.category}
            price={product.price}
            updatedAt={product.updatedAt}
            location={product.location}
          />
        </Grid> 
      ))}
    </Grid>
  );
}