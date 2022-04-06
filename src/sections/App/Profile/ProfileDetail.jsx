import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const ProfileDetail = (props) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    if (props.uid === props.id) {
      return (
        <EditIcon
          onClick={() => navigate("/profile/edit")}
          sx={{
            cursor: "pointer",
          }}
        />
      );
    }
  };

  return (
    <Card sx={{ p: 2, m: 1, height:"180px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Profile Detail</Typography>
        {handleEdit()}
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography>Email: {props.email}</Typography>
        <Typography sx={{ mt: 1 }}>Telpon: {props.phone}</Typography>
        <Typography sx={{ mt: 1 }}>Alamat: {props.address} - {props.city}</Typography>
      </Box>
    </Card>
  );
};

export default ProfileDetail;
