import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import image from "../../asset/heroBackground.jpg";
import aiImage from "../../asset/ai.jpg";
import DemoExample from "./DemoExample";

// title section
const Horizontal = () => {
  return (
    <div className="bg-white my-20">
      <HorizontalScrollCarousel />
    </div>
  );
};

// main outer component
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex flex-col h-screen items-center justify-center overflow-hidden">
        <h1 className="font-semibold w-full flex items-center justify-center text-[100px] text-primary mb-10">
          <span>Demo</span>
        </h1>
        <motion.div style={{ x }} className="flex gap-14">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const Item = card.component;

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
        <Item {...card.props} />
      </div>
    </div>
  );
};

export default Horizontal;
const videoLink = "https://www.youtube.com/embed/hJP5GqnTrNo";

const cards = [
  {
    component: DemoExample,
    props: { imgLink: image },
    id: 1
  },
  {
    component: DemoExample,
    props: { videoLink: videoLink, thumbnail: aiImage },
    id: 2
  },
  {
    component: DemoExample,
    props: {
      imgLink:
        "https://images.pexels.com/photos/8728223/pexels-photo-8728223.jpeg"
    },
    id: 3
  }
];
