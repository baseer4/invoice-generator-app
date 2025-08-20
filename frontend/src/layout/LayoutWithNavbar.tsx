import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const LayoutWithNavbar = () => {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutWithNavbar;
