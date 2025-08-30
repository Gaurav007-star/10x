import { useState } from "react";
import Bivas from "../../asset/Teams Img/Bivas Mitra.jpg";
import Debaditya from "../../asset/Teams Img/Debaditya Roy.jpg";
import jeevanjyoti from "../../asset/Teams Img/Jeevanjyoti Chakrabarti.jpg";
import Kaushal from "../../asset/Teams Img/Kaushal Kumar Bhagat.jpg";
import Niloy from "../../asset/Teams Img/Niloy Ganguly.jpg";
import Parth from "../../asset/Teams Img/Parth P . Chakrabarti.jpg";
import Pawan from "../../asset/Teams Img/Pawan Goyal.jpg";
import Plaban from "../../asset/Teams Img/Plaban Kumar bhowmick.jpg";
import Rajlakshmi from "../../asset/Teams Img/Rajlakshmi Guha.jpg";
import Shyamal from "../../asset/Teams Img/Shyamal Kumar Das Mandal.jpg";
import Somak from "../../asset/Teams Img/Somak Aditya.jpg";
import Sourangshu from "../../asset/Teams Img/Sourangshu bhattacharya.jpg";
import Sudip from "../../asset/Teams Img/Sudip Misra.jpg";
import Suman from "../../asset/Teams Img/Suman Chakraborty.jpg";
import Tutan from "../../asset/Teams Img/Tutan Ahmed.jpg";

export default function Member() {
  // Data: each section has title + images (with titles)
  const MembersData = [
    {
      title: "Deployment of Large-Scale Platforms",
      images: [
        { src: Niloy, title: "Niloy Ganguly" },
        { src: Parth, title: "Partha P. Chakrabarti" },
        { src: Plaban, title: "Plaban Kumar Bhowmick" },
        { src: Sudip, title: "Sudip Misra" },
        {
          src: jeevanjyoti,
          title: "Jeevanjyoti Chakraborty"
        },
        { src: Suman, title: "Suman Chakraborty" }
      ]
    },
    {
      title: "AI & Agent Development",
      images: [
        { src: Pawan, title: "Pawan Goyal" },
        { src: Somak, title: "Somak Aditya" },
        { src: Debaditya, title: "Debaditya Roy" },
        { src: Sudip, title: "Sudip Misra" },
        {
          src: Sourangshu,
          title: "Sourangshu Bhattacharya"
        },
        { src: Bivas, title: "Bivas Mitra" },
        { src: Kaushal, title: "Kaushal Kumar Bhagat" }
      ]
    },
    {
      title: "Measurement, Assessment & Validation",
      images: [
        { src: Rajlakshmi, title: "Rajlakshmi Guha" },
        { src: Parth, title: "Partha P. Chakrabarti" },
        { src: Somak, title: "Somak Aditya" },
        {
          src: Shyamal,
          title: "Shyamal Kumar Das Mandal"
        }
      ]
    },
    {
      title: "Human–AI Interaction & Training",
      images: [
        {
          src: Shyamal,
          title: "Shyamal Kumar Das Mandal"
        },
        { src: Plaban, title: "Plaban Kumar Bhowmick" },
        { src: Tutan, title: "Tutan Ahmed" },
        {
          src: Sourangshu,
          title: "Sourangshu Bhattacharya"
        },
        { src: Kaushal, title: "Kaushal Kumar Bhagat" }
      ]
    },
    {
      title: "Educational Domain Expertise",
      images: [
        { src: Plaban, title: "Plaban Kumar Bhowmick" },
        {
          src: Shyamal,
          title: "Shyamal Kumar Das Mandal"
        },
        { src: Tutan, title: "Tutan Ahmed" },
        { src: Kaushal, title: "Kaushal Kumar Bhagat" },
        { src: Rajlakshmi, title: "Rajlakshmi Guha" },
        {
          src: jeevanjyoti,
          title: "Jeevanjyoti Chakraborty"
        },
        { src: Sudip, title: "Sudip Misra" },
        { src: Pawan, title: "Pawan Goyal" }
      ]
    },
    {
      title: "Policy, Ethics & Governance",
      images: [
        { src: Niloy, title: "Niloy Ganguly" },
        { src: Parth, title: "Partha P. Chakrabarti" },
        { src: Suman, title: "Suman Chakraborty" },
        { src: Tutan, title: "Tutan Ahmed" }
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col h-max w-full bg-white px-[10vw] my-10">
      <h1 className="w-full h-max text-[60px] text-primary text-center font-semibold">
        Team
      </h1>
      <div className="bottom-section w-full h-max flex my-10">
        {/* Left Sidebar */}
        <div className="h-max w-[30%] overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {MembersData.map((section, index) => (
              <li
                key={section.title}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer text-[24px] py-4 px-4 rounded-2xl ${
                  activeIndex === index
                    ? "text-primary"
                    : "hover:bg-secondary hover:text-primary-foreground"
                }`}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content: Show images with titles */}
        <div className="flex flex-col h-max w-[70%] overflow-x-hidden scroll-smooth list_hidden_scrollbar ">
          {/* <h2 className="text-[30px] font-medium mb-6 text-primary w-full text-center">
          {MembersData[activeIndex].title}
        </h2> */}
          <div className="grid grid-cols-3 gap-4 px-4">
            {MembersData[activeIndex].images.map((img, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-2xl p-3 cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-[230px] h-[300px] object-contain rounded-2xl"
                />
                <p className="mt-4 text-[18px] text-center font-semibold  text-gray-700 w-full">
                  {img.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
