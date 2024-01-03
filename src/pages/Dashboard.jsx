import { Box, Container, Typography, Stack, Button } from "@mui/material";
import DashboardLayout from "../components/DashboardLayout";
import PortfolioSection from "../components/dashboard/PortfolioSection";
import CurrentPrice from "../components/dashboard/CurrentPrice";
import Loans from "../components/dashboard/Loans";
import { useEffect } from "react";
import { fetchExample } from "../api/query/exampleQuery";
import { useQuery } from "react-query";

const Dashboard = ({ children }) => {
  const exampleQuery = useQuery({
    queryKey: ["example"],
    queryFn: fetchExample,
  });

  return (
    <DashboardLayout title="Dashboard">
      <Container padding={0}>
        <Box>{children}</Box>
        <Box>
          <PortfolioSection />
        </Box>
        <Box>
          <CurrentPrice />
        </Box>
        <Loans />
      </Container>
    </DashboardLayout>
  );
};

export default Dashboard;
