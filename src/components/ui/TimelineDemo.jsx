import React, { useState } from "react";
import BulletPoint from "../../asset/capabilities/bullet-point.png";
import { Timeline } from "./timeline";
import Pedagogy01 from "../../asset/capabilities/pedagogy01.jpg";
import Pedagogy02 from "../../asset/capabilities/pedagogy02.jpg";
import contentCreation01 from "../../asset/capabilities/contentCreation01.jpg";
import contentCreation02 from "../../asset/capabilities/contentCreation02.jpg";
import curriculum01 from "../../asset/capabilities/curriculum01.jpg";
import curriculum02 from "../../asset/capabilities/curriculum02.jpg";
import contentDelivery01 from "../../asset/capabilities/contentDelivery01.jpg";
import contentDelivery02 from "../../asset/capabilities/contentDelivery02.jpg";
import teacherTrining01 from "../../asset/capabilities/teacherTraining01.jpg";
import teacherTrining02 from "../../asset/capabilities/teacherTraining02.jpg";
import educationSld01 from "../../asset/capabilities/educationSld01.jpg";
import educationSld02 from "../../asset/capabilities/educationSld02.jpg";
import educationCenter01 from "../../asset/capabilities/educationCenter01.jpg";
import educationCenter02 from "../../asset/capabilities/educationCenter02.jpg";
import ImageModal from "./ImageModal";

const pedagogy = [
  "Developed the e-Shikshan tool – an open-source, web-based Pedagogy Framework Tool.",
  "Enables designing, reviewing, and monitoring of Outcome-Based Curriculum.",
  "Project valued at ₹16 crore, highlighting its national importance.",
  "Focuses on diverse classes, intellectual calibers, and eLearning-based research.",
  "Includes the Empowering Educators Program at IIT Kharagpur, aimed at upskilling faculty and improving teaching quality."
];

const contentCreation = [
  "Emphasizes technology integration in education through collaborative initiatives.",
  "Supported by the National Focus Group on Technology in Education.",
  "Collaboration includes NCERT, IIT Kharagpur, and education experts from various institutions.",
  "Ensures content is pedagogically sound and tailored for modern educational needs.",
  "Aligns digital tools and methodologies with academic content for impactful learning."
];

const curriculum = [
  "Based on a learner-centric design framework focused on outcome-based objectives.",
  "Provides structured course modules with clearly defined learning goals.",
  "Utilizes tools to define and assess course-level objectives and outcomes.",
  "Conducted 500+ training programs nationwide.",
  "Focused on supporting institutions with NBA and NAAC Accreditation processes."
];

const contentDelivery = [
  "12.7 crore+ digital resources available through the National Digital Library of India (NDLI).",
  "Content sourced from 450+ providers, including 6.5 lakh licensed resources.",
  "Supports search in 14 Indian languages and content in 39 Indian languages.",
  "94.25 lakh+ registered users with 4.25 lakh+ daily views.",
  "6,500+ NDLI Clubs established across India.",
  "Remote and cloud services provided to 180+ institutions.",
  "36 institutions hosted and 150+ supported through IDR assistance.",
  "33 training workshops conducted for 3,000+ librarians.",
  "Regular webinars, talks, and training sessions conducted.",
  "30+ full-time staff ensure continuous content updates and support.",
  "Organized international events with 300+ global participants."
];

const teacherTraining = [
  "Trained over 10,000 faculty members across NITs, IIITs, and private engineering colleges in outcome-based education and accreditation.",
  "Delivered training in both online and offline modes for effective teaching practices.",
  "AICTE's AI Initiative supports curriculum development and equips teachers to integrate AI into their classrooms.",
  "INAE CEEE enhances engineering education through academic leadership and pedagogical excellence.",
  "T10KT (Talk to 10K Teachers) empowers teachers through interactive, technology-enabled training sessions.",
  "Teaching Learning Centre at IIT Kharagpur, under PMMMNMTT, conducts low-cost science workshops.",
  "Trained 5,000+ teachers in inquiry-based pedagogy using 200+ learning materials.",
  "Reached teachers across West Bengal, Odisha, and Tripura."
];

const education_in_sld = [
  "Communication Empowerment Laboratory (CEL)",
  "Capacity building for specific learning disabilities",
  "Co-develop affordable, assistive learning technologies",
  "Sparsha system for visually impaired students"
];

