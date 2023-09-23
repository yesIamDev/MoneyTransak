import React from "react";
import AddClientsForm from "./clients/AddClients-Form";

export default function ClientDetailsModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="w-[400px] flex flex-col">
        <div className="bg-white p-2 rounded">
          <div>Bonjour david</div>
        </div>
      </div>
    </div>
  );
}
