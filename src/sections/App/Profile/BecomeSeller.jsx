import { Button, Card, Collapse } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import AlertComp from "../../../components/Alert";
import { updateUser } from "../../../configs/redux/Functions/Auth";

const BecomeSeller = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState(false);

  const handleClick = () => {
    if (props.phone === 62) {
      setStatus(false);
      setMessage("Silakan isi nomor telpon terlebih dahulu!");
    } else {
      props
        .upadateUser({ isSeller: true }, props.id)
        .then((res) => {
          if (res.status === 200) {
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          setStatus(false);
          setMessage(err.response.data.message);
        });
    }
  };

  return (
    <Card
      sx={{
        p: 2,
        m: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Collapse in={message !== ""}>
        <AlertComp status={status} text={message} />
      </Collapse>
      <Button
        onClick={handleClick}
        sx={{ mt: 1 }}
        variant="contained"
        color="primary"
      >
        {props.title}
      </Button>
    </Card>
  );
};

const reduxDispatch = (dispatch) => ({
  upadateUser: (data, id) => dispatch(updateUser(data, id)),
});

export default connect(null, reduxDispatch)(BecomeSeller);
