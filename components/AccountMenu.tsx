import { signOut } from "next-auth/react";
import React from "react";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 flex-col py-5  border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img src="/defaultblue.jpg" alt="" className="w-8 rounded-md" />
          <p className="text-white text-sm group-hover/item:underline">
            Username
          </p>
        </div>
      </div>
    </div>
  );
};
export default AccountMenu;
