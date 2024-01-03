import { Box, Container, Typography } from "@mui/material";
import ButtonPurple from "../ButtonPurple";
import LoansPurple from "./LoansPurple";

const Loans = () => {
  return (
    <Container>
      <Box display="flex" gap="2rem" width={"100%"}>
        <Box
          width={"50%"}
          padding="2.4rem"
          gap="2rem"
          bgcolor={"White"}
          sx={{ boxShadow: 3 }}
          marginTop="2rem"
          borderRadius={"2rem"}
        >
          <ButtonPurple>Loans</ButtonPurple>
          <Typography
            varient="body1"
            paddingTop={"1rem"}
            className="loan-paragraph"
          >
            Learn more about Loans – Keep your Bitcoin, access it’s value
            without selling it
          </Typography>
        </Box>
        <Box
          width={"50%"}
          padding="2.4rem"
          gap="2rem"
          bgcolor={"#5f00d9"}
          sx={{ boxShadow: 3 }}
          marginTop="2rem"
          borderRadius={"2rem"}
        >
          <LoansPurple />
        </Box>
      </Box>
    </Container>
  );
};

export default Loans;
