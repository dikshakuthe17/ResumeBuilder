import React from 'react';
import {Link} from 'react-router-dom';
import ProfileInfoCard from './../Cards/ProfileInfoCard';
import Dashboard from './../../pages/Home/Dashboard';

const Navbar = () => {
  return (
    <div className="h-16 bg-white border  border-gray-200/50   backdrop-blur-[2px] py-2.5 px-4 md:px-20 sticky top-0 z-30 ">
      <div className="container mx-auto flex items-center justify-between gap-5">
        <Link to="/Dashboard"  >
          <h2 className='text-lg md:text-xl font-medium text-black leading-5'>Resume Builder</h2> 
        </Link>

        <ProfileInfoCard/>
      </div>
    </div>
  );
};
export default Navbar;
