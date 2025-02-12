"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from "@mui/material";
import { Dashboard, Home, Info, Logout, Menu, Close } from "@mui/icons-material";

const Sidebar = () => {
  const [open, setOpen] = useState(true); 
  const pathname = usePathname();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { name: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
    { name: "Home", icon: <Home />, path: "/" },
    { name: "About", icon: <Info />, path: "/about" },
    { name: "Logout", icon: <Logout />, path: "/logout" },
  ];

  return (
    <div>
      
      <IconButton onClick={toggleDrawer} className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md">
        <Menu />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer
        variant="persistent"
        open={open}
        onClose={toggleDrawer}
        className="w-64"
        sx={{
          "& .MuiDrawer-paper": { width: "250px", backgroundColor: "#111827", color: "white" },
        }}
      >
        <div className="bg-gray-900 h-full flex flex-col">
         
          <div className="p-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Analytics Panel</h2>
           
            <IconButton onClick={toggleDrawer} className="text-white md:hidden">
              <Close />
            </IconButton>
          </div>
          <Divider className="bg-gray-700" />

          {/* Sidebar Menu */}
          <List className="flex-grow">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.path} className="no-underline">
                <ListItem
                  className={`hover:bg-gray-700 ${
                    pathname === item.path ? "bg-gray-800" : ""
                  } transition-all`}
                >
                  <ListItemIcon className="text-white">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} className="text-white" />
                </ListItem>
              </Link>
            ))}
          </List>

          <Divider className="bg-gray-700" />

          
          <div className="p-4 text-center text-sm text-gray-400">© 2025 Payment Analytics</div>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
