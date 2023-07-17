import Button from "./UI/Button";
import React, { useState } from "react";

import Logout from "./Logout";

import TarockLogo from "../assets/tarocklogo.png";
import ThemeTogglerBar from "./UI/ThemeToggler";

const Topbar = (props: { isCollapse: boolean }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const name = JSON.parse(localStorage.getItem("token") ?? "").data.name;

  const logoutHandler = (event: React.FormEvent) => {
    setShowLogoutModal(true);
  };
  console.log(props.isCollapse);
  return (
    <div className="">
      {showLogoutModal && (
        <Logout
          onCancel={() => {
            setShowLogoutModal(false);
          }}
        />
      )}
      <div className="relative ">
        <div
          className={` xs:fixed right-0  bg-opacity-60 backdrop-filter backdrop-blur-lg z-20  w-screen 
           ${props.isCollapse && "md:pl-64"}
           flex py-4  xs:px-4  items-center mb-10 sm:pl-24 xs:pl-20 !overflow-x-hidden bg-white opacity-100 dark:bg-black dark:bg-opacity-80
           `}
        >
          <div className="flex flex-row gap-5">
            {/* <h1 className="text-orange-400 text-2xl  tracking-wide font-bold">
            {" "}
            TAROCK
          </h1> */}
            <img src={TarockLogo} className="w-fit h-7" />
            {/* <ThemeTogglerBar /> */}
          </div>
          <div className=" flex items-center ml-auto">
            <h4 className="text-slate-500 font-thin mr-4 md:visible xs:collapse dark:text-mediumGray">
              Hi, <span className="font-bold">{name}</span>
            </h4>
            {/* <Button
              variant="filled"
              size="small"
              className="px-6 py-2  bg-primaryOrange w-max mx-auto  text-white font-semibold rounded-lg text-md font-sans hover:bg-orange-200 hover:text-white"
              onClick={logoutHandler}
            >
              LogOut
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
