import { Box, Stack, Typography } from "@mui/material";

const TransactionValues = [
  {
    title: "INR Deposit",
    time: "2022-06-09 7:06 PM",
    amount: "+ ₹81,123.10",
  },
  {
    title: "BTC Sell",
    time: "2022-05-27 12:32 PM",
    amount: "+ $81,123.10 BTC",
    amountMinus: "- 12.48513391 BTC",
  },
  {
    title: "INR Deposit",
    time: "2022-06-09 7:06 PM",
    amount: "+ ₹81,123.10",
  },
];

const TransactionDetail = () => {
  return (
    <Stack>
      {TransactionValues.map((value) => (
        <Box
          display="flex"
          justifyContent={"space-between"}
          padding={"0 0 3.2rem 0 "}
          key={value.title}
        >
          <Box display="flex" flexDirection={"column"}>
            <Typography varient="h6" className="transaction-title">
              {value.title}
            </Typography>
            <Typography varient="h6">{value.time}</Typography>
          </Box>
          <Box>
            <Typography varient="h6" className="amount">
              {value.amount}
            </Typography>
            <Typography varient="h6" className="amount">
              {value.amountMinus}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default TransactionDetail;
