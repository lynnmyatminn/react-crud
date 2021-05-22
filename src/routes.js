import Dashboard from "./components/Dashboard/Dashboard";
import Location from "./components/Locations/Location";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: Location,
  },
];

export default routes;
