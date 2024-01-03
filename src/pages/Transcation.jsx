import { Box, Container } from "@mui/material";
import DashboardLayout from "../components/DashboardLayout";
import DataTable from "../components/transaction/DataTable";

const Transcation = () => {
  return (
    <DashboardLayout title={"Transcations"}>
      <Container>
        <Box marginTop={3}>
          <DataTable />
        </Box>
      </Container>
    </DashboardLayout>
  );
};

export default Transcation;
