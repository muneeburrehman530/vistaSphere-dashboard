import { Box, Stack, Typography } from "@mui/material";
import { MdEmail } from "react-icons/md";
const ContactusText = () => {
  return (
    <Box marginTop={3}>
      <Stack>
        <MdEmail size={25} color="#5F00D9" />
        <Typography variant="h3" className="Contact-us" marginTop={1.5}>
          Contact Us
        </Typography>
        <Typography variant="body1" className="contact-para">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Typography>
      </Stack>
    </Box>
  );
};

export default ContactusText;
