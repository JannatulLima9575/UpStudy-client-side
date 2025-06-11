import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
};

export default MainLayout;