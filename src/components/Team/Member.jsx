import { useState } from "react";

export default function Member() {
  // Data: each section has title + images (with titles)
  const MembersData = [
    {
      title: "Deployment of Large-Scale Platforms",
      images: [
        { src: "https://placehold.co/600x400", title: "Niloy Ganguly" },
        { src: "https://placehold.co/600x400", title: "Partha P. Chakrabarti" },
        { src: "https://placehold.co/600x400", title: "Plaban Kumar Bhowmick" },
        { src: "https://placehold.co/600x400", title: "Sudip Misra" },
        {
          src: "https://placehold.co/600x400",
          title: "Jeevanjyoti Chakraborty"
        },
        { src: "https://placehold.co/600x400", title: "Suman Chakraborty" }
      ]
    },
    {
      title: "AI & Agent Development",
      images: [
        { src: "https://placehold.co/600x400", title: "Pawan Goyal" },
        { src: "https://placehold.co/600x400", title: "Somak Aditya" },
        { src: "https://placehold.co/600x400", title: "Debaditya Roy" },
        { src: "https://placehold.co/600x400", title: "Sudip Misra" },
        {
          src: "https://placehold.co/600x400",
          title: "Sourangshu Bhattacharya"
        },
        { src: "https://placehold.co/600x400", title: "Bivas Mitra" },
        { src: "https://placehold.co/600x400", title: "Kaushal Kumar Bhagat" }
      ]
    },
    {
      title: "Measurement, Assessment & Validation",
      images: [
        { src: "https://placehold.co/600x400", title: "Rajlakshmi Guha" },
        { src: "https://placehold.co/600x400", title: "Partha P. Chakrabarti" },
        { src: "https://placehold.co/600x400", title: "Somak Aditya" },
        {
          src: "https://placehold.co/600x400",
          title: "Shyamal Kumar Das Mandal"
        }
      ]
    },
    {
      title: "Resource Optimization & Benchmarking",
      images: [
        {
          src: "https://placehold.co/600x400",
          title: "Shyamal Kumar Das Mandal"
        },
        { src: "https://placehold.co/600x400", title: "Plaban Kumar Bhowmick" },
        { src: "https://placehold.co/600x400", title: "Tutan Ahmed" },
        {
          src: "https://placehold.co/600x400",
          title: "Sourangshu Bhattacharya"
        },
        { src: "https://placehold.co/600x400", title: "Kaushal Kumar Bhagat" }
      ]
    },
    {
      title: "Resource Curation & Sharing",
      images: [
        { src: "https://placehold.co/600x400", title: "Plaban Kumar Bhowmick" },
        {
          src: "https://placehold.co/600x400",
          title: "Shyamal Kumar Das Mandal"
        },
        { src: "https://placehold.co/600x400", title: "Tutan Ahmed" },
        { src: "https://placehold.co/600x400", title: "Kaushal Kumar Bhagat" },
        { src: "https://placehold.co/600x400", title: "Rajlakshmi Guha" },
        {
          src: "https://placehold.co/600x400",
          title: "Jeevanjyoti Chakraborty"
        },
        { src: "https://placehold.co/600x400", title: "Sudip Misra" },
        { src: "https://placehold.co/600x400", title: "Pawan Goyal" }
      ]
    },
    {
      title: "Innovation, Outreach & Engagement",
      images: [
        { src: "https://placehold.co/600x400", title: "Niloy Ganguly" },
        { src: "https://placehold.co/600x400", title: "Partha P. Chakrabarti" },
        { src: "https://placehold.co/600x400", title: "Suman Chakraborty" },
        { src: "https://placehold.co/600x400", title: "Tutan Ahmed" }
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col h-max w-full bg-white px-[10vw] my-10">
      <h1 className="w-full h-max text-[60px] text-primary text-center font-semibold">
        Members
      </h1>
      <div className="bottom-section w-full h-max flex my-10">
        {/* Left Sidebar */}
        <div className="h-max w-[30%] overflow-y-auto ">
          <ul className="space-y-6 font-medium">
            {MembersData.map((section, index) => (
              <li
                key={section.title}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer text-[24px] ${
                  activeIndex === index
                    ? "text-primary"
                    : "hover:text-primary-foreground"
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
                  className="w-full h-[250px] object-cover rounded-2xl"
                />
                <p className="mt-2 text-[18px] font-medium text-gray-700">
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
