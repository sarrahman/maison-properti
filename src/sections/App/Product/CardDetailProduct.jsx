import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { Box } from "@mui/material";
import { fCurrency } from "../../../utils/formatNumber";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

export default function CardDetailProduct(props) {
  return (
    <Card
      sx={{
        m: 1,
      }}
    >
      <CardMedia
        component="img"
        height="290"
        image={props.data.image}
        sx={{
          width: "100%",
          height: "290",
          objectFit: "fill",
        }}
        alt={props.data.judul}
      />
      <CardContent>
        <Typography
          gutterBottom
          sx={{
            fontWeight: "bold",
          }}
          variant="h5"
        >
          {props.data.judul}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {props.data.category}
        </Typography>
        {props.data.category === "dijual" ? (
          <Typography
            variant="body1"
            sx={{
              fontSize: 19,
            }}
          >
            Rp {fCurrency(props.data.price)}
          </Typography>
        ) : (
          <Typography
            variant="body1"
            sx={{
              fontSize: 19,
            }}
          >
            Rp {fCurrency(props.data.price)} / Tahun
          </Typography>
        )}
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {props.data._id ? (
            <>
              <FacebookShareButton
                style={{
                  marginRight: "10px",
                }}
                url={`${process.env.REACT_APP_DOMAIN_NAME}/product/${props.data._id}`}
                quote={`${props.data.category} - ${
                  props.data.judul
                } - dengan harga Rp ${fCurrency(
                  props.data.price
                )} di website maison.com`}
                hashtag={"#maison"}
                description={"aiueo"}
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <TwitterShareButton
                title={`${props.data.category} - ${
                  props.data.judul
                } - dengan harga Rp ${fCurrency(
                  props.data.price
                )} di website maison.com`}
                url={`${process.env.REACT_APP_DOMAIN_NAME}/product/${props.data._id}`}
                hashtags={["#maison", "cari-rumah"]}
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
            </>
          ) : null}
        </Box>
        <Typography
          variant="body2"
          sx={{
            textAlign: "end",
          }}
          color="text.secondary"
        >
          {moment(props.data.updatedAt).fromNow()}
        </Typography>
      </CardActions>
    </Card>
  );
}
