import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import image from "../../asset/heroBackground.jpg";
import aiImage from "../../asset/ai.jpg";
import DemoExample from "./DemoExample";

// title section
const Horizontal = ({cards}) => {

  return (
    <div className="bg-white mb-30 mt-30 max-[1025px]:m-0 max-[1025px]:hidden">
      <HorizontalScrollCarousel cards={cards}/>
    </div>
  );
};

// main outer component
const HorizontalScrollCarousel = ({cards}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex flex-col h-max items-center justify-center overflow-hidden">
        <h1 className="font-bold w-full h-max flex items-center justify-center text-[60px] text-primary mb-10">
          <h1>Demo</h1>
        </h1>
        <motion.div style={{ x }} className="flex gap-14 ">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[900px] overflow-hidden rounded-xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute w-full h-full inset-0 z-10 flex gap-2 rounded-xl ">
        <DemoExample {...card.props} />
      </div>
    </div>
  );
};

export default Horizontal;

// -------------------------------------------------------------------
// const videoLink = "https://www.youtube.com/embed/hJP5GqnTrNo";
// const cards = [
//   {
//     component: DemoExample,
//     props: {
//       imgLink: bloomSphere,
//       title: "BloomSphere AI",
//       desc: "Bloomsphere AI is an AI-powered educational platform that leverages Bloom’s Taxonomy to automate personalised question generation, assessment creation, and question paper analysis. It helps educators design higher-order thinking assessments, provides real-time feedback, and supports large-scale adoption, promoting conceptual understanding over rote learning.",
//       link: "https://bloomfront-production.up.railway.app/"
//     },
//     id: 1
//   },
//   // {
//   //   component: DemoExample,
//   //   props: {
//   //     videoLink: videoLink,
//   //     thumbnail: aiImage,
//   //     title: "Ai Demo",
//   //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum nobis explicabo possimus minus temporibus ipsam mollitia molestiae, nemo eius."
//   //   },
//   //   id: 2
//   // },
//   // {
//   //   component: DemoExample,
//   //   props: {
//   //     imgLink:
//   //       "https://images.pexels.com/photos/8728223/pexels-photo-8728223.jpeg",
//   //     title: "Ai Demo",
//   //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum nobis explicabo possimus minus temporibus ipsam mollitia molestiae, nemo eius."
//   //   },
//   //   id: 3
//   // }
// ];
