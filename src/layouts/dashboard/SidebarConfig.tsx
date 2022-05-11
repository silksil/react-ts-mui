import { Icon } from "@iconify/react";
import starFill from "@iconify/icons-eva/star-fill";

const sidebarConfig = [
  {
    subheader: "",
    items: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <Icon icon={starFill} />,
      },
    ],
  },
];

export default sidebarConfig;
