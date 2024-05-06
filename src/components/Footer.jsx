import React from "react";
import { logo, paymentLogo } from "../assets";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CheckOutIcon from "@mui/icons-material/EmojiPeople";
import OrderTrackingIcon from "@mui/icons-material/Cottage";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const Footer = () => {
  return (
    <div className=" bg-gray-300 text-black py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logo} alt="LOGO" />
          <p className="text-green-500 text-sm tracking-wide">© emarkket.com</p>
          <img className="w-56" src={paymentLogo} alt="PaymentLogo" />
          <div className="flex gap-5 text-lg text-black">
            <GitHubIcon className="hover:text-white duration-300 cursor-pointer" />
            <YouTubeIcon className="hover:text-white duration-300 cursor-pointer" />
            <FacebookIcon className="hover:text-white duration-300 cursor-pointer" />
            <XIcon className="hover:text-white duration-300 cursor-pointer" />
            <InstagramIcon className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Anantnag , J&K , 192101</p>
            <p>Mobile: 9988665544 , 9988665533</p>
            <p>Phone: 0123-101010 , 0123-202020</p>
            <p>E-Mail: emarkkett@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <PersonOutlineIcon />
              </span>
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <CheckOutIcon />
              </span>
              Check Out
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <OrderTrackingIcon />
              </span>
              Order Tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <ContactSupportIcon />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-white border px-4 py-2 text-sm"
            type="text"
            placeholder="Enter your E-Mail"
          />
          <button className="text-sm border bg-green-500 text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
