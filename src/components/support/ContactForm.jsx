import { Box, Button, TextField, Typography, Stack } from "@mui/material";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ maxWidth: 400, marginLeft: "auto", marginTop: "4rem" }}>
      <Typography variant="h6" gutterBottom marginBottom={1}>
        You will receive response within 24 hours of time of submit.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Surname"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            required
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Stack direction="column" spacing={2}>
            <Button
              type="submit"
              variant="contained"
              className="contact-btn-send"
            >
              Send A Message
            </Button>
            <Button variant="contained" className="contact-btn-meeting">
              Book a Meeting
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default ContactForm;
