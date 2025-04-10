import React from "react";
import banner from "../../../assets/Banner-min.jpg"

const Banner = () => {
  return (
    <>
      {/* <!-- Banner Section --> */}
      <section className="relative bg-black text-white">
        {/* <!-- Background Image --> */}

        <img
          src={banner}
          alt="Car Light Banner"
          className="w-full h-[400px] object-cover opacity-50"
        />

        {/* <!-- Overlay Content --> */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16">
          <h1 className="text-3xl md:text-5xl font-bold max-w-2xl">
            Bid on Unique Items from Around the World
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-xl">
            Discover rare collectibles, luxury goods, and vintage treasures in
            our curated auctions.
          </p>
          <button className="mt-6 inline-block bg-white text-black font-semibold px-6 py-3
           rounded-full hover:bg-yellow-400 transition">
            Explore Auctions
          </button>
        </div>
      </section>
    </>
  );
};

export default Banner;
