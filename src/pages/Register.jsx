import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import AlertComp from "../components/Alert";
import Copyright from "../components/Footer";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar } from "@mui/material";
import { RegisterWithEmail } from "../configs/redux/Functions/Auth";
import AppBar from "../components/AppBar";

const theme = createTheme();

function Register(props) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    props
      .registerEmail({
        username: data.get("username"),
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((res) => {
        if (res.status === 201) {
          setMessage(res.data.message);
          setStatus(true);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }
      })
      .catch((err) => {
        setStatus(false);
        setMessage(err.response.data.message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Collapse in={message !== ""}>
            <AlertComp status={status} text={message} />
          </Collapse>
          <Typography component="h1" variant="h5">
            Daftar
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={() => navigate("/login")} variant="text">
                  Sudah Punya Akun? Masuk
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

const reduxState = (state) => ({
  isLogin: state.isLogin,
});

const reduxActions = (dispatch) => ({
  registerEmail: (data) => dispatch(RegisterWithEmail(data)),
});

export default connect(reduxState, reduxActions)(Register);
