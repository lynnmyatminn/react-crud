import {
  ChartBarIcon,
  DesktopComputerIcon,
  HomeIcon,
} from "@heroicons/react/solid";

const _navs = [
  {
    name: "Main",
    children: [
      {
        name: "Dashboard",
        icon: HomeIcon,
        to: "/dashboard",
      },
      {
        name: "Analytics",
        icon: ChartBarIcon,
        to: "/analytics",
      },
      {
        name: "Inventory",
        icon: DesktopComputerIcon,
        to: "/inventory",
      },
    ],
  },
];

export default _navs;
