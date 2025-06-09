import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto min-h-[100vh] pt-24">
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
};

export default MainLayout;