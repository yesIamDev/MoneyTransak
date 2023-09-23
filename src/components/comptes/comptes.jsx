import React, { useState, useEffect } from "react";
import { Input, Table } from "antd";

export default function Comptes() {
  const [seachedText, setSeachedText] = useState("");
  const [Comptes, setComptes] = useState([]);

  useEffect(() => {
    const fetchComptes = async () => {
      const res = await fetch("http://localhost:3333/api/acounts/", {
        method: "GET",
      });
      const data = await res.json();
      setComptes(data);
    };
    fetchComptes();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "0",
    },
    {
      title: "Client",
      dataIndex: "client",
      key: "1",
    },
    {
      title: "Acount Number",
      dataIndex: "acountNumber",
      key: "2",
    },
    {
      title: "USD Sold",
      dataIndex: "usdSold",
      key: "3",
    },
    {
      title: "FC Sold",
      dataIndex: "fcSold",
      key: "4",
    },
  ];

  return (
    <div className="flex flex-col m-2 gap-4">
      <div className="flex flex-row justify-between m-1 bg-gray-200">
        <div className="h-[50px] flex items-center px-5 font-bold text-xl text-blue-600 mx-20">
          <h2>Comptes</h2>
        </div>
        <div className="flex items-center mx-5">
          <Input.Search
            placeholder="Rechercher un compte"
            onSearch={(value) => {
              setSeachedText(value);
            }}
          />
        </div>
      </div>
      <div>
        <Table columns={columns} dataSource={Comptes} size="small" />
      </div>
    </div>
  );
}
