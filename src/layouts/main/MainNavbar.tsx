import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import { Box, AppBar, Toolbar, Container } from "@mui/material";
import { Logo } from "../../components/Logo";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";
import { MHidden } from "src/components/MHidden";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP
  }
}));

export type MenuItemProps = {
  title: string;
  path: string;
  icon?: JSX.Element;
};

export type MenuProps = {
  navConfig: MenuItemProps[];
};

export default function MainNavbar() {
  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
      <ToolbarStyle disableGutters>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <NextLink href="/">
            <Logo />
          </NextLink>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <MenuDesktop navConfig={navConfig} />
          </MHidden>

          <MHidden width="mdUp">
            <MenuMobile navConfig={navConfig} />
          </MHidden>
        </Container>
      </ToolbarStyle>
    </AppBar>
  );
}
