import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

const Fasilitas = (props) => {
  const [dataFasilitas, setDataFasilitas] = useState([]);
  const [keterangan, setKeterangan] = useState({});

  useEffect(() => {
    if (props.data.fasilitas && props.data.luasBangunan) {
      setDataFasilitas(props.data.fasilitas);
      setKeterangan({
        luasBangunan: props.data.luasBangunan,
        luasTanah: props.data.luasTanah,
        kamarTidur: props.data.kamarTidur,
        kamarMandi: props.data.kamarMandi,
        lantai: props.data.lantai,
        sertification: props.data.sertification,
      });
    }
  }, [props.data]);

  return (
    <Card sx={{ p: 2, m: 1 }}>
      <Typography variant="h6">Keterangan Properti</Typography>
      <Box
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box>
          <Typography sx={{mt: 1}} variant="body1">
            Luas Bangunan: {keterangan.luasBangunan} m<sup>2</sup>
          </Typography>
          <Typography sx={{mt: 1}} variant="body1">
            Luas Tanah: {keterangan.luasTanah} m<sup>2</sup>
          </Typography>
          <Typography sx={{mt: 1}} variant="body1">
            Kamar Tidur: {keterangan.kamarTidur}
          </Typography>
          <Typography sx={{mt: 1}} variant="body1">
            Kamar Mandi: {keterangan.kamarMandi}
          </Typography>
          <Typography sx={{mt: 1}} variant="body1">
            Lantai: {keterangan.lantai} Tingkat
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Fasilitas Properti
          </Typography>
          {dataFasilitas.map((item, index) => {
            return (
              <Box key={index} sx={{ display: "flex", mt: 1}}>
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "lightBlue",
                    mr: 1,
                  }}
                />
                <Typography variant="body2">{item}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Card>
  );
};

export default Fasilitas;
