import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import MenuItem from "../molecules/MenuItem";
import Button from "../atomes/Button";

const Navbar = () => {
  return (
    <nav className="bg-primary mx-2 mt-0 rounded-xl w-1/6 h-full pt-8 flex flex-col justify-between">
      <ul className="ml-5">
        <MenuItem titleMenu="Dashboard" icon={<SpaceDashboardIcon sx={{ fontSize: 20 }} />} to="/" />
        <MenuItem titleMenu="Mes objectifs" icon={<GroupWorkIcon sx={{ fontSize: 20 }} />} to="/mygoals" />
        <MenuItem titleMenu="New Objectif" icon={<AddCircleOutlineIcon sx={{ fontSize: 20 }} />} to="/newgoals" />
        <MenuItem titleMenu="Calendrier" icon={<CalendarMonthIcon sx={{ fontSize: 20 }} />} to="/calendar" />
        <MenuItem titleMenu="Statistiques" icon={<AnalyticsIcon sx={{ fontSize: 20 }} />} to="/analytics" />
        <MenuItem titleMenu="Settings" icon={<SettingsIcon sx={{ fontSize: 20 }} />} to="/settings" />
      </ul>
      <Button iconButton={<LogoutIcon className="text-red-500" sx={{ fontSize: 20 }} />} />
    </nav>
  );
};

export default Navbar;
