import { ReactNode } from "react";

import NextLink from "next/link";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import { Link, Stack, LinkProps } from "@mui/material";
import { MenuProps, MenuItemProps } from "./MainNavbar";

interface RouterLinkProps extends LinkProps {
  component?: ReactNode;
  to?: string;
  end?: boolean;
}

const LinkStyle = styled(Link)<RouterLinkProps>(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shortest,
  }),
  "&:hover": {
    opacity: 0.48,
    textDecoration: "none",
  },
}));

type MenuDesktopItemProps = {
  item: MenuItemProps;
  pathname: string;
};

function MenuDesktopItem({ item, pathname }: MenuDesktopItemProps) {
  const { title, path } = item;
  const isActive = pathname === path;

  return (
    <NextLink key={title} href={path} passHref>
      <LinkStyle
        sx={{
          ...(isActive && { color: "primary.main" }),
        }}
      >
        {title}
      </LinkStyle>
    </NextLink>
  );
}

export default function MenuDesktop({ navConfig }: MenuProps) {
  const { pathname } = useRouter();

  return (
    <Stack direction="row">
      {navConfig.map((link) => (
        <MenuDesktopItem key={link.title} item={link} pathname={pathname} />
      ))}
    </Stack>
  );
}
