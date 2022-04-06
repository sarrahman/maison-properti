import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../components/Footer";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Chip, Collapse, Divider } from "@mui/material";
import AlertComp from "../components/Alert";
import AppBar from "../components/AppBar";
import {
  LoginWithEmail,
  loginWithGoogle,
} from "../configs/redux/Functions/Auth";

const theme = createTheme();

function Login(props) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    props
      .loginEmail({
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((res) => {
        if (res.status === 200) {
          setMessage(res.data.message);
          setStatus(true);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((err) => {
        setStatus(false);
        setMessage(err.response.data.message);
      });
  };

  const handleLoginGoogle = () => {
    props
      .loginGoogle()
      .then((res) => {
        if (res.status === 200) {
          setMessage(res.data.message);
          setStatus(true);
          setTimeout(() => {
            navigate("/");
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
      <AppBar sign="register" />
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
            Masuk
          </Typography>
          <Button
            sx={{
              mb: 2,
              mt: 2,
              width: "100%",
            }}
            onClick={handleLoginGoogle}
            variant="contained"
            color="inherit"
          >
            Login with Google
          </Button>
          <Divider>
            <Chip label="atau" />
          </Divider>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Button onClick={() => navigate("/register")} variant="text">
                  Belum Punya Akun? Daftar
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
  loginEmail: (data) => dispatch(LoginWithEmail(data)),
  loginGoogle: () => dispatch(loginWithGoogle()),
});

export default connect(reduxState, reduxActions)(Login);
