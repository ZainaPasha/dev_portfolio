import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      id="contact"
      className="relative py-24 px-6 text-white overflow-hidden bg-gray-900"
      ref={ref}
      data-testid="contact-section"
    >
      {/* Bubble background */}
      {/* Bubble background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            style={{
              width: `${40 + Math.random() * 80}px`, // 40px – 120px
              height: `${40 + Math.random() * 80}px`,
              backgroundColor: ["#6366F1", "#8B5CF6", "#06B6D4"][i % 3], // indigo, purple, cyan
              opacity: Math.random() * 0.4 + 0.3, // 0.3 – 0.7
              filter: "blur(10px)",
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
            }}
            animate={{
              y: -200,
              opacity: [0.6, 0.9, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 15, // slower drift
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto max-w-4xl text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent leading-tight pb-1"
            data-testid="contact-title"
          >
            Let’s Build Something Amazing!
          </h2>
          <p
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            data-testid="contact-description"
          >
            Have an idea in mind? I'd love to hear from you and explore how we
            can make it real.
          </p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Get in Touch */}
            <Button
              className="px-10 py-5 rounded-full font-semibold text-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition-all duration-300"
              onClick={() =>
                window.open("mailto:zaina.bint.pasha@gmail.com", "_blank")
              }
              data-testid="button-get-in-touch"
            >
              <Mail className="mr-3 h-5 w-5" />
              Get in Touch
            </Button>

            {/* LinkedIn */}
            <Button
              variant="outline"
              className="px-10 py-5 rounded-full font-semibold text-lg 
             border-2 border-[#0A66C2] text-[#0A66C2]
             hover:bg-[#0A66C2] hover:text-white 
             hover:scale-105 hover:shadow-lg hover:shadow-[#0A66C2]/40 
             transition-all duration-500"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/zaina-pasha-34a875227/",
                  "_blank"
                )
              }
              data-testid="button-connect-linkedin"
            >
              <Linkedin className="mr-3 h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
