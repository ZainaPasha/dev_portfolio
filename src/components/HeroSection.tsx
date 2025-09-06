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

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900"
      data-testid="hero-section"
    >
      <div className="container mx-auto px-6 text-center z-10 relative">
        {/* Floating orbs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-indigo-400/10 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-3/4 w-20 h-20 bg-slate-300/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Orbit rings */}
          {/* Orbit rings with subtle glowing dots on alternate rings */}
{[800, 900, 1000, 1100, 1200, 1300, 1400, 1500].map((size, idx) => (
  <motion.div
    key={size}
    className="absolute top-1/2 left-1/2 rounded-full border border-white/10"
    style={{ width: size, height: size, x: "-50%", y: "-50%" }}
    animate={{ rotate: idx % 2 === 0 ? 360 : -360 }}
    transition={{
      duration: 60 + idx * 5,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {/* Only add dots to alternate rings */}
    {idx % 3 === 0 &&
      Array.from({ length: Math.floor(size / 60) }).map((_, dotIdx) => {
        const angle = (360 / (size / 60)) * dotIdx;
        const radius = size / 2;
        const radian = (angle * Math.PI) / 180;
        const left = radius + radius * Math.cos(radian);
        const top = radius + radius * Math.sin(radian);
        return (
          <motion.div
            key={dotIdx}
            className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_4px_white] opacity-50"
            style={{
              top: top,
              left: left,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
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
))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Greeting + Name */}
          <div className="space-y-2">
            <motion.p
              className="text-gray-400 text-lg tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              data-testid="hero-greeting"
            >
              Hi, this is
            </motion.p>
            <motion.h1
              className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-200 via-indigo-300 to-purple-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              data-testid="hero-name"
            >
              ZAINA PASHA
            </motion.h1>
            <div className="h-8 flex items-center justify-center mt-4">
              <motion.p
                className="text-xl md:text-2xl text-indigo-200 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                data-testid="hero-title"
              >
                {displayText}
                <span className="animate-pulse">|</span>
              </motion.p>
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            data-testid="hero-description"
          >
            Crafting innovative digital experiences through clean code and
            creative problem-solving. Passionate about building products that
            make a difference.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <Button
              className="px-8 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-400 text-white shadow-lg hover:shadow-indigo-500/30"
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
              className="px-8 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300 border-2 border-indigo-300/40 text-indigo-200 hover:border-indigo-400 hover:text-white hover:bg-indigo-900/30"
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
