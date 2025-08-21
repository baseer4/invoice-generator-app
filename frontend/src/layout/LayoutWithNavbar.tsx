import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import '../index.css'

const LayoutWithNavbar = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#141414]">
      <Navbar />
      <main className="flex-1 pt-12 ">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutWithNavbar;
