import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiPython,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiDocker,
  SiJavascript,
} from "react-icons/si";
import { FaBrain, FaChartLine } from "react-icons/fa";

const skills = [
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiPython, name: "Python", color: "text-blue-300" },
  { icon: SiReact, name: "React", color: "text-blue-400" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-gray-200" },
  { icon: SiTailwindcss, name: "TailwindCSS", color: "text-cyan-400" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-400" },
  { icon: SiExpress, name: "Express", color: "text-gray-400" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-300" },
  { icon: SiMysql, name: "MySQL", color: "text-blue-500" },
  { icon: SiSupabase, name: "Supabase", color: "text-emerald-400" },
  { icon: SiTensorflow, name: "TensorFlow", color: "text-orange-400" },
  { icon: FaBrain, name: "LangChain", color: "text-purple-400" },
  { icon: SiNumpy, name: "NumPy", color: "text-indigo-400" },
  { icon: SiPandas, name: "Pandas", color: "text-white" },
  { icon: FaChartLine, name: "Matplotlib", color: "text-pink-400" },
  { icon: SiDocker, name: "Docker", color: "text-blue-500" },
];

// duplicate list to create seamless infinite scroll effect
const loopedSkills = [...skills, ...skills];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [typingText, setTypingText] = useState("");

  const fullAboutText = `With 3+ years in software development and a passion for product development and AI, 
  I build user-centric web and AI systems that turn ideas into real-world value.`;

  useEffect(() => {
    if (isInView) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullAboutText.length) {
          setTypingText(fullAboutText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a passionate developer who loves creating innovative solutions
            and bringing ideas to life through code.
          </p>
        </motion.div>

        {/* About + Terminal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Typing About Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 rounded-xl p-8 border border-primary/20"
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">About Me</h3>
            <p className="text-foreground/90 leading-relaxed text-lg min-h-[120px]">
              {typingText}
              <span className="animate-pulse text-primary">|</span>
            </p>
            <div className="flex gap-3 mt-6">
              {["Creative", "Innovative", "Problem Solver"].map((trait, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary border border-primary/20"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Terminal Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="glass-card rounded-xl p-6 border border-border/50"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-muted-foreground font-mono">
                ~/portfolio
              </span>
            </div>
            <div className="bg-secondary/80 rounded-lg p-4 font-mono text-xs space-y-1">
              <div className="text-green-400">$ whoami</div>
              <div className="text-white">zainapasha</div>
              <div className="text-green-400">$ cat skills.json</div>
              <div className="text-blue-300">&#123;</div>
              <div className="text-yellow-300 ml-2">
                "frontend": ["React", "Next.js", "TailwindCSS"],
              </div>
              <div className="text-yellow-300 ml-2">
                "backend": ["Node.js", "Express", "Python"],
              </div>
              <div className="text-yellow-300 ml-2">
                "ai_ml": ["TensorFlow", "LangChain", "LLMs", "Agents"],
              </div>
              <div className="text-yellow-300 ml-2">
                "focus": "Product Development & AI Systems"
              </div>
              <div className="text-blue-300">&#125;</div>
            </div>
          </motion.div>
        </div>

        {/* Skills Slider (auto-scrolling) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="glass-card rounded-xl p-8 mt-12 border border-border/40 relative overflow-hidden"
        >
          <h4 className="text-xl font-semibold text-gradient text-center mb-8">
            Tech Stack & Skills
          </h4>

          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {loopedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-28 h-28 flex flex-col items-center justify-center rounded-lg bg-secondary/40 border border-border/50 hover:border-primary/50 transition hover:scale-110"
              >
                <skill.icon className={`text-4xl ${skill.color} mb-2`} />
                <span className="text-sm text-foreground/80">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
