import React from "react";
import { SIDEBAR_LINKS } from "../../helpers/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

export default function Sidebar() {
  const { pathname } = useLocation();
  const linkClasses =
    "flex items-center my-2 font-light px-2 py-2 text-base hover:bg-gray-100 rounded-lg";
  return (
    <div className="bg-white w-30 p-2 flex flex-col justify-start items-center  border-r-2 border-gray-100">
      <div className="py-2 flex-col gap-1">
        {SIDEBAR_LINKS.map((item) => (
          <Link
            to={item.path}
            key={item.key}
            className={classNames(
              pathname === item.path ? "bg-gray-100" : "bg-white",
              linkClasses, "text-blue-600"
            )}
          >
            <span className="text-xl">{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
