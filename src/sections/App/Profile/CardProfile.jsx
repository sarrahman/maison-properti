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
        display: "flex",
        justifyContent: { xs: "center" },
        p: 2,
        height: "180px",
        m: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-around" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: {md: 4}
          }}
        >
          <Avatar
            sx={{ width: "90px", bgcolor: lightBlue[600], height: "90px" }}
            src={props.photoUrl}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              {props.nama}
            </Typography>
            <Typography variant="subtitle1" color="secondary" gutterBottom>
              @{props.username}
            </Typography>
            <Typography variant="body1">
              {props.about || "pengguna Maison.com"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default CardProfile;
