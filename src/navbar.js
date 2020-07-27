import React from "react";

const Navbar = () => {
  return (
    <div className="mb-12 z-50">
      <div className=" w-full fixed flex bg-black h-12 ">
        <div className="flex items-center mx-auto container w-full">
          <div className="text-white text-2xl">Neeews!</div>
          <div className="text-white text-opacity-50 text-xs ml-2">
            powered by NewsAPI
          </div>
        </div>
        <div>
          <div>...</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
