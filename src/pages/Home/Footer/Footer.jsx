import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer Section --> */}
      <footer className="bg-gray-100 py-8 text-center text-gray-600 text-sm">
        <div className="container mx-auto">
          <div className="mb-4">
            <a href="#" className="text-blue-800 text-base">
              Auction<span className="font-bold text-yellow-400">Gallery</span>
            </a>
            <p className="mt-1">Bid. Win. Own.</p>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-gray-800">
              Home
            </a>
            <a href="#" className="hover:text-gray-800">
              Auctions
            </a>
            <a href="#" className="hover:text-gray-800">
              Categories
            </a>
            <a href="#" className="hover:text-gray-800">
              How to works
            </a>
          </div>
          <p>&copy; 2025 AuctionGallery. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
