import axios from "axios";
// React
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/userState";
// Material
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// Imgs
import faye from "../assets/faye.png";
// Otros
import { message } from "antd";
import "../components/Navbar.css";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    axios
      .post(
        "http://localhost:3001/api/user/login",
        { email, password },
        { withCredentials: true }
      )
      .then((response) => {
        dispatch(userActions.login(response.data));
        message.success(`Bienvenido ${response.data.fullname}`);
        navigate("/", { replace: true });
      })
      .catch((err) => message.error("Credenciales Incorrectas"));
  };

  const containerStyle = {
    backgroundImage:
      "url(https://rrd0146se7f27sb982ywk0o7-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/1392X601_03-1-725x375.jpg)",
    height: "100vh",
    backgroundSize: "cover",
  };

  return (
    <div style={containerStyle}>
    <div className="columnas">
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
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
              {/* <Grid item xs className="signUp">
                Forgot password?
              </Grid> */}
              <Grid item>
                <Link to="/register" className="signUp">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
    </div>
  );
}
