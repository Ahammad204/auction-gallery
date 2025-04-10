import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {  toast } from 'react-toastify';

const Auction = () => {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [disabledFavorites, setDisabledFavorites] = useState(new Set());

  useEffect(() => {
    fetch("./item.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error loading items:", err));
  }, []);

  const toggleFavorite = (item) => {
    const exists = favorites.find((fav) => fav.id === item.id);
  
    if (exists) {
      // Remove item from favorites and enable future actions
      setFavorites((prev) => prev.filter((fav) => fav.id !== item.id));
      setDisabledFavorites((prev) => {
        const newDisabledFavorites = new Set(prev);
        newDisabledFavorites.delete(item.id);
        return newDisabledFavorites;
      });
      toast.error("Item Removed from favorite");
    } else {
      setFavorites((prev) => [...prev, item]);
      setDisabledFavorites((prev) => {
        const newDisabledFavorites = new Set(prev);
        newDisabledFavorites.add(item.id); 
        return newDisabledFavorites;
      });
      toast.success("Item added successfully");
    }
  };
  
  
  

  return (
    <div className="gap-2">
      <section className="py-12 px-6">
        <div>
          <h3 className="text-xl font-semibold px-6 pt-6">Active Auctions</h3>
          <p className="text-sm text-gray-600 px-6 pb-4">
            Place your bids before time runs out!
          </p>
        </div>
      </section>

      <div className="flex mx-10 gap-10">
        {/* Auction Items */}
        <div className="w-[70%] bg-white shadow rounded-xl overflow-hidden">
          <div className="grid grid-cols-4 gap-4 text-sm text-gray-500 font-bold border-y px-6 py-3">
            <div>Items</div>
            <div>Current Bid</div>
            <div>Time Left</div>
            <div className="text-center">Bid</div>
          </div>

          <div className="divide-y">
            {items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 gap-4 items-center px-6 py-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-400 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                     
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.title}
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  {item.currentBidPrice}
                </p>
                <p className="text-sm font-medium">{item.timeLeft}</p>
                <div
                  className={`text-center cursor-pointer ${
                    disabledFavorites.has(item.id) ? "cursor-not-allowed" : ""
                  }`}
                  onClick={() => {
                    if (!disabledFavorites.has(item.id)) {
                      toggleFavorite(item);
                    }
                  }}
                >
                  {favorites.find((fav) => fav.id === item.id) ? (
                    <FaHeart className="text-red-500 cursor-not-allowed text-xl mx-auto transition" />
                  ) : (
                    <FaRegHeart className="text-gray-400 text-xl  mx-auto transition" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Favourite Section */}
        <div className="mx-auto w-[30%] h-fit bg-white rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-blue-800 mb-2 py-2 border-b border-gray-300">
            Favourite items
          </h2>
          {favorites.length === 0 ? (
            <div className="border-b border-gray-300 p-3">
              <p className="text-gray-600 text-sm font-bold">
                No favourite yet
              </p>
              <p className="text-gray-600 text-sm">
                click the heart icon on any items
                <br /> to add it to your favourites
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {favorites.map((favItem) => (
                <div
                  key={favItem.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={favItem.image}
                      alt={favItem.title}
                      className="w-12 h-12 object-cover rounded"
                      
                    />
                    <div className="text-left">
                      <p className="text-sm font-medium text-blue-900 truncate w-32">
                        {favItem.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        ${favItem.currentBidPrice} &nbsp; Bids: {favItem.bidsCount}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(favItem)}
                    className="text-red-500 text-sm"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between p-3">
            <h1 className="text-gray-600 font-bold mb-4">total bids amount</h1>
            <p className="font-bold">
              $
              {favorites
                .reduce(
                  (total, item) =>
                    total +
                    parseFloat(
                      String(item.currentBidPrice).replace(/[$,]/g, "")
                    ),
                  0
                )
                .toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;
