import gridIcon from "../../assets/icons/Dashboard.png";
import tableIcon from "../../assets/icons/Table.png";
import calendarIcon from "../../assets/icons/calender.png";
import userIcon from "../../assets/icons/user.png";
import chartIcon from "../../assets/icons/chart.png";
import settingsIcon from "../../assets/icons/settings.png";

const navItems = [
  { id: 1, icon: gridIcon, label: "Dashboard", path: "/dashboard" },
  { id: 2, icon: tableIcon, label: "Rooms", path: "/rooms" },
  { id: 3, icon: calendarIcon, label: "Meetings", path: "/meetings" },
  { id: 4, icon: userIcon, label: "Users", path: "/users" },
  { id: 5, icon: chartIcon, label: "Charts", path: "/charts" },
  { id: 6, icon: settingsIcon, label: "Settings", path: "/settings" },
];

export default navItems;
