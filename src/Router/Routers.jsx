import { createBrowserRouter } from "react-router";

import CategoryArticles from "../Components/Outlet/CategoryArticles";

import Login from "./../Page/Login";
import Register from "./../Page/Register";
import PageNotFound from "./../Page/PageNotFound";
import About from "./../Page/About";
import AllArticles from "../Page/AllArticles";
import ArticleDetails from "../Page/ArticleDetails";
import Home from "./../Components/Home/Home";
import MainLayout from "./../Layouts/MainLayout";
import PostArticle from "../Page/PostArticle";
import MyArticles from "../Page/MyArticles";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../Page/ForgotPassword";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "articles", element: <AllArticles /> },
      { path: "articles/:id", element: <ArticleDetails /> },
      { path: "about", element: <About /> },
      {
        path: "post-article",
        element: (
          <PrivateRoute>
            <PostArticle />
          </PrivateRoute>
        ),
      },
      {
        path: "my-articles",
        element: (
          <PrivateRoute>
            <MyArticles />
          </PrivateRoute>
        ),
      },
      {
        path: "category/:categoryName",
        element: <CategoryArticles />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default Routers;
