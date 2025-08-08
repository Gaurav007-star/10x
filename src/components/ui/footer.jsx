import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import KgpLogo from "../../asset/kgp-icon.png";
import EduLogo from "../../asset/edu.png";

const defaultSections = [
  {
    title: "Quick links",
    links: [
      { name: "IIT Kgp", href: "https://www.iitkgp.ac.in/" },
      { name: "Ministry of Education", href: "https://www.education.gov.in/" }
    ]
  },
  {
    title: "Cookie policy",
    links: [
      { name: "", href: "#" },
      { name: "", href: "#" },
      { name: "", href: "#" },
      { name: "", href: "#" }
    ]
  },
  {
    title: "Privacy policy",
    links: [
      { name: "", href: "#" },
      { name: "", href: "#" },
      { name: "", href: "#" },
      { name: "", href: "#" },
      { name: "", href: "#" }
    ]
  },
  {
    title: "Legal disclaimer",
    links: [
      { name: "", href: "#" },
      { name: "", href: "#" },
      { name: "", href: "#" },
      { name: "", href: "#" }
    ]
  }
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" }
];

const defaultAddresses = [
  {
    tag: "Email",
    title: "aiEduKgp@example.com",
    link: "#"
  },
  {
    tag: "Phone",
    title: "91+ 1234432564",
    link: "#"
  },
  {
    tag: "Address",
    title: "Akkarai, Near VGP Universal Kingdom",
    link: "#"
  }
];

export const Footer = ({}) => {
  const date = new Date().getFullYear();

  return (
    <section className="w-full h-[500px] px-20">
      <div className="container w-full h-full flex flex-col justify-between">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex flex-col justify-center gap-2 logo-section font-serif leading-11 cursor-pointer">
              <img src={KgpLogo} alt="kgp/logo" className="w-fit h-[100px]" />
              <div className="text-icon w-full h-max flex flex-col">
                <h1 className="text-[40px] font-bold text-primary-foreground">
                  10x TEACHER{" "}
                </h1>
                <h2 className="text-[40px] font-bold">CoEAI4Edu</h2>
              </div>
            </div>

            {/* description */}
            <p className="max-w-[70%] text-sm text-muted-foreground">
              Empowering the next generation with AI-driven learning. We provide
              accessible, innovative education solutions to prepare learners for
              the future.
            </p>

            {/* address */}
            <ul className="max-w-[70%] text-[16px] text-muted-foreground gap-2">
              {defaultAddresses.map((item, i) => (
                <li key={i}>{item.title}</li>
              ))}
            </ul>

            {/* social links */}
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {defaultSocialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-4 ">
            {defaultSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link?.href}>{link?.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* bottom-section */}
        <div className="my-8 flex flex-col justify-between gap-4 py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">
            ©{date} 10x Teacher CoEAI4Edu | All rights reserved | Designed by{" "}
            <a
              href={"https://www.techscooper.com/"}
              className="text-primary hover:underline"
            >
              TechScooper
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
