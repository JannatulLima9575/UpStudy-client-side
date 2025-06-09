import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div data-theme="light" className="">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
