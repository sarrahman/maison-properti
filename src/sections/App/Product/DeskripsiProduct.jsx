import { Card, Typography } from "@mui/material"
import { Box } from "@mui/system"

const DeskripsiProduct = (props) => {
    return(
        <Card sx={{p: 2, m: 1}}>
            <Typography variant="h6">Deskripsi Products</Typography>
            <Box sx={{mt:1}}>
              <pre>{props.description}</pre>
            </Box>
          </Card>
    )
}

export default DeskripsiProduct;