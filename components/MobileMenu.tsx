import React from "react";

import { IoMdArrowDropup } from "react-icons/io";


interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <>
      <div className="absolute -right-[2px] top-[18px] z-50">
        <IoMdArrowDropup className="text-gray-300 text-2xl" />
      </div>
      <div className="bg-black w-56 absolute top-8 -left-12 py-5 flex-col border-2 border-gray-800 border-t-2 border-t-gray-300 flex">
        <div className="flex flex-col font-medium text-[12px] gap-4">
          <div className="px-3 text-center text-white hover:underline">
            Home
          </div>
          <div className="px-3 text-center text-white hover:underline">
            Series
          </div>
          <div className="px-3 text-center text-white hover:underline">
            Films
          </div>
          <div className="px-3 text-center text-white hover:underline">
            New & Popular
          </div>
          <div className="px-3 text-center text-white hover:underline">
            My List
          </div>
          <div className="px-3 text-center text-white hover:underline">
            Browse by Language
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
