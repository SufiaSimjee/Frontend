import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Collapse,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Category as CategoryIcon
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

export default function SidebarContent() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Toolbar />
      <Divider />

      {/* Dashbaord */}
      <List>
        <ListItemButton component={Link} to="/" selected={isActive("/")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        {/* Category */}
       
        {/* Category */}
        <ListItemButton component={Link} to="/category" selected={isActive("/category")}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Category" />
        </ListItemButton>

      </List>
    </Box>
  );
}
