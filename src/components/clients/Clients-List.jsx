import React, { useState, useEffect } from "react";
import { Table, Input, Popover } from "antd";
import { AiOutlinePlus } from "react-icons/ai";

export default function ClientsList() {
  const [clients, setClients] = useState([]);
  const [seachedText, setSeachedText] = useState("");

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filteredValue: [seachedText],
      onFilter: (value, record) => {
        return String(record.name).toLowerCase().includes(value.toLowerCase());
      },
      onchange: (e) => {
        setSeachedText(e.target.value ? [e.target.value] : []);
      },
    },
    {
      title: "Postname",
      dataIndex: "postname",
      key: "postname",
    },
    {
      title: "Nationalite",
      dataIndex: "nationalite",
      key: "nationalite",
    },
    {
      title: "age",
      dataIndex: "age",
      key: "age",
    },
  ];

  useEffect(() => {
    const fetchClients = async () => {
      const res = await fetch("http://localhost:3333/api/clients/", {
        method: "get",
      });
      const data = await res.json();
      setClients(data);
    };
    fetchClients();
  });

  return (
    <div className="m-5 max-h-scre flex flex-col">
      <div className="flex justify-end my-2">
        <div className="flex justify-between">
          <div className="my-2">
            <Input.Search
              className="w-[500px]"
              placeholder="Seach client ..."
              onSearch={(value) => {
                setSeachedText(value);
              }}
              filterOption={true}
            />
          </div>
          <div className="flex items-center">
            <Popover content={<p>Click to add a new client</p>} title="Client">
              <button className="border p-2 mx-2 text-white bg-blue-600 rounded-full hover:brightness-125">
                <AiOutlinePlus />
              </button>
            </Popover>
          </div>
        </div>
      </div>
      <Table columns={columns} dataSource={clients} size="small" />;
    </div>
  );
}
