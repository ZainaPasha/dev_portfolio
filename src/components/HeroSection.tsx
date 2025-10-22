import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Developer & Product Creator";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Compact, balanced spacing between rings
  const ringConfigs = {
    sm: [400, 520, 640, 760, 880],
    md: [600, 750, 900, 1050, 1200, 1350],
    lg: [800, 950, 1100, 1250, 1400, 1550, 1700],
  };

  const getRingSizes = () => {
    if (window.innerWidth < 640) return ringConfigs.sm;
    if (window.innerWidth < 1024) return ringConfigs.md;
    return ringConfigs.lg;
  };

  const [ringSizes, setRingSizes] = useState<number[]>(getRingSizes());

  useEffect(() => {
    const handleResize = () => setRingSizes(getRingSizes());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900"
    >
      <div className="relative z-10 w-full max-w-6xl text-center">
        {/* Animated Rings */}
        <div className="absolute inset-0 -z-10">
          {ringSizes.map((size, idx) => {
            const hasDots = idx % 3 === 0;
            const rotateClockwise = idx % 2 === 0;
            const dotCount = Math.floor(size / 55); // balanced density
            return (
              <motion.div
                key={size}
                className="absolute top-1/2 left-1/2 rounded-full border border-white/10"
                style={{
                  width: size,
                  height: size,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{ rotate: rotateClockwise ? 360 : -360 }}
                transition={{
                  duration: 65 + idx * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {hasDots &&
                  Array.from({ length: dotCount }).map((_, dotIdx) => {
                    const angle = (360 / dotCount) * dotIdx;
                    const radian = (angle * Math.PI) / 180;

                    // Centered dots exactly on ring path
                    const leftPct = 50 + 50 * Math.cos(radian);
                    const topPct = 50 + 50 * Math.sin(radian);

                    return (
                      <motion.div
                        key={dotIdx}
                        className="absolute bg-white rounded-full shadow-[0_0_6px_white]"
                        style={{
                          top: `${topPct}%`,
                          left: `${leftPct}%`,
                          translateX: "-50%",
                          translateY: "-50%",
                          width: "clamp(5px, 0.7vw, 12px)",
                          height: "clamp(5px, 0.7vw, 12px)",
                          opacity: 0.7,
                        }}
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: Math.random() * 2,
                        }}
                      />
                    );
                  })}
              </motion.div>
            );
          })}
        </div>

        {/* Text Content */}
        <motion.div
          className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, this is
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-200 via-indigo-300 to-purple-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            ZAINA PASHA
          </motion.h1>

          <div className="h-6 sm:h-8 md:h-10 flex items-center justify-center mt-2 sm:mt-4">
            <motion.p
              className="text-sm sm:text-lg md:text-xl lg:text-2xl text-indigo-200 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </motion.p>
          </div>

          <motion.p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Crafting innovative digital experiences through clean code and creative problem-solving.
            Passionate about building products that make a difference.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 justify-center items-center mt-4 sm:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <Button
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-medium hover:scale-105 transition-all duration-300 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-400 text-white shadow-lg hover:shadow-indigo-500/30"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Projects
            </Button>

            <Button
              variant="outline"
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-medium hover:scale-105 transition-all duration-300 border-2 border-indigo-300/40 text-indigo-200 hover:border-indigo-400 hover:text-white hover:bg-indigo-900/30"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let’s Connect
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
