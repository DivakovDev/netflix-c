import { signOut } from "next-auth/react";
import React from "react";
import { FaPencil } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { IoMdArrowDropup } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <>
      <div className="absolute right-[9px] lg:right-[27px] top-[24px] lg:top-[26px] z-50">
        <IoMdArrowDropup className="text-white text-2xl" />
      </div>
      <div className="bg-black w-48 absolute top-10 lg:top-11 right-0 flex-col pt-5  border-1 border-gray-800 flex">
        <div className="flex flex-col gap-3 pb-5 border-b-2 border-gray-900">
          <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
            <FaPencil className="text-gray text-lg" />
            <p className="text-white font-medium text-[12px] group-hover/item:underline">
              Username
            </p>
          </div>
          <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
            <BiTransfer className="text-gray text-xl" />
            <p className="text-white font-medium text-[12px] group-hover/item:underline">
              Transfer Profile
            </p>
          </div>
          <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
            <IoPersonOutline className="text-gray text-xl font-bold" />
            <p className="text-white font-medium text-[12px] group-hover/item:underline">
              Profile
            </p>
          </div>
          <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
            <FaRegQuestionCircle className="text-gray text-xl" />
            <p className="text-white font-medium text-[12px] group-hover/item:underline">
              Help Center
            </p>
          </div>
        </div>
        <div onClick={() => signOut()} className="flex items-center justify-center text-center py-3">
          <p className="text-[12px] text-white font-medium hover:underline">
            Sign out of Netflix
          </p>
        </div>
      </div>
    </>
  );
};
export default AccountMenu;
