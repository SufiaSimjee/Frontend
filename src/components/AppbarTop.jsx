import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Tooltip,
  Box,
} from "@mui/material";
import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function AppBarTop({
  onMobileMenuClick,
  onSidebarToggle,
  sidebarOpen,
  themeMode,
  toggleColorMode,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleProfileClick = () => {
    handleMenuClose();
    navigate("/profile");
  };

  const handleLogout = () => {
    handleMenuClose();
    console.log("User logged out");
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* Mobile menu toggle */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMobileMenuClick}
          sx={{ mr: 1, display: { sm: "none" } }}
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop sidebar toggle */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={onSidebarToggle}
          sx={{ mr: 2, display: { xs: "none", sm: "inline-flex" } }}
          aria-label={sidebarOpen ? "collapse drawer" : "expand drawer"}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Zaw Min Mobile
        </Typography>

        {/* Theme mode toggle with tooltip */}
        <Tooltip title={themeMode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}>
          <IconButton color="inherit" onClick={toggleColorMode} aria-label="toggle theme">
            {themeMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>

        {/* Profile menu */}
        <Box sx={{ ml: 2 }}>
          <Tooltip title="Account">
            <IconButton onClick={handleMenuOpen} color="inherit" size="large" aria-label="account menu">
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
