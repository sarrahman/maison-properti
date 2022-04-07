import { Typography } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      sx={{ mt: 8, mb: 4 }}
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Created By Sarrahman | Copyright © {new Date().getFullYear()}
    </Typography>
  );
}

export default Copyright;
