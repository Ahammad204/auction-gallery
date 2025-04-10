import React from 'react';
import person from "../../../assets/person.png"
import notification from "../../../assets/Group 3466092.png"

const Navbar = () => {
    return (
        <>


   
<nav classNameName="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        
        {/* <!-- Logo --> */}
        <div className="flex items-center space-x-2">
          <a href="#" className="text-2xl text-blue-800">
            Auction<span className="text-yellow-400 font-bold">Gallery</span>
          </a>
        </div>

        {/* <!-- Desktop Menu --> */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">Auctions</a>
          <a href="#" className="hover:text-yellow-500">Categories</a>
          <a href="#" className="hover:text-yellow-500">How to works</a>
        </div>

        {/* <!-- Profile Icon --> */}
        <div className="md:flex items-center space-x-4">
          
          <img src={notification} alt="User" className='h-8 w-8 rounded-full' />
          <img src={person} alt="User" className='h-8 w-8 rounded-full' />
        </div>


      </div>
    </div>

  </nav>


        </>
    );
};

export default Navbar;