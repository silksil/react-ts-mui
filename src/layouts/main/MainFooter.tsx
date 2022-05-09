import { Link as ScrollLink } from "react-scroll";
import { Container, Typography, Box } from "@mui/material";
import { Logo } from "../../components/Logo";

export function MainFooter() {
  return (
    <Box
      sx={{
        py: 5,
        textAlign: "center",
        position: "relative"
      }}
    >
      <Container maxWidth="lg">
        <ScrollLink to="move_top" spy smooth>
          <Logo sx={{ mb: 1, mx: "auto", cursor: "pointer" }} />
        </ScrollLink>

        <Typography variant="caption" component="p">
          Footer text
        </Typography>
      </Container>
    </Box>
  );
}
