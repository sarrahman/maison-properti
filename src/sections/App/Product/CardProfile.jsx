import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../configs/redux/Functions/Auth";

function CardProfile(props) {
  const navigate = useNavigate();
  const uid = props.uid;
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    if (uid) {
      props.getUser(uid).then((res) => {
        setUser(res.data);
        props.handleContact(res.data.phone);
      });
    }
  }, [uid, props]);

  return (
    <Card sx={{ p: 2, m: 1, cursor: "pointer" }} onClick={() => navigate(`/profile/${user._id}`)}>
      <Typography variant="h6">Profil Penjual</Typography>
      <Box sx={{ mt: 1 }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {user.username}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
               {user.phone}
              </Typography>
            </CardContent>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ width: "90px", height: "90px" }}
              src={user.photoUrl}
              alt={user.username}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

const reduxActions = (dispatch) => ({
  getUser: (id) => dispatch(getUser(id)),
});

export default connect(null, reduxActions)(CardProfile);
