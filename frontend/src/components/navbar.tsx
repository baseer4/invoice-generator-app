import React from 'react'
import { Button } from '../components/ui/button';

const navbar = () => {
  return (
  <div className="flex justify-between items-center p-2  bg-gray-900/10 backdrop-blur-md text-white px-8 md:px-12 lg:px-20 border-b border-white/10">
        <div className=''>logo</div>
        <Button variant="neon">Login</Button>
    </div>
  )
}

export default navbar