import {motion} from "motion/react";


const layers = [
  { size: 'w-14 h-14', color: 'bg-blue-900/60', delay: 0 },
  { size: 'w-20 h-20', color: 'bg-blue-800/50', delay: 0.1 },
  { size: 'w-26 h-26', color: 'bg-blue-700/40', delay: 0.2 },
  { size: 'w-32 h-32', color: 'bg-blue-600/30', delay: 0.3 },
  { size: 'w-38 h-38', color: 'bg-blue-500/25', delay: 0.4 },
  { size: 'w-44 h-44', color: 'bg-blue-400/20', delay: 0.5 },
  { size: 'w-50 h-50', color: 'bg-blue-300/15', delay: 0.6 },
  { size: 'w-56 h-56', color: 'bg-blue-200/10', delay: 0.7 },
];

export default function PulseCircle() {
  return (
    <div className="flex w-[50vw] items-center justify-center h-screen bg-white relative overflow-hidden">
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${layer.size} ${layer.color}`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.9, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop',
            delay: layer.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Center Core */}
      <motion.div
        className="w-12 h-12 bg-blue-950 rounded-full z-10 shadow-lg"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [1, 0.95, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}