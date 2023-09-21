import React, { useState, useEffect, Fragment } from "react";
import { Table, Input } from "antd";
import { IoMdAdd } from "react-icons/io";
import Modal from "../Modal";
import AddClientsForm from "./AddClients-Form";
import { AiOutlinePlus } from "react-icons/ai";

export default function Clients() {
  const [Clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
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
  }, [Clients]);

  return (
    <div className="flex flex-col m-2 gap-4">
      <div className="m-1 flex flex-row justify-between bg-gray-200">
        <div className="h-[50px] flex items-center px-5 font-bold text-xl text-blue-600 mx-20">
          <h2>Clients</h2>
        </div>
        <Fragment>
          <button
            data-modal-target="staticModal"
            data-modal-toggle="staticModal "
            className="border p-2 mx-2 text-white bg-blue-600 rounded-full hover:brightness-125"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <AiOutlinePlus />
          </button>
        </Fragment>
      </div>
      <div>
        <Table columns={columns} dataSource={Clients} size="small" />;
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <AddClientsForm />
      </Modal>
    </div>
  );
}
