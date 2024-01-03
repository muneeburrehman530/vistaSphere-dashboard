import DashboardLayout from "../components/DashboardLayout";
import Container from "@mui/material/Container";
import ContactForm from "../components/support/ContactForm";
import ContactusText from "../components/support/ContactusText";
import Grid from "@mui/material/Grid";
import LiveChart from "../components/support/LiveChart";
import Chatbot from "../components/support/Chatbot";

const Support = () => {
  return (
    <DashboardLayout title={"Support"}>
      <Container>
        <Grid container>
          <Grid item md={6} xs={12}>
            <ContactusText />
          </Grid>
          <Grid item md={6} xs={12}>
            <ContactForm />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <LiveChart />
          </Grid>
          <Grid item md={6} xs={12}>
            <Chatbot />
          </Grid>
        </Grid>
      </Container>
    </DashboardLayout>
  );
};

export default Support;
