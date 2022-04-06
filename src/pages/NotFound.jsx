import { Box, Button, Typography } from "@mui/material";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import Copyright from "../components/Footer";
import notfound from '../assets/lottie/notfound.json';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar />
      <Box sx={{ p: {xs: 1, md: 2}, m: {xs: 1, md: 2}, boxShadow: 4, borderRadius: 5 }}>
        <Typography sx={{ textAlign: "center" }} variant="h6">
          Kamu Tersesat
        </Typography>
        <Lottie loop animationData={notfound} play style={{ width: "100%", height: '300px' }} />
        <Button
          onClick={() => navigate("/")}
          sx={{ width: "100%"}}
          variant="contained"
        >
          Yuk Pulang !
        </Button>
      </Box>
      <Copyright />
    </div>
  );
};

export default NotFound;