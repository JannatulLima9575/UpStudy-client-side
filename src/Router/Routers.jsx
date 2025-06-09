import { createBrowserRouter } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
  },
]);
