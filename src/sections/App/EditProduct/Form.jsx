import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Input,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import AutocompleteComp from "../../../components/AutoComplete";
import ButtonLoading from "../../../components/buttonLoading";

const sertification = ["", "SHM", "HGB", "Lainnya"];
const category = ["", "dijual", "disewakan"];
const fasilitas = ["Garasi", "Kebun", "Kolam Renang", "Gym", "Wifi", "AC"];

export default function FormProduct(props) {
  const [fasiliti, setFasiliti] = useState({});
  const [value, setValue] = useState({
    judul: "",
    price: "",
    description: "",
    category: "",
    image: "",
    luasBangunan: "",
    luasTanah: "",
    kamarMandi: "",
    kamarTidur: "",
    lantai: "",
    sertification: "",
    location: "",
  });

  useEffect(() => {
    setValue({
      judul: props.judul,
      price: props.price,
      description: props.description,
      category: props.category,
      image: props.image,
      luasBangunan: props.luasBangunan,
      luasTanah: props.luasTanah,
      kamarTidur: props.kamarTidur,
      kamarMandi: props.kamarMandi,
      lantai: props.lantai,
      sertification: props.sertification,
      location: props.location,
    });
  }, [props]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFasiliti({ ...fasiliti, [name]: checked });
  };

  const handleClick = () => {
    let fasilitas = [];
    if (Object.keys(fasiliti).length === 0) {
      fasilitas = props.fasilitas;
    } else {
      for (let [key, value] of Object.entries(fasiliti)) {
        if (value === true) {
          fasilitas.push(key);
        }
      }
    }
    props.handleEdit({
      ...value,
      fasilitas,
    });
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
                judul: n.target.value,
              });
            }}
            id="judul"
            judul="judul"
            value={value.judul}
            label="judul"
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
                price: n.target.value,
              });
            }}
            id="price"
            name="price"
            value={value.price}
            label="price"
            fullWidth
            type="number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            onChange={(n) => {
              setValue({
                ...value,
                description: n.target.value,
              });
            }}
            value={value.description}
            style={{
              width: "92%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            name="deskripsi"
            label="Deskripsi Product"
            id="deskripsi"
            placeholder="Deskripsi Product"
          />
        </Grid>
        <Grid item xs={12}>
          <AutocompleteComp
            label="kategori"
            nilai={(n) => {
              setValue({
                ...value,
                category: n,
              });
            }}
            name="category"
            value={value.category}
            id="category"
            options={category}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onChange={(n) => {
              setValue({
                ...value,
                luasBangunan: n.target.value,
              });
            }}
            id="luasBangunan"
            value={value.luasBangunan}
            label="luasBangunan"
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
                luasTanah: n.target.value,
              });
            }}
            id="luasTanah"
            value={value.luasTanah}
            label="luasTanah"
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
                kamarTidur: n.target.value,
              });
            }}
            id="kamarTidur"
            value={value.kamarTidur}
            label="kamarTidur"
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
                kamarMandi: n.target.value,
              });
            }}
            id="kamarMandi"
            value={value.kamarMandi}
            label="kamarMandi"
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
                lantai: n.target.value,
              });
            }}
            id="lantai"
            value={value.lantai}
            label="lantai"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <AutocompleteComp
            label="sertification"
            nilai={(n) => {
              setValue({
                ...value,
                sertification: n,
              });
            }}
            name="sertification"
            value={value.sertification}
            id="sertification"
            options={sertification}
          />
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <Typography variant="h6" gutterBottom>
              Fasilitas
            </Typography>
            {fasilitas.map((f, index) => (
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                name={f}
                label={f}
              />
            ))}
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onChange={(n) => {
              setValue({
                ...value,
                location: n.target.value,
              });
            }}
            id="location"
            value={value.location}
            label="kota lokasi Iklan"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Ubah Gambar Produk</Typography>
          <Input
            type="file"
            name="image"
            sx={{
              mt: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            onChange={(event) => {
              const reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]);
              reader.onload = () => {
                setValue({ ...value, image: reader.result });
              };
            }}
          />
        </Grid>
      </Grid>
      <ButtonLoading
        title="Submit"
        statusLoading={props.statusLoading}
        onClick={() => {
          handleClick();
        }}
        sx={{ mt: 1 }}
      />
    </React.Fragment>
  );
}
