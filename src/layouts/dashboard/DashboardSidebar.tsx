import { useEffect } from "react";

import NextLink from "next/link";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import { Box, Stack, Avatar, Drawer, Typography, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useCollapseDrawer } from "../../hooks/useCollapseDrawer";
import { Logo } from "../../components/Logo";
import { Scrollbar } from "../../components/Scrollbar";
import { NavSection } from "../../components/NavSection";

import sidebarConfig from "./SidebarConfig";
import { MHidden } from "src/components/MHidden";

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.complex
    })
  }
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[500_12]
}));

type DashboardSidebarProps = {
  isOpenSidebar: boolean;
  onCloseSidebar: VoidFunction;
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }: DashboardSidebarProps) {
  const { pathname } = useRouter();
  const { isCollapse } = useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }
      }}
    >
      <Stack
        justifyContent="space-between"
        spacing={3}
        sx={{
          height: "100%",
          px: 2.5,
          pt: 3,
          pb: 2
        }}
      >
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <NextLink href="/">
              <Logo />
            </NextLink>
          </Stack>
        </Box>

        <NavSection navConfig={sidebarConfig} isShow={!isCollapse} />

        <NextLink href="#">
          <AccountStyle>
            <Avatar alt="My Avatar" src="https://thumbs.dreamstime.com/z/vector-illustration-avatar-dummy-sign-collection-avatar-image-stock-symbol-web-vector-design-avatar-dummy-137160097.jpg" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                Sil
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                @sil_kreulen
              </Typography>
            </Box>
          </AccountStyle>
        </NextLink>
      </Stack>
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: DRAWER_WIDTH
        }
      }}
    >
      <MHidden width="lgUp">
        <BottomNavigation showLabels sx={{ position: "fixed", bottom: 0, width: "100%" }}>
          <BottomNavigationAction label="Recents" />
          <BottomNavigationAction label="Favorites" />
          <BottomNavigationAction label="Nearby" />
        </BottomNavigation>
      </MHidden>

      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH, height: "100%" }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              height: "100%",
              width: DRAWER_WIDTH,
              bgcolor: "background.default"
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
