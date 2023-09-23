import React, { useState, useEffect, Fragment } from "react";
import { Table, Input, Popover } from "antd";

import AddClientModal from "../Add-Client-Modal";
import ClientDetailsModal from "../Client-Details-Modal";
import AddClientsForm from "./AddClients-Form";

import { AiOutlinePlus } from "react-icons/ai";
import { VscEdit } from "react-icons/vsc";
import { IoMdAdd, IoIosMore } from "react-icons/io";
import { RiChatCheckFill, RiDeleteBinLine } from "react-icons/ri";

export default function Clients() {
  const [Clients, setClients] = useState([]);
  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [showClientDetailsModal, setShowClientDetailsModal] = useState(false);
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
  }, []);

  const handleDeleteClient = async (id) => {
    try {
      const res = await fetch(`http://localhost:3333/api/clients/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const updateClients = Clients.filter((client) => client._id !== id);
        setClients(updateClients);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClient = (e) => {
    e.preventDefault();
    console.log("Mise a jour effectuee avec succes!");
  };

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
            <Popover content={<h6>Modifier</h6>}>
              <button
                className="hover:scale-110"
                onClick={(e) => {
                  handleEditClient(e);
                }}
              >
                <VscEdit />
              </button>
            </Popover>
            <Popover content={<h6>Supprimer</h6>}>
              <button
                className="hover:scale-110"
                onClick={(e) => {
                  e.preventDefault();
                  handleDeleteClient(record._id);
                }}
              >
                <RiDeleteBinLine style={{ color: "red" }} />
              </button>
            </Popover>
            <Popover content={<h6>Details</h6>}>
              <Fragment>
                <button
                  data-modal-target="staticModal"
                  data-modal-toggle="staticModal "
                  className="hover:scale-110"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowClientDetailsModal(true);
                  }}
                >
                  <IoIosMore />
                </button>
              </Fragment>
            </Popover>
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
                  setShowAddClientModal(true);
                }}
              >
                <AiOutlinePlus />
              </button>
            </Fragment>
          </div>
        </div>
      </div>
      <div>
        <Table columns={columns} dataSource={Clients} size="small" />
      </div>
      <AddClientModal
        isVisible={showAddClientModal}
        onClose={() => {
          setShowAddClientModal(false);
        }}
      ></AddClientModal>
      <ClientDetailsModal
        isVisible={showClientDetailsModal}
        onClose={() => {
          setShowClientDetailsModal(false);
        }}
      ></ClientDetailsModal>
    </div>
  );
}
