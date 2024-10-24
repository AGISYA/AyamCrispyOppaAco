import React from "react";

export default function HeaderAdmin() {
  return (
    <div className=" flex items-center justify-end h-14 sticky  bg-white bg-opacity-90 top-0 z-50">
      <nav className="mr-4">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-green-600 hover:text-yellow-400 ">
              Admin
            </a>
          </li>
          <li>
            <a href="#" className="text-green-600 hover:text-yellow-400 ">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
