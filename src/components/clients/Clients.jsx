import React, { useState, useEffect } from "react";
import ClientsList from "./Clients-List";
import { IoMdAdd } from "react-icons/io";

export default function Clients() {
  return (
    <div className="flex flex-col m-2">
      <div className="m-1 flex flex-row justify-between bg-gray-200">
        <div className="h-[50px] flex items-center px-5 font-bold text-xl mx-20">
          <h2>Clients</h2>
        </div>
      </div>
      <ClientsList />
    </div>
  );
}
