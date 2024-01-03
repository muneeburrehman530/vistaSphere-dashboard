import { Stack, Typography } from "@mui/material";
import { IoChatbubble } from "react-icons/io5";
const LiveChart = () => {
  return (
    <Stack
      marginTop={10}
      marginBottom={5}
      sx={{ boxShadow: 4 }}
      padding={3}
      borderRadius={10}
    >
      <IoChatbubble size={25} color="#5F00D9" />
      <Typography
        variant="h2"
        color={"#171717"}
        fontWeight={600}
        fontSize={"3.2rem"}
        paddingTop={"1rem"}
        paddingBottom={"0.6rem"}
      >
        Live Chat
      </Typography>
      <Typography
        variant="body1"
        color={"#535D66"}
        fontSize={"1.4rem"}
        fontWeight={400}
      >
        Don’t have time to wait for the answer? Chat with us now.
      </Typography>
    </Stack>
  );
};

export default LiveChart;
