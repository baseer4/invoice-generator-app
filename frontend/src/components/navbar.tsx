import React from 'react';
import { Button } from '../components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let rightContent;

  switch(location.pathname) {
    case '/login':
      rightContent = (
        <div className=" flex items-center justify-center px-3.5 py-2.5 border-1 border-[#CCF575] text-[#CCF575] rounded-sm text-xs">
          Connecting People With Technology
        </div>
      );
      break;

    case '/dashboard':
      rightContent = (
        <div className="px-4 py-2 border border-blue-200 text-blue-200 rounded-md font-medium">
          Dashboard Active
        </div>
      );
      break;

    default:
      rightContent = (
        <Button variant="neon" onClick={() => navigate("/login")}>
          Login
        </Button>
      );
  }

  return (
    <div className="flex justify-between items-center p-2 bg-gray-900/10 backdrop-blur-md text-white px-8 md:px-12 lg:px-16 border-b border-white/10">
      <div>
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      {rightContent}
    </div>
  );
};

export default Navbar;
