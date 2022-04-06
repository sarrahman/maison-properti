import { Box, Collapse } from "@mui/material";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import AlertComp from "../components/Alert";
import AppBar from "../components/AppBar";
import Copyright from "../components/Footer";
import { getUser, profile, updateUser } from "../configs/redux/Functions/Auth";
import FormUser from "../sections/App/EditUser/Form";

const EditProfile = (props) => {
  const [uid, setUid] = useState('');
  const [value, setValue] = useState({
    username: "",
    nama: '',
    email: "",
    phone: "",
    address: "",
    city: "",
    about: "",
    province: "",
  });

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    props.profile().then((res) => {
      setUid(res.user.id);
    });
    if(uid){
      props
      .getUser(uid)
      .then((res) =>
        setValue({
          username: res.data.username,
          nama: res.data.nama,
          email: res.data.email,
          phone: res.data.contact.phone,
          address: res.data.address.street,
          city: res.data.address.city,
          about: res.data.about,
          province: res.data.address.province,
        })
      )
      .catch((err) => console.log(err.response.data.message));
    }
  }, [props, uid]);

  const handleSubmit = (user) => {
    props
      .updateUser(user, uid)
      .then((res) => {
        if (res.status === 200) {
          setMessage(res.data.message);
          setStatus(true);
          setTimeout(() => {
            navigate(`/profile`);
          }, 1000);
        }
      })
      .catch((err) => {
        setStatus(false);
        setMessage(err.response.data.message);
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
        <FormUser
          onSubmit={(user) => handleSubmit(user)}
          username={value.username}
          email={value.email}
          phone={value.phone}
          address={value.address}
          city={value.city}
          nama={value.nama}
          province={value.province}
          about={value.about}
        />
      </Box>
      <Copyright />
    </div>
  );
};

const reduxActions = (dispatch) => ({
  updateUser: (user, id) => dispatch(updateUser(user, id)),
  getUser: (id) => dispatch(getUser(id)),
  profile: () => dispatch(profile()),

});

export default connect(null, reduxActions)(EditProfile);
