import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import PageNotFound from "../Page/PageNotFound";
import About from "../Page/about";

const Routers = createBrowserRouter([
  // Main layout with navbar & footer
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    //   {
    //     path: "/jobs/:id",
    //     element: <ShowDetails />,
    //     loader: ({ params }) =>
    //       fetch(`https://job-nest-server-nu.vercel.app/jobs/${params.id}`),
    //   },
    //   {
    //     path: "/jobApply/:id",
    //     element: 
    //       <PrivateRoute>
    //         <JobApply />
    //       </PrivateRoute>
    //   },
    //   {
    //     path: "myApplications",
    //     element: 
    //       <PrivateRoute>
    //         <MyApplications />
    //       </PrivateRoute>

    //   },
    //   {
    //     path: "addJob",
    //     element: 
    //       <PrivateRoute>
    //         <AddJob/>
    //       </PrivateRoute>

    //   },
    //   {
    //     path: "myPostedJobs",
    //     element: 
    //       <PrivateRoute>
    //         <MyPostedJobs/>
    //       </PrivateRoute>
    //   },
    //   {
    //     path: "applications/:job_id",
    //     element: 
    //       <PrivateRoute>
    //         <ViewApplications/>
    //       </PrivateRoute>,
    //       loader: ({params}) => fetch(`https://job-nest-server-nu.vercel.app/applications/job/${params.job_id}`)
    //   },
        {
            path: "/about",
            element: <About/>
        }
    ],
  },

  // Routes without Navbar/Footer
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default Routers;