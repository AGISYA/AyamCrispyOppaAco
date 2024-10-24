import React from "react";
import Image from "next/image";

export default function SidebarAdmin() {
  return (
    <div className="w-60 bg-white h-full text-black shadow-lg">
      <div className="p-4 flex items-center border-b border-gray-300">
        <Image
          src="/images/logoaco.png"
          alt="Logo"
          width={100}
          height={100}
          className="mr-2 "
        />
      </div>
      <nav className="mt-4">
        <li>
          <a
            href="#"
            className="block py-2 px-4 rounded font-semibold text-green-600 hover:text-white hover:bg-yellow-300 transition"
          >
            Product Carousel
          </a>
        </li>
      </nav>
    </div>
  );
}
