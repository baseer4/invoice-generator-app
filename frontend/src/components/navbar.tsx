import React from 'react'
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.svg';

const navbar = () => {
  const navigate = useNavigate();
  return (
  <div className="flex justify-between items-center p-2  bg-gray-900/10 backdrop-blur-md text-white px-8 md:px-12 lg:px-16 border-b border-white/10">
        <div className=''>
          <img src={logo} alt="" className='h-10'/>
        </div>
        <Button variant="neon" onClick={()=>navigate("/login")}>Login</Button>
    </div>
  )
}

export default navbar