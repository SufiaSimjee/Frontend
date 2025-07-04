import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  Menu as MenuIcon,
} from "@mui/icons-material";

export default function AppBarTop({
  onMobileMenuClick,
  onSidebarToggle,
  sidebarOpen,
  themeMode,
  toggleColorMode,
}) {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* Mobile toggle */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMobileMenuClick}
          sx={{ mr: 1, display: { sm: "none" } }}
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop toggle */}
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

        {/* Theme toggle */}
        <IconButton color="inherit" onClick={toggleColorMode} aria-label="toggle theme">
          {themeMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
