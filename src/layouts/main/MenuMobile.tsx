import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { alpha, styled } from "@mui/material/styles";
import { Box, List, Drawer, ListItemText, ListItemIcon, ListItemButton, useTheme } from "@mui/material";
import { Logo } from "../../components/Logo";
import { Scrollbar } from "../../components/Scrollbar";
import { MenuProps, MenuItemProps } from "./MainNavbar";
import { IconButton } from "src/components/IconButton";

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  color: theme.palette.text.secondary
}));

type MenuMobileItemProps = {
  item: MenuItemProps;
  isActive: boolean;
};

function MenuMobileItem({ item, isActive }: MenuMobileItemProps) {
  const { title, path, icon } = item;
  const theme = useTheme();
  const bgcolor = alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity);

  return (
    <NextLink key={title} href={path}>
      <ListItemStyle
        sx={{
          ...(isActive && {
            color: "primary.main",
            bgcolor
          })
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText disableTypography primary={title} />
      </ListItemStyle>
    </NextLink>
  );
}

export default function MenuMobile({ navConfig }: MenuProps) {
  const { pathname } = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleDrawerOpen}
        sx={{
          ml: 1
        }}
      >
        <Icon icon={menu2Fill} />
      </IconButton>

      <Drawer open={drawerOpen} onClose={handleDrawerClose} PaperProps={{ sx: { pb: 5, width: 260 } }}>
        <Scrollbar>
          <Box sx={{ display: "inline-flex" }}>
            <NextLink href="/">
              <Logo sx={{ mx: 2.5, my: 3 }} />
            </NextLink>
          </Box>

          <List disablePadding>
            {navConfig.map((link) => (
              <MenuMobileItem key={link.title} item={link} isActive={pathname === link.path} />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}
