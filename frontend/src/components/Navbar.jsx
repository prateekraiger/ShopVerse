import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 font-medium">
      <img src={assets.logo} alt="logo" className="w-40 h-38 object-contain" />

      <nav className="ml-auto">
        <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
          {[
            { to: "/", label: "HOME" },
            { to: "/collection", label: "COLLECTION" },
            { to: "/about", label: "ABOUT" },
            { to: "contact", label: "CONTACT" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex flex-col items-center gap-1"
            >
              <p className="tracking-wide">{item.label}</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
