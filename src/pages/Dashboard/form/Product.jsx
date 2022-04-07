import DashboardLayouts from "../../../layouts/DashboardLayouts";
import {
  Box,
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { addProduct } from "../../../configs/redux/Functions/Products";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import AlertComp from "../../../components/Alert";
import { useNavigate } from "react-router-dom";
import ButtonLoading from "../../../components/buttonLoading";
import { profile } from "../../../configs/redux/Functions/Auth";
import AutocompleteComp from "../../../components/AutoComplete";

const sertification = ["", "SHM", "HGB", "Lainnya"];
const category = ["", "dijual", "disewakan"];
const fasilitas = ["Garasi", "Kebun", "Kolam Renang", "Gym", "Wifi", "AC"];

const AddProductDashboard = (props) => {
  const navigate = useNavigate();
  const [uid, setUid] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [fasilitass, setFasilitas] = useState({});
  const [addition, setAddition] = useState({
    category: "",
    sertification: "",
  });

  useEffect(() => {
    props
      .profile()
      .then((res) => {
        setUid(res.user.id);
      })
      .catch((err) => {
        setMessage(err.message);
        setStatus("error");
      });
  }, [props]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFasilitas({ ...fasilitass, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fasilitas = [];
    for (let [key, value] of Object.entries(fasilitass)) {
      if (value === true) {
        fasilitas.push(key);
      }
    }
    const data = new FormData(e.currentTarget);
    const productData = {
      judul: data.get("judul"),
      price: data.get("harga"),
      description: data.get("deskripsi"),
      image: imageFile,
      uid,
      luasTanah: data.get("luasTanah"),
      luasBangunan: data.get("luasBangunan"),
      kamarMandi: data.get("kamarMandi"),
      kamarTidur: data.get("kamarTidur"),
      lantai: data.get("lantai"),
      location: data.get("lokasi"),
      ...addition,
      fasilitas,
    };
    props
      .addProduct(productData)
      .then((res) => {
        setStatus(true);
        setMessage("produk berhasil ditambahkan");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch((err) => {
        setStatus(false);
        setMessage(err.response.statusText);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      });
  };

  return (
    <DashboardLayouts
      main={
        <>
          <Box>
            <h1>Pasang Iklan</h1>
          </Box>
          <Collapse in={message !== ""}>
            <AlertComp status={status} text={message} />
          </Collapse>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              name="judul"
              label="judul Iklan"
              type="text"
              margin="normal"
              id="judul"
              autoComplete="off"
            />
            <TextareaAutosize
              style={{
                width: "100%",
                padding: "20px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginTop: "10px",
              }}
              name="deskripsi"
              label="Deskripsi Product"
              id="deskripsi"
              placeholder="Deskripsi Product"
            />
            <AutocompleteComp
              label="kategori"
              nilai={(n) => {
                setAddition({
                  ...addition,
                  category: n,
                });
              }}
              name="category"
              id="category"
              options={category}
            />
            <TextField
              required
              fullWidth
              name="luasBangunan"
              label="luas Bangunan"
              type="number"
              margin="normal"
              id="luasBangunan"
              autoComplete="off"
            />
            <TextField
              required
              fullWidth
              name="luasTanah"
              label="luas Tanah"
              type="number"
              margin="normal"
              id="luasTanah"
              autoComplete="off"
            />
            <TextField
              required
              fullWidth
              name="kamarTidur"
              label="kamar Tidur"
              type="number"
              margin="normal"
              id="kamarTidur"
              autoComplete="off"
            />
            <TextField
              required
              fullWidth
              name="kamarMandi"
              label="kamar Mandi"
              type="number"
              margin="normal"
              id="kamarMandi"
              autoComplete="off"
            />
            <TextField
              required
              fullWidth
              name="lantai"
              label="lantai"
              type="number"
              margin="normal"
              id="lantai"
              autoComplete="off"
            />
            <FormGroup>
              <Typography variant="h6" gutterBottom>
                Fasilitas
              </Typography>
              {fasilitas.map((f, i) => (
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} />}
                  label={f}
                  name={f}
                />
              ))}
            </FormGroup>
            <TextField
              required
              fullWidth
              name="lokasi"
              label="kota lokasi Iklan"
              type="text"
              margin="normal"
              id="lokasi"
              autoComplete="off"
            />
            {addition.category !== "disewakan" ? (
              <AutocompleteComp
                label="sertifikat"
                nilai={(n) => {
                  setAddition({
                    ...addition,
                    sertification: n,
                  });
                }}
                options={sertification}
              />
            ) : null}
            <TextField
              required
              fullWidth
              name="harga"
              label="kisaran Harga"
              type="number"
              margin="normal"
              id="harga"
              autoComplete="off"
            />
            <Box>
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
                    setImageFile(reader.result);
                  };
                }}
              />
            </Box>
            <ButtonLoading
              title="Submit"
              statusLoading={props.loading}
              sx={{ mt: 3, mb: 2 }}
            />
          </Box>
        </>
      }
    />
  );
};

const reduxState = (state) => ({
  loading: state.isLoading,
});

const reduxActions = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
  profile: () => dispatch(profile()),
});

export default connect(reduxState, reduxActions)(AddProductDashboard);
