import { Icon } from "@iconify/react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { MHidden } from "src/components/MHidden";

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // For Mobile
  backgroundColor: "transparent",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

type DashboardNavbarProps = {
  onOpenSidebar: VoidFunction;
};

export default function DashboardNavbar({ onOpenSidebar }: DashboardNavbarProps) {
  return (
    <MHidden width="lgUp">
      <RootStyle>
        <ToolbarStyle>
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: "text.primary" }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </ToolbarStyle>
      </RootStyle>
    </MHidden>
  );
}
