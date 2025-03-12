import React from "react";
import { assets } from "../assets/assets";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-700 py-10 px-5">
      <div className="container mx-auto flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm">
        {/* Logo & Description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="ShopVerse Logo" />
          <p className="text-gray-700">
            Your go-to online store for the best products at unbeatable prices.
          </p>
        </div>
        {/* Company Links */}\
        <div>
          <p className="text-lg font-semibold mb-4 text-white">Company</p>
          <ul className="space-y-2">
            <li className="hover:text-green-400 cursor-pointer">Home</li>

            <li className="hover:text-green-400 cursor-pointer">About</li>

            <li className="hover:text-green-400 cursor-pointer">Delivery</li>
            <li className="hover:text-green-400 cursor-pointer">
              Privacy Policy
            </li>d
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <p className="text-lg font-semibold mb-4 text-white">Get in Touch</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaPhone className="text-green-400" /> +91 9876543210 
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-400" /> support@shopverse.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <FaFacebook className="text-xl cursor-pointer hover:text-green-400" />
            <FaTwitter className="text-xl cursor-pointer hover:text-green-400" />
            <FaInstagram className="text-xl cursor-pointer hover:text-green-400" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 border-t border-gray-700 text-center pt-5 text-sm">
        <p>Copyright &copy; 2025 ShopVerse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
