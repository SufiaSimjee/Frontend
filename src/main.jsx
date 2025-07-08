import { StrictMode, useState, useEffect, useCallback, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, customTheme } from "./themes.js";

import App from "./App.jsx";
import NotFoundScreen from "./screens/NotFoundScreen.jsx";
import Dashboard from "./screens/Dashboard.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import ViewCategory from "./screens/ViewCategory.jsx";
import ViewBrand from "./screens/ViewBrand.jsx";
import ViewProduct from "./screens/ViewProduct.jsx"; 
import ViewUser from "./screens/ViewUser.jsx";

import LoginScreen from "./screens/LoginScreen.jsx";

export const Main = () => {
  const [mode, setMode] = useState(() => localStorage.getItem("themeMode") || "custom");

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === "custom" ? "dark" : "custom"));
  }, []);

  const theme = useMemo(() => (mode === "custom" ? customTheme : darkTheme), [mode]);

  const router = useMemo(() =>
    createBrowserRouter(
      createRoutesFromElements(
        <>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<App toggleColorMode={toggleTheme} themeMode={mode} />}>
          <Route index element={<Dashboard />} />
          <Route path="category" element={<ViewCategory />} />
          <Route path="brand" element={<ViewBrand />} />
          <Route path="product" element={<ViewProduct />} />
          <Route path="profile" element={<ProfileScreen />} />
          <Route path="users" element={<ViewUser />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>

        </>
      )
    ), [toggleTheme, mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
