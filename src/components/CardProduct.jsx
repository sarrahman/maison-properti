import { Box, Card, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fCurrency } from "../utils/formatNumber";
import Label from "./Label";
import { useNavigate } from "react-router-dom";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

export default function CardProduct(props) {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/product/${props.id}`)}>
      <Box sx={{ pt: "100%", position: "relative", cursor: "pointer" }}>
        {props.category && (
          <Label
            variant="filled"
            color={(props.category === "dijual" && "error") || "info"}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            {props.category}
          </Label>
        )}
        <ProductImgStyle alt={props.name} src={props.image} />
      </Box>

      <Stack spacing={2} sx={{ p: 1, }}>
        <Typography variant="h6" sx={{cursor: 'pointer'}} noWrap>
          {props.name}
        </Typography>
        <Typography variant="subtitle1" noWrap>
         <AddLocationAltIcon /> {props.location}
        </Typography>
        <Typography variant="subtitle1">Rp {fCurrency(props.price)}</Typography>
      </Stack>
    </Card>
  );
}
