import React, { useState, useEffect, Fragment } from "react";
import { Table, Input } from "antd";
import { IoMdAdd } from "react-icons/io";
import Modal from "../Modal";
import AddClientsForm from "./AddClients-Form";
import { AiOutlinePlus } from "react-icons/ai";
import { VscEdit } from "react-icons/vsc";
import { RiChatCheckFill, RiDeleteBinLine } from "react-icons/ri";

export default function Clients() {
  const [Clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [seachedText, setSeachedText] = useState("");

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

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "0",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "1",
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
      key: "2",
    },
    {
      title: "Nationalite",
      dataIndex: "nationalite",
      key: "3",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "4",
    },
    {
      title: "Actions",
      key: "5",
      render: (record) => {
        return (
          <div className="flex flex-row gap-x-5 items-center mx-3">
            <button>
              <VscEdit />
            </button>
            <button>
              <RiDeleteBinLine style={{ color: "red" }} />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col m-2 gap-4">
      <div className="m-1 flex flex-row justify-between bg-gray-200">
        <div className="h-[50px] flex items-center px-5 font-bold text-xl text-blue-600 mx-20">
          <h2>Clients</h2>
        </div>
        <div className="flex flex-row items-center">
          <div>
            <Input.Search
              placeholder="Rechercher un client"
              onSearch={(value) => {
                setSeachedText(value);
              }}
            />
          </div>
          <div>
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
        </div>
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
