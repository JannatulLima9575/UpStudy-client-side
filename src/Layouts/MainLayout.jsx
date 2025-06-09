import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div data-theme="light" className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;