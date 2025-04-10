import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Auction from "./Auction/Auction";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="my-10">
        <Banner></Banner>
      </div>

      <div className="my-10">
        <Auction></Auction>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
