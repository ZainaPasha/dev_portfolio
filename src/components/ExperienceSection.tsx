import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "Jan 2025 - Jul 2025",
    title: "Programmer Analyst Intern",
    company: "Cognizant Technology Solutions",
    description:
      "Built a full-stack e-commerce app with an integrated admin system using the MERN stack. Implemented JWT auth, responsive UI, category filtering, toast notifications, and OTP-based order tracking.",
  },
  {
    period: "Jun 2024 - Jul 2024",
    title: "Software Developer Intern",
    company: "BlueStock Fintech",
    description:
      "Developed an IPO web app/API with Django + PostgreSQL, boosting client engagement by 25% and user satisfaction by 40%. Streamlined version control with Git, GitHub, and Notion, reducing integration issues by 30%.",
  },
  {
    period: "Jul 2023 - Aug 2023",
    title: "Industrial Intern",
    company: "SAI-TECOPS Innovation and Development",
    description:
      "Achieved 98% accuracy in heart attack risk prediction using Naive Bayes with iterative optimization. Performed data analysis to identify early risk factors.",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="experience"
      className="relative py-20 px-6 overflow-hidden text-white bg-gray-950"
      ref={ref}
      data-testid="experience-section"
    >
      {/* Dark animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(88,28,135,0.3) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(37,99,235,0.3) 0%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full"
            style={{
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)",
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.8,
            }}
            animate={{
              y: ["0%", "100%", "0%"],
              x: ["0%", "60%", "0%"],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto max-w-4xl">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-300 text-lg">
            My professional journey and key milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <motion.div
            className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-indigo-400 via-purple-400 to-white rounded-full shadow-[0_0_15px_rgba(180,150,255,0.6)]"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {/* Timeline items */}
          <div className="flex flex-col space-y-16 ml-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.3, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 flex items-center justify-center">
                  <motion.div
                    className="relative w-5 h-5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 shadow-[0_0_15px_rgba(150,100,255,0.9)]"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: i * 0.3 }}
                  >
                    <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                  </motion.div>
                </div>

                {/* Experience card */}
                <motion.div
                  className="ml-8 glass-card rounded-xl p-6 border border-white/20 bg-black/40 backdrop-blur-md hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
                  whileHover={{ y: -3 }}
                >
                  <div className="space-y-2">
                    <div className="text-sm text-gray-400">{exp.period}</div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-gray-200">
                      {exp.company}
                    </h4>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
