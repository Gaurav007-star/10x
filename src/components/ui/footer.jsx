import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import KgpLogo from "../../asset/kgp-icon.png";
import MainLogo from "../../asset/mainLogo.png";

import { Link } from "react-router";
const defaultAddresses = [
  { id: "email", title: "info@10x-teacher.com" },
  { id: "phone", title: "+91 - 3222 - 283754, 284756" },
  {
    id: "address",
    title: "Indian Institute of Technology Kharagpur"
  },
  {
    id: "address",
    title: "Kharagpur, Paschim Medinipur, West Bengal, India - 721302"
  }
];

const defaultSocialLinks = [
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaFacebook />, href: "#", label: "Facebook" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin />, href: "#", label: "LinkedIn" }
];

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <section className="w-full h-[500px] px-[8%]">
      <div className="w-full h-full flex flex-col justify-between">
        {/* TOP ROW */}
        <div className="flex w-full justify-between items-start mt-[50px]">
          {/* LEFT SIDE */}
          <div className="w-[55%] flex flex-col gap-2">
            <img
              src={MainLogo}
              alt="logo"
              className="w-[400px] h-auto object-cover"
            />
            <p className="mt-5 text-sm leading-relaxed max-w-[50%]">
              Empowering the next generation with AI-driven learning. We provide
              accessible, innovative education solutions to prepare learners for
              the future.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-5 text-xl">
              {defaultSocialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="text-inherit hover:text-blue-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-2 items-end justify-center">
            <img src={KgpLogo} alt="Kgp Logo" className="w-[100px] h-auto" />

            <div className="w-full flex flex-col justify-center items-end">
              {defaultAddresses.map((item, i) => (
                <div
                  key={i}
                  className={` flex justify-end items-center text-right `}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="text-xs text-center mt-8 pb-5 text-gray-500">
          <div className="w-full flex items-center justify-center gap-20 p-4 font-medium text-primary text-[18px] my-4">
            <Link
              to={"#"}
              className="hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              Cookie policy
            </Link>
            <Link
              to={"#"}
              className="hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              Privacy policy
            </Link>
            <Link
              to={"#"}
              className="hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              Legal disclaimer
            </Link>
          </div>
          ©{date} 10x Teacher CoEAI4Edu | All rights reserved | Designed by{" "}
          <a
            href="https://www.techscooper.com/"
            className="text-sky-500 no-underline hover:underline"
          >
            TechScooper
          </a>
        </div>
      </div>
    </section>
  );
};
