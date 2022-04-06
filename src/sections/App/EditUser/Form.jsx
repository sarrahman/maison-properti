import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

export default function FormUser(props) {
  const [value, setValue] = useState({
    nama: "",
    username: "",
    email: "",
    phone: 0,
    address: "",
    city: "",
    about: "",
    province: "",
  });

  useEffect(() => {
    setValue({
      username: props.username,
      nama: props.nama,
      email: props.email,
      phone: props.phone,
      address: props.address,
      about: props.about,
      city: props.city,
      province: props.province,
    });
  }, [props]);

  const handleClick = () => {
    props.onSubmit(value);
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            onChange={(n) => {
              setValue({
                ...value,
                username: n.target.value,
              });
            }}
            id="username"
            name="username"
            value={value.username}
            label="username"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onChange={(n) => {
              setValue({
                ...value,
                nama: n.target.value,
              });
            }}
            id="nama"
            name="nama"
            value={value.nama}
            label="Nama Lengkap"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onChange={(n) => {
              setValue({
                ...value,
                email: n.target.value,
              });
            }}
            id="email"
            name="email"
            value={value.email}
            label="email"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(n) => {
              setValue({
                ...value,
                about: n.target.value,
              });
            }}
            id="about"
            name="about"
            value={value.about}
            label="about"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(n) => {
              setValue({
                ...value,
                phone: n.target.value,
              });
            }}
            required
            id="phone"
            name="phone"
            value={value.phone}
            label="phone"
            type="number"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(n) => {
              setValue({
                ...value,
                address: n.target.value,
              });
            }}
            required
            id="address"
            name="address"
            value={value.address}
            label="address"
            type="text"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(n) => {
              setValue({
                ...value,
                province: n.target.value,
              });
            }}
            required
            id="province"
            name="province"
            value={value.province}
            label="province"
            type="text"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(n) => {
              setValue({
                ...value,
                city: n.target.value,
              });
            }}
            required
            id="city"
            name="city"
            value={value.city}
            label="city"
            type="text"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{mt: 1}}
        onClick={handleClick}
      >
        Submit
      </Button>
    </React.Fragment>
  );
}
