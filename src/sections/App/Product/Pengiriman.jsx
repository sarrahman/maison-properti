import { Card, Typography } from "@mui/material"
import { Box } from "@mui/system"

const PengirimanDetail = (props) => {
    return(
        <Card sx={{p: 2, m: 1}}>
            <Typography variant="h6">Estimasi Pengiriman</Typography>
            <Box sx={{mt:1}}>
              <Typography>{props.description}</Typography>
            </Box>
          </Card>
    )
}

export default PengirimanDetail;