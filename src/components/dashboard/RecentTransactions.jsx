import { Box, Typography } from "@mui/material";
import TransactionDetail from "./TransactionDetail";
import ViewAllButton from "./ViewAllButton";

const RecentTransactions = () => {
  return (
    <Box>
      <Typography
        varient="h3"
        className="portfolio-titles"
        paddingBottom={"3rem"}
      >
        Recent Transactions
      </Typography>
      <TransactionDetail />
      <ViewAllButton />
    </Box>
  );
};

export default RecentTransactions;
