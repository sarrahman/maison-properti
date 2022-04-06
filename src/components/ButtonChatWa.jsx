import { Button } from "@mui/material";

const ButtonChatWa = (props) => {
  return (
    <a
      style={{
        textDecoration: "none",
      }}
      href={`https://api.whatsapp.com/send?phone=${props.contactSeller}&text=Hallo admin, saya ingin menanyakan iklan ${props.productName} di maison.com`}
    >
      <Button variant="contained" color="primary" fullWidth>
        Tanya Produk
      </Button>
    </a>
  );
};

export default ButtonChatWa;
