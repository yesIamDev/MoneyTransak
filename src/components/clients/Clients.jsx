import React, { useState, useEffect } from "react";
import { Await } from "react-router-dom";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = () => {
      const res = fetch("http://localhost:3333/api/clients/", {
        methode: "get",
      });
      const data = await res.json();
      setClients(data);
    };
    fetchClients();
  });

  return (
    <div className="flex flex-col m-2">
      <div className="m-1 flex flex-row justify-between bg-gray-200">
        <div className="h-[50px] flex items-center px-5 font-bold">
          <h2>Clients</h2>
        </div>
      </div>
      <div className="my-1 relative overflow-x-auto shadow-sm">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-sm text-gray-700 bg-gray-100">
                <tr>
                  <th  scope="col" className="px-6 py-3">
                      Noms
                  </th>
                  <th  scope="col" className="px-6 py-3">
                      Noms
                  </th>
                  <th  scope="col" className="px-6 py-3">
                      Nationalites
                  </th>
                  <th  scope="col" className="px-6 py-3">
                      Age
                  </th>
                </tr>
            </thead>
            <tbody>
              {clients?.map((client) => {
                return(
                  <tr className="bg-white border-b" key={client.id}>
                      <td className="px-6 py-4">{client.name}</td>
                      <td className="px-6 py-4">{client.postname}</td>
                      <td className="px-6 py-4">{client.nationalite}</td>
                      <td className="px-6 py-4">{client.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
      </div>
    </div>
  );
}
