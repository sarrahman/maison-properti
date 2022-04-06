import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import moment from 'moment';
import { Box } from '@mui/material';
import { fCurrency } from '../../../utils/formatNumber';

export default function CardDetailProduct(props) {
  return (
    <Card sx={{
      m: 1
    }}>
      <CardMedia
        component="img"
        height="290"
        image={props.data.image}
        sx={{
          width: "100%",
          height: "290",
          objectFit: "fill",
        }}
        alt={props.data.name}
      />
      <CardContent>
      <Typography gutterBottom sx={{
        fontWeight: "bold",
      }} variant="h5" >
          {props.data.name}
        </Typography>
        <Typography variant="body1" sx={{
            fontSize: 19,
        }} >
          Rp {fCurrency(props.data.price)}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
            {props.data.category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <Box>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </Box>
        <Typography variant="body2" sx={{
            textAlign: "end",
          }} color="text.secondary">
            {moment(props.data.updatedAt).fromNow()}
          </Typography>
      </CardActions>
    </Card>
  );
}
