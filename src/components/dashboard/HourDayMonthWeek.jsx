import { Box, Typography } from "@mui/material";

const HourDayMonthWeek = () => {
  return (
    <Box
      maxWidth={"14.7rem"}
      bgcolor={"#F3F3F7"}
      display={"flex"}
      alignItems={"center"}
      padding={"1rem"}
      gap={"2rem"}
      marginLeft={"auto"}
    >
      <Typography color="#797E82" fontWeight="600">
        1H
      </Typography>
      <Typography className="active" fontWeight="600">
        1D
      </Typography>
      <Typography color="#797E82" fontWeight="600">
        1W
      </Typography>
      <Typography color="#797E82" fontWeight="600">
        1M
      </Typography>
    </Box>
  );
};

export default HourDayMonthWeek;
