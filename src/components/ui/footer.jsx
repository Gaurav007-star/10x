import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import KgpLogo from "../../asset/kgp-icon.png";
import MainLogo from "../../asset/Dashabhuja_10xTeacher-logo.png";

import { Link } from "react-router";
import BackToTop from "./BcaktoTop";
const defaultAddresses = [
  { id: "email", title: "info@dashabhuja.com" },
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
    <section className="w-full h-[500px] max-[1025px]:px-10 px-20 mt-10">
      <div className="w-full h-full flex flex-col justify-between">
        {/* TOP ROW */}
        <div className="flex max-[450px]:flex-col w-full justify-between items-start mt-[50px]">
          {/* LEFT SIDE */}
          <div className="w-[55%] max-[450px]:w-full flex flex-col gap-2">
            <img
              src={MainLogo}
              alt="logo"
              className="w-[350px] h-auto object-cover"
            />
            <p className="mt-5 text-[16px] leading-relaxed w-[50%] max-[1025px]:w-[80%] max-[450px]:w-full">
              Empowering the next generation with AI-driven learning. We provide
              accessible, innovative education solutions to prepare learners for
              the future.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-5 text-xl max-[450px]:hidden">
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
          <div className="flex flex-col gap-2 items-end max-[450px]:items-start justify-center max-[450px]:my-5">
            <img src={KgpLogo} alt="Kgp Logo" className="w-[100px] h-auto" />

            <div className="w-full flex flex-col justify-center items-end max-[450px]:items-start">
              {defaultAddresses.map((item, i) => (
                <div
                  key={i}
                  className={` flex justify-end max-[450px]:justify-start items-center text-right max-[450px]:text-left `}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-5 text-xl max-[450px]:text-2xl min-[450px]:hidden">
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
        </div>

        {/* BOTTOM ROW */}
        <div className="text-xs text-center mt-8 pb-5 text-gray-500">
          <div className="w-full flex items-center justify-center gap-20 max-[450px]:gap-2 px-4 py-4 max-[450px]:px-2 font-medium text-primary text-[18px] max-[450px]:text-[14px] my-4">
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
          <h1 className="text-[18px]">
            ©{date} Dashabhuja 10x Teacher | All rights reserved | Designed by
            <a
              href="https://www.techscooper.com/"
              className="text-sky-500 no-underline hover:underline"
              target="_blank"
            >
              TechScooper
            </a>
          </h1>
        </div>
        
      </div>
    </section>
  );
};
