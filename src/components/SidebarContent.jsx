import {
  Box,Divider,
  List,ListItemButton,
  ListItemIcon,ListItemText,
  Toolbar,Collapse,
} from "@mui/material";
import {SpaceDashboard,Apps,Storefront,Inventory2  ,
        PeopleAlt   
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
            <SpaceDashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        {/* Category */}
        <ListItemButton
          component={Link}
          to="/category"
          selected={isActive("/category")}
        >
          <ListItemIcon>
            <Apps />
          </ListItemIcon>
          <ListItemText primary="Category" />
        </ListItemButton>

        {/* Brand */}
        <ListItemButton
          component={Link}
          to="/brand"
          selected={isActive("/brand")}
        >
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="Brand" />
        </ListItemButton>

        {/* Product */}
        <ListItemButton
          component={Link}
          to="/product"
          selected={isActive("/product")}
        >
          <ListItemIcon>
            <Inventory2  />
          </ListItemIcon>
          <ListItemText primary="Product" />
        </ListItemButton>

        {/* Users */}
        <ListItemButton
          component={Link}
          to="/users"
          selected={isActive("/users")}
        >
          <ListItemIcon>
            <PeopleAlt    />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
        

      </List>
    </Box>
  );
}
