import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { fCurrency } from "../utils/formatNumber";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const settings = ["Edit", "Hapus"];

const CardListProduct = (props) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0px 0px 10px #00000029",
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{
        display: {xs: "none", md: "flex"},
      }}>
      <Avatar src={props.img} alt={props.name} />
      </Box>
      <Typography>{props.name}</Typography>
      <Typography>{props.category}</Typography>
      <Typography>Rp {fCurrency(props.price)}</Typography>
      <Box sx={{
        display: { xs: "flex", md: "none" },
      }}>
      <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton color="primary" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               <MoreVertIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    if (setting === "Edit") {
                      return navigate(`/dashboard/product/edit/${props.id}`);
                    } else if (setting === "Hapus") {
                      return props.handleRemove(`${props.id}`, `${props.name}`);
                    }
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      </Box>
      <Box sx={{
        display: { xs: "none", md: "flex" }
      }}>
      <IconButton color="primary"
        onClick={() => {
          navigate(`/dashboard/product/edit/${props.id}`);
        }}
      >
        <EditIcon />
      </IconButton>
      <IconButton color="primary" onClick={() => props.handleRemove(`${props.id}`)}>
        <DeleteIcon />
      </IconButton>
      </Box>
    </Box>
  );
};

export default CardListProduct;
