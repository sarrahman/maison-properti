import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

function CardProfile(props) {
  return (
    <Card
      sx={{
        p: 2,
        height:"170px",
        m: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ mt: 1 }}>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
        }}>
        <Avatar sx={{ width: "90px",bgcolor: lightBlue[600], height: "90px" }} src={props.photoUrl} />
        </Box>
        <Typography variant="h5" component="h2">
          {props.username}
        </Typography>
      </Box>
    </Card>
  );
}

export default CardProfile;
