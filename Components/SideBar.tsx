import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  navBarOpen: boolean;
  handleNavBar(): void;
}

const SideBar = ({ navBarOpen, handleNavBar }: Props) => {
  return (
    <>
      {navBarOpen ? (
        <XMarkIcon
          className="fixed z-30 flex items-center cursor-pointer left-10 top-6 stroke-1 h-10 w-10 transition-all ease-in-out delay-250 hover:stroke-2"
          onClick={handleNavBar}
        ></XMarkIcon>
      ) : (
        <Bars3Icon
          onClick={handleNavBar}
          className="fixed z-30 flex items-center cursor-pointer left-10 top-6 stroke-1 h-10 w-10 transition-all ease-in-out delay-250 hover:stroke-2"
        ></Bars3Icon>
      )}
      <div
        className={`top-0 left-0 w-[20vw] bg-cultured  p-10 pl-20 text-white fixed h-full ease-in-out duration-300 ${
          navBarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <p className="flex flex-col mt-20 text-sm font-semibold lowercase text-rich-black space-y-4">
          <a
            className="transition-all ease-in-out delay-75 cursor-pointer hover:font-bold"
            href=""
          >
            todo list
          </a>
          <a
            className="transition-all ease-in-out delay-75 cursor-pointer hover:font-bold"
            href=""
          >
            contact
          </a>
          <a
            className="transition-all ease-in-out delay-75 cursor-pointer hover:font-bold"
            href=""
          >
            login
          </a>
        </p>
      </div>
    </>
  );
};

export default SideBar;
