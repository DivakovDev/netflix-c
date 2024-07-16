import { useCallback, useState } from "react";
import { BsSearch, BsBell } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import { motion } from "framer-motion";

import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = useCallback(() => {
    setShowProfileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40 ">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
        <img className="h-4 lg:h-6" src="/logo.svg" alt="Site Logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex text-[12px] font-semibold">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        {/* Mobile Menu start */}
        <div
          onClick={toggleMobileMenu}
          onMouseEnter={() => {
            setShowMobileMenu(true);
          }}
          onMouseLeave={() => {
            setShowMobileMenu(false);
          }}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <IoMdArrowDropdown className="text-white transition text-xl" />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-5 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div
            onClick={toggleProfileMenu}
            onMouseEnter={() => {
              setShowProfileMenu(true);
            }}
            onMouseLeave={() => {
              setShowProfileMenu(false);
            }}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-7 lg:h-7  rounded-md overflow-hidden">
              <img src="/defaultblue.jpg" alt="Profile logo" />
            </div>
            <motion.div
              animate={
                showProfileMenu
                  ? { scale: 1, rotate: 180 }
                  : { scale: 1, rotate: 0 }
              }
              transition={{ duration: 0.2 }}
            >
              <IoMdArrowDropup className="hidden lg:flex text-white transition" />
            </motion.div>
            <AccountMenu visible={showProfileMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
