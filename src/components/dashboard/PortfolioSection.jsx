import { Box, Container, Stack, Typography } from "@mui/material";
import ButtonPurple from "../ButtonPurple";
import { HiOutlineArrowDownTray, HiOutlineArrowUpTray } from "react-icons/hi2";

const portfolioValues = [
  {
    title: "Total Portfolio Value",
    value: "$ 112,312.24",
  },
  {
    title: "Wallet Balances",
    value: "22.39401000  ",
  },
  { title: "", value: "$ 1,300.00 INR" },
];

const PortfolioSection = () => {
  return (
    <Container>
      <Box
        padding="2.4rem"
        bgcolor={"White"}
        sx={{ boxShadow: 3 }}
        marginTop="2rem"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box padding={2.4} display={"flex"} gap="6.4rem">
          {portfolioValues.map((portfolio) => (
            <Stack key={portfolio.title}>
              <Typography varient="h3" className="portfolio-titles">
                {" "}
                {portfolio.title}
              </Typography>
              <Typography varient="h2" className="portfolio-values">
                {portfolio.value}
              </Typography>
            </Stack>
          ))}
        </Box>
        <Box display={"flex"} gap="1rem">
          <ButtonPurple>
            <HiOutlineArrowDownTray size={13} /> Deposit
          </ButtonPurple>
          <ButtonPurple>
            <HiOutlineArrowUpTray size={13} /> Withdraw
          </ButtonPurple>
        </Box>
      </Box>
    </Container>
  );
};

export default PortfolioSection;
