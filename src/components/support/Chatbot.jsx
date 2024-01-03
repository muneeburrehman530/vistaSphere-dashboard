import { Button, Stack, Typography } from "@mui/material";

const Chatbot = () => {
  return (
    <Stack
      bgcolor={"#5f00d9"}
      marginTop={10}
      marginBottom={5}
      sx={{ boxShadow: 4 }}
      padding={3}
      borderRadius={10}
    >
      <Button className="button-contact"> Chatbot</Button>
      <Typography
        variant="body1"
        color="white"
        fontSize={"1.8rem"}
        fontWeight={500}
        paddingTop={"1.3rem"}
      >
        Learn more about our real estate, mortgage, and corporate account
        services
      </Typography>
    </Stack>
  );
};

export default Chatbot;
