import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation: React.FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="h-full flex flex-col justify-center items-center">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="md:hidden flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 focus:outline-none"
          onClick={openDrawerHandler}
        >
          <span className="block w-8 h-0.5 bg-white" />
          <span className="block w-8 h-0.5 bg-white" />
          <span className="block w-8 h-0.5 bg-white" />
        </button>
        <h1 className="text-white text-xl font-bold">
          <Link
            to="/"
            className="no-underline text-white hover:text-yellow-400"
          >
            YourPlaces
          </Link>
        </h1>
        <nav className="hidden md:block">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
