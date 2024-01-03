import { Box, Button, Typography } from "@mui/material";

const LoansPurple = () => {
  return (
    <Box>
      <Button className="button-contact">Contact</Button>
      <Typography
        varient="body1"
        className="loan-paragraph"
        paddingTop={"1rem"}
        color={"white"}
      >
        Learn more about our real estate, mortgage, and corporate account
        services
      </Typography>
    </Box>
  );
};

export default LoansPurple;
