import React from "react";
import { Drawer } from "@mui/material";
import SidebarContent from "./SidebarContent";

const drawerWidth = 240;

export default function Sidebar({ mobileOpen, handleDrawerToggle, open }) {
  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        <SidebarContent />
      </Drawer>

      {/* Desktop Drawer */}
      {open && (
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", sm: "block" },
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              overflowX: "hidden",
              transition: "width 0.3s",
            },
          }}
        >
          <SidebarContent />
        </Drawer>
      )}
    </>
  );
}
