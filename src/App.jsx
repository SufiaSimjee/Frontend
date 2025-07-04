import {useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import AppBarTop from "./components/Appbartop";
import Sidebar from "./components/Sidebar";

const drawerWidth = 240;

export default function App({ toggleColorMode, themeMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />

      <AppBarTop
        onMobileMenuClick={handleDrawerToggle}
        onSidebarToggle={toggleSidebar}
        sidebarOpen={sidebarOpen}
        themeMode={themeMode}
        toggleColorMode={toggleColorMode}
      />

      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        open={sidebarOpen}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: sidebarOpen ? `calc(100% - ${drawerWidth}px)` : "100%" },
          transition: "width 0.3s",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
