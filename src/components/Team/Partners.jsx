import React from "react";
import Logo01 from "../../asset/partners/Logos10x-01.jpg";
import Logo02 from "../../asset/partners/Logos10x-02.jpg";
import Logo03 from "../../asset/partners/Logos10x-03.jpg";
import Logo04 from "../../asset/partners/Logos10x-04.jpg";
import Logo05 from "../../asset/partners/Logos10x-05.jpg";
import Logo06 from "../../asset/partners/Logos10x-06.jpg";
import Logo07 from "../../asset/partners/Logos10x-07.jpg";
import Logo08 from "../../asset/partners/Logos10x-08.jpg";
import Logo09 from "../../asset/partners/Logos10x-09.jpg";
import Logo10 from "../../asset/partners/Logos10x-10.jpg";
import Logo11 from "../../asset/partners/Logos10x-11.jpg";
import Logo12 from "../../asset/partners/Logos10x-12.jpg";
import Logo13 from "../../asset/partners/Logos10x-13.jpg";
import Logo14 from "../../asset/partners/Logos10x-14.jpg";
import Logo15 from "../../asset/partners/Logos10x-15.jpg";
import Logo16 from "../../asset/partners/Logos10x-16.jpg";
import Logo17 from "../../asset/partners/Logos10x-17.jpg";
import Logo18 from "../../asset/partners/Logos10x-18.jpg";
import Logo19 from "../../asset/partners/Logos10x-19.jpg";
import Logo20 from "../../asset/partners/Logos10x-20.jpg";
import Logo21 from "../../asset/partners/Logos10x-21.jpg";
import Logo22 from "../../asset/partners/Logos10x-22.jpg";
import Logo23 from "../../asset/partners/Logos10x-23.jpg";
import Logo24 from "../../asset/partners/Logos10x-24.jpg";
import Logo25 from "../../asset/partners/Logos10x-25.jpg";
import Logo26 from "../../asset/partners/Logos10x-26.jpg";
import { IoMdArrowForward } from "react-icons/io";
const PartnersData = [
  {
    title: "Government",
    logos: [
      { name: "Telangana state", logo: Logo01 },
      { name: "Andhra Pradesh state", logo: Logo02 },
      { name: "India AI Mission", logo: Logo03 },
      { name: "NCERT", logo: Logo04 },
      { name: "WB state", logo: Logo05 },
      { name: "KVS", logo: Logo06 },
      { name: "Jharkhand", logo: Logo07 },
      { name: "Odisha", logo: Logo08 }
    ]
  },
  {
    title: "Foundations and Corporates",
    logos: [
      { name: "Ekstep", logo: Logo09 },
      { name: "Wadhwani AI", logo: Logo10 },
      { name: "Microsoft", logo: Logo11 },
      { name: "EKHO Foundations: Rocket Learning", logo: Logo12 },
      { name: "Central Square Foundation", logo: Logo13 },
      {
        name: "Centre for Research in Schemes and Policies (CRISP)",
        logo: Logo14
      },
      { name: "UN global compact", logo: Logo15 },
      { name: "JPAL South Asia", logo: Logo16 }
    ]
  },
  {
    title: "EdTech",
    logos: [
      { name: "Mindspark", logo: Logo17 },
      { name: "CL educate", logo: Logo18 },
      { name: "DEXIT", logo: Logo19 },
      { name: "EduVerse", logo: Logo20 },
      { name: "Filo", logo: Logo21 },
      { name: "Meraki Labs", logo: Logo22 },
      { name: "The School of AI", logo: Logo23 }
    ]
  },
  {
    title: "Academia and Schools",
    logos: [
      { name: "Ashoka University", logo: Logo24 },
      { name: "Griffins International School, Kharagpur", logo: Logo25 },
      { name: "DAV Model School IIT Kharagpur", logo: Logo26 }
    ]
  }
];

const Partners = () => {
  return (
    <div className="w-full h-max pl-[10vw] my-10">
      <h1 className="w-full h-max text-[60px] text-primary text-center font-semibold pr-[10vw]">
        Partners
      </h1>
      {PartnersData.map((item) => {
        return (
          <div className="box flex flex-col gap-4 my-6">
            <h1 className="text-[30px] font-medium text-primary flex items-center gap-1">{item.title}<IoMdArrowForward/></h1>
            <div className="logo-section flex flex-wrap gap-4 w-full ">
              {item.logos.map((logo) => {
                return (
                  <img
                    src={logo.logo}
                    alt={logo.name}
                    className="w-[200px] h-auto rounded-2xl object-cover"
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Partners;
