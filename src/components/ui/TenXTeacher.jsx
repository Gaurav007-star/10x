import background from "../../asset/tenXicon/background.png";

import badgeIcon from "../../asset/tenXicon/badge.png";
import brainIcon from "../../asset/tenXicon/brain.png";
import bulbIcon from "../../asset/tenXicon/bulb.png";
import chainIcon from "../../asset/tenXicon/chain.png";
import clockIcon from "../../asset/tenXicon/clock.png";
import starIcon from "../../asset/tenXicon/star.png";
import teamIcon from "../../asset/tenXicon/team.png";
import timeIcon from "../../asset/tenXicon/time.png";
import btriangleIcon from "../../asset/tenXicon/triangle.png";
import userIcon from "../../asset/tenXicon/user.png";

export default function TenXTeacher() {
  const icons = [
    clockIcon,     // top center
    starIcon,      // top right
    bulbIcon,      // right upper
    chainIcon,     // right middle
    teamIcon,      // right lower
    btriangleIcon, // bottom center
    brainIcon,     // left lower
    badgeIcon,     // left middle
    timeIcon,      // left upper
    userIcon       // top left
  ];

  return (
    <div className="flex relative justify-center items-center h-screen w-full bg-white">
      {/* Background image */}
      <img
        src={background}
        alt="main-background"
        className="absolute top-0 left-0 w-full h-full object-contain"
      />

      {/* Icon Ring */}
      <div className="relative w-[500px] h-[500px]">
        {icons.map((icon, i) => {
          const angleOffset = -Math.PI / 2; // start from top
          const angle = (i / icons.length) * 2 * Math.PI + angleOffset;
          const radius = 200; // distance from center to icon
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={i}
              className="absolute w-[60px] h-[60px] p-5 flex items-center bg-primary rounded-full justify-center"
              style={{
                top: `calc(50% + ${y}px - 24px)`,
                left: `calc(50% + ${x}px - 24px)`
              }}
            >
              <img
                src={icon}
                alt={`icon-${i}`}
                className="w-fit h-auto object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
