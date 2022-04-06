import { Box, Collapse } from "@mui/material";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AlertComp from "../../../components/Alert";
import AppBar from "../../../components/AppBar";
import Copyright from "../../../components/Footer";
import {
  editProduct,
  getProduct,
} from "../../../configs/redux/Functions/Products";
import FormProduct from "../../../sections/App/EditProduct/Form";

const EditProduct = (props) => {
  const { id } = useParams();
  const [value, setValue] = useState({
    judul: "",
    price: "",
    category: "",
    description: "",
    image: "",
    luasBangunan: "",
    luasTanah: "",
    kamarTidur: "",
    kamarMandi: "",
    lantai: "",
    sertification: "",
    location: "",
  });

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    props
      .getProduct(id)
      .then((res) =>
        setValue({
          judul: res.data.judul,
          price: res.data.price,
          category: res.data.category,
          description: res.data.description,
          image: res.data.image,
          luasBangunan: res.data.luasBangunan,
          luasTanah: res.data.luasTanah,
          kamarTidur: res.data.kamarTidur,
          kamarMandi: res.data.kamarMandi,
          sertification: res.data.sertification,
          lantai: res.data.lantai,
          location: res.data.location,
          fasilitas: res.data.fasilitas,
        })
      )
      .catch((err) => console.log(err.response.data.message));
  }, [id, props]);

  const handleSubmit = (product) => {
    props
      .editData(id, product)
      .then((res) => {
        if (res.status === 200) {
          setMessage(res.data.message);
          setStatus(true);
          setTimeout(() => {
            navigate(`/dashboard`);
          }, 1000);
        }
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
    <div>
      <AppBar />
      <Box
        sx={{
          m: { xs: 1, md: 3 },
          boxShadow: 4,
          p: { xs: 2, md: 3 },
          borderRadius: 5,
        }}
      >
        <Collapse sx={{ mt: 1, mb: 2 }} in={message !== ""}>
          <AlertComp status={status} text={message} />
        </Collapse>
        <FormProduct
          handleEdit={(product) => handleSubmit(product)}
          judul={value.judul}
          price={value.price}
          description={value.description}
          category={value.category}
          image={value.image}
          statusLoading={props.statusLoading}
          luasBangunan={value.luasBangunan}
          luasTanah={value.luasTanah}
          kamarTidur={value.kamarTidur}
          lantai={value.lantai}
          sertification={value.sertification}
          kamarMandi={value.kamarMandi}
          location={value.location}
          fasilitas={value.fasilitas}
        />
      </Box>
      <Copyright />
    </div>
  );
};

const reduxState = (state) => ({
  statusLoading: state.isLoading,
});

const reduxActions = (dispatch) => ({
  getProduct: (id) => dispatch(getProduct(id)),
  editData: (id, product) => dispatch(editProduct(id, product)),
});

export default connect(reduxState, reduxActions)(EditProduct);
