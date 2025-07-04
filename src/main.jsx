import { StrictMode, useMemo, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import { ThemeProvider, CssBaseline } from "@mui/material";

import App from "./App.jsx";
import NotFoundScreen from "./screens/NotFoundScreen.jsx";
import AddCategory from "./screens/AddCategory.jsx";
import CaategoryScreen from "./screens/CategoryScreen.jsx";

import { lightTheme, darkTheme, customTheme } from "./themes.js";

export const Main = () => {

  const [mode, setMode] = useState(() => {
    return localStorage.getItem("themeMode") || "light";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

 
  const toggleTheme = useMemo(() => {
    return () =>
      setMode((prev) =>
        prev === "light" ? "dark" :
        prev === "dark" ? "custom" :
        "light"
      );
  }, []);

  const theme = useMemo(() => {
    switch (mode) {
      case "dark":
        return darkTheme;
      case "custom":
        return customTheme;
      default:
        return lightTheme;
    }
  }, [mode]);

  // 5. Setup router with nested routes
  const router = useMemo(() =>
    createBrowserRouter(
      createRoutesFromElements(
        <Route
          path="/"
          element={<App toggleColorMode={toggleTheme} themeMode={mode} />}
        >
          <Route path="*" element={<NotFoundScreen />} />
          <Route path="/add/category" element={<AddCategory />} />
          <Route path="/category" element={<CaategoryScreen />} />
        </Route>
      )
    ), [toggleTheme, mode]
  );

  // 6. Return JSX
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

// 7. Mount to DOM
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
