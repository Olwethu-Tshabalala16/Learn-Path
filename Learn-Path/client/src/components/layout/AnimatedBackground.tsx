import { motion } from "framer-motion";
import { BookOpen, GraduationCap, PenTool, Lightbulb, Globe, Zap } from "lucide-react";

export function AnimatedBackground() {
  const icons = [
    { Icon: BookOpen, top: "10%", left: "5%", delay: 0, duration: 8 },
    { Icon: GraduationCap, top: "20%", left: "85%", delay: 1, duration: 10 },
    { Icon: PenTool, top: "60%", left: "10%", delay: 2, duration: 9 },
    { Icon: Lightbulb, top: "15%", left: "50%", delay: 0.5, duration: 11 },
    { Icon: Globe, top: "70%", left: "80%", delay: 1.5, duration: 12 },
    { Icon: Zap, top: "40%", left: "20%", delay: 2.5, duration: 10 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-primary/5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating icons */}
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.Icon
            className="w-12 h-12 text-primary/20"
            strokeWidth={1.5}
          />
        </motion.div>
      ))}

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-secondary/20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large blurred shapes for depth */}
      <motion.div
        className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4 opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-[500px] w-[500px] rounded-full bg-primary blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 translate-y-1/4 opacity-10"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-[500px] w-[500px] rounded-full bg-secondary blur-3xl" />
      </motion.div>
    </div>
  );
}
