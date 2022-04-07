import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../components/Footer";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardMedia, Collapse } from "@mui/material";
import AlertComp from "../components/Alert";
import AppBar from "../components/AppBar";
import { LoginWithEmail } from "../configs/redux/Functions/Auth";

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

  return (
    <ThemeProvider theme={theme}>
      <AppBar sign="register" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 200, height: 200 }}
            src="https://ik.imagekit.io/sarrahman/logo512_L2bb4lgWV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649303229729"
            alt="logo"
          />
          <Collapse in={message !== ""}>
            <AlertComp status={status} text={message} />
          </Collapse>
          <Typography component="h1" variant="h5">
            Masuk
          </Typography>
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
              <Grid item xs></Grid>
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
});

export default connect(reduxState, reduxActions)(Login);
