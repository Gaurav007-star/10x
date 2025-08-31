import React, { useState } from "react";
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
import Logo27 from "../../asset/partners/Logos10x-27.jpg";
import Logo28 from "../../asset/partners/Logos10x-28.jpg";
import Logo29 from "../../asset/partners/Logos10x-29.jpg";
import Logo30 from "../../asset/partners/Logos10x-30.jpg";
import Logo31 from "../../asset/partners/Logos10x-31.jpg";
import Logo32 from "../../asset/partners/Logos10x-32.jpg";

import { IoMdArrowForward } from "react-icons/io";
const PartnersData = [
  {
    id: 1,
    title: "Government",
    logos: [
      { name: "Telangana state", logo: Logo01 },
      { name: "Andhra Pradesh state", logo: Logo02 },
      { name: "NCERT", logo: Logo04 },
      { name: "WB state", logo: Logo05 },
      { name: "KVS", logo: Logo06 },
      { name: "Jharkhand", logo: Logo07 },
      { name: "Odisha", logo: Logo08 },
      { name: "Assam", logo: Logo27 },
      { name: "India AI Mission", logo: Logo03 },
    ]
  },
  {
    id: 2,
    title: "Foundations and Corporates",
    logos: [
      { name: "Microsoft", logo: Logo11 },
      { name: "Google", logo: Logo28 },
      { name: "Ekstep", logo: Logo09 },
      { name: "Wadhwani AI", logo: Logo10 },
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
    id: 3,
    title: "EdTech",
    logos: [
      { name: "Filo", logo: Logo21 },
      { name: "Meraki Labs", logo: Logo22 },
      { name: "Mindspark", logo: Logo17 },
      { name: "CL educate", logo: Logo18 },
      { name: "DEXIT", logo: Logo19 },
      { name: "EduVerse", logo: Logo20 },
      { name: "The School of AI", logo: Logo23 },
      { name: "Edu", logo: Logo29 }
    ]
  },
  {
    id: 4,
    title: "Academia and Schools",
    logos: [
      { name: "DAV Model School IIT Kharagpur", logo: Logo26 },
      { name: "IIT Dhanbad", logo: Logo30 },
      { name: "IIT BHU", logo: Logo31 },
      { name: "Ashoka University", logo: Logo24 },
      { name: "UVCE", logo: Logo32 },
      { name: "Griffins International School, Kharagpur", logo: Logo25 },
    ]
  }
];

const Partners = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-max px-[10vw] my-10">
      <h1 className="w-full h-max text-[60px] text-primary text-center font-semibold">
        Partners
      </h1>
      <div className="bottom-section w-full h-max flex max-[1025px]:flex-col my-10 max-[450px]:my-0">
        {/* Left Sidebar */}
        <div className="h-max w-[30%] max-[1025px]:w-full overflow-y-auto py-4">
          <ul className="space-y-2 font-medium">
            {PartnersData.map((section, index) => (
              <li
                key={section.title}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer text-[24px] py-4 px-4 rounded-2xl ${
                  activeIndex === index
                    ? "text-primary bg-secondary"
                    : "hover:bg-secondary hover:text-primary-foreground"
                }`}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content: Show images with titles */}
        <div className="flex flex-col h-max w-[70%] max-[1025px]:w-full overflow-x-hidden scroll-smooth list_hidden_scrollbar p-4">
          {/* <h2 className="text-[30px] font-medium mb-6 text-primary w-full text-center">
          {MembersData[activeIndex].title}
        </h2> */}
          <div className="grid grid-cols-3 max-[1025px]:grid-cols-2 max-[450px]:grid-cols-1  gap-x-4 gap-y-6 justify-center-safe">
            {PartnersData[activeIndex].logos.map((item, idx) => (
              // <UserCard key={idx} image={img} />
              <img
                key={idx}
                src={item.logo}
                alt=""
                className={`w-50 max-[450px]:w-full h-auto object-cover`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
