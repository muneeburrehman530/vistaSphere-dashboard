import { Box, Container, Stack, Typography } from "@mui/material";
import { GoArrowUpRight } from "react-icons/go";
import { BsPlusCircleFill } from "react-icons/bs";
import { HiMinusCircle } from "react-icons/hi";
import ButtonPurple from "../ButtonPurple";
import HourDayMonthWeek from "./HourDayMonthWeek";
import RecentTransactions from "./RecentTransactions";
import ChartComponent from "./ChartComponent";

const CurrentPrice = () => {
  return (
    <Container>
      <Box display={"flex"} gap="2rem">
        <Box
          width="50%"
          padding="2.4rem"
          bgcolor={"White"}
          sx={{ boxShadow: 3 }}
          marginTop="2rem"
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <Typography varient="h3" className="portfolio-titles">
                Current Price
              </Typography>
              <Typography varient="h2" className="portfolio-values">
                ₹26,670.25{"    "}
                <span className="current-price-span">
                  <GoArrowUpRight size={12} />
                  0.04%
                </span>{" "}
              </Typography>
            </Box>
            <Box display={"flex"} gap={"1rem"}>
              <ButtonPurple startIcon={<BsPlusCircleFill size={13} />}>
                Buy
              </ButtonPurple>
              <ButtonPurple startIcon={<HiMinusCircle size={13} />}>
                Sell
              </ButtonPurple>
            </Box>
          </Box>
          <Box>
            <HourDayMonthWeek />
            <ChartComponent />
          </Box>
        </Box>

        {/* 2nd part  React Transactions  */}
        <Stack
          width="50%"
          padding="2.4rem"
          bgcolor={"White"}
          sx={{ boxShadow: 3 }}
          marginTop="2rem"
          display={"flex"}
          justifyContent={"space-between"}
        >
          <RecentTransactions />
        </Stack>
      </Box>
    </Container>
  );
};

export default CurrentPrice;
