import React, { useState, useEffect } from "react";
import ClientsList from "./Clients-List";
import { IoMdAdd } from "react-icons/io";

export default function Clients() {
  return (
    <div className="flex flex-col m-2">
      <div className="m-1 flex flex-row justify-between bg-gray-200">
        <div className="h-[50px] flex items-center px-5 font-bold">
          <h2>Clients</h2>
        </div>
        <div className="flex items-center mx-5">
          <button
            className="block text-white bg-black focus:outline-none font-medium  rounded-full  text-sm px-5 py-2.5 text-center"
            type="button"
          >
             <IoMdAdd />
          </button>
        </div>
      </div>
      <ClientsList />
    </div>
  );
}
