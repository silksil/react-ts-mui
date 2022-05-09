import { Container, Typography } from "@mui/material";
import { Page } from "src/components/Page";
import { DashboardLayout } from "src/layouts/dashboard";

export default function PageOne() {
  return (
    <DashboardLayout>
      <Page title="Dashboard">
        <Container>
          <Typography variant="h3" component="h1" paragraph>
            Dashboard
          </Typography>
          <Typography>Dashboard text here</Typography>
        </Container>
      </Page>
    </DashboardLayout>
  );
}