const education_center = [
  "CTLVS develops innovative pedagogy and digital content",
  "Uses AR/VR for education and skill development",
  "CoE-IKS promotes traditional knowledge in modern learning",
  "DIY Lab enables students to build, design, and 3D-print"
];

export function TimeLineDemo() {
  const [selectedImage, setSelectedImage] = useState(null);

  const renderImage = (src, alt) => (
    <img
      src={src}
      alt={alt}
      width={500}
      height={500}
      className="h-auto max-[450px]:h-fit w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer"
      onClick={() => setSelectedImage({ src, alt })}
    />
  );

  const data = [
    {
      title: "Pedagogy",
      content: (
        <div>
          <div className="mb-8 text-[18px] font-medium leading-9">
            {pedagogy.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <img src={BulletPoint} alt="icon" className="w-5 h-5 mt-1" />
                <span className="leading-[1.7]">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 max-[450px]:grid-cols-1">
            {renderImage(Pedagogy01, "Pedagogy Image 1")}
            {renderImage(Pedagogy02, "Pedagogy Image 2")}
          </div>
        </div>
      )
    },
    {
      title: "Content Creation",
      content: (
        <div>
          <div className="mb-8 text-[18px] font-medium leading-9">
            {contentCreation.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <img src={BulletPoint} alt="icon" className="w-5 h-5 mt-1" />
                <span className="leading-[1.7]">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 max-[450px]:grid-cols-1">
            {renderImage(contentCreation01, "Content Creation Image 1")}
            {renderImage(contentCreation02, "Content Creation Image 2")}
          </div>
        </div>
      )
    },
    {
      title: "Curriculum & Accreditation",
      content: (
        <div>
          <div className="mb-8 text-[18px] font-medium leading-9">
            {curriculum.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <img src={BulletPoint} alt="icon" className="w-5 h-5 mt-1" />
                <span className="leading-[1.7]">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 max-[450px]:grid-cols-1">
            {renderImage(curriculum01, "Curriculum Image 1")}
            {renderImage(curriculum02, "Curriculum Image 2")}
          </div>
        </div>
      )
    },
    {
      title: "Content Delivery",
      content: (
        <div>
          <div className="mb-8 text-[18px] font-medium leading-9">
            {contentDelivery.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <img src={BulletPoint} alt="icon" className="w-5 h-5 mt-1" />
                <span className="leading-[1.7]">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 max-[450px]:grid-cols-1">
            {renderImage(contentDelivery01, "Content Delivery Image 1")}
            {renderImage(contentDelivery02, "Content Delivery Image 2")}
          </div>
        </div>
      )
    },
    {
      title: "Teacher Training",
      content: (
        <div>
          <div className="mb-8 text-[18px] font-medium leading-9">
            {teacherTraining.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <img src={BulletPoint} alt="icon" className="w-5 h-5 mt-1" />
                <span className="leading-[1.7]">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 max-[450px]:grid-cols-1">
            {renderImage(teacherTrining01, "Teacher Training Image 1")}
            {renderImage(teacherTrining02, "Teacher Training Image 2")}
          </div>
        </div>
      )
    },
    {
      title: "Education in SLD",
      content: (
        <div>
          <div className="mb-8 text-[18px] font-medium leading-9">
            {education_in_sld.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <img src={BulletPoint} alt="icon" className="w-5 h-5 mt-1" />
                <span className="leading-[1.7]">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 max-[450px]:grid-cols-1">
            {renderImage(educationSld01, "Education in SLD Image 1")}
            {renderImage(educationSld02, "Education in SLD Image 2")}
          </div>
        </div>
      )
    },
    {
      title: "Education Center",
      content: (
        <div>
          <div className="mb-8 text-[18px] font-medium leading-9">
            {education_center.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <img src={BulletPoint} alt="icon" className="w-5 h-5 mt-1" />
                <span className="leading-[1.7]">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 max-[450px]:grid-cols-1">
            {renderImage(educationCenter01, "Education Center Image 1")}
            {renderImage(educationCenter02, "Education Center Image 2")}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src}
        alt={selectedImage?.alt}
      />
    </div>
  );
}
