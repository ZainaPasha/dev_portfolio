import { motion } from "framer-motion";
import { FaBrain, FaRocket, FaRobot, FaCogs, FaChartLine, FaLightbulb } from "react-icons/fa";

const buzzwords = [
  { icon: FaBrain, text: "AI Systems" },
  { icon: FaLightbulb, text: "User-Centric Design" },
  { icon: FaRobot, text: "LLM Apps" },
  { icon: FaRocket, text: "Scalable Products" },
  { icon: FaCogs, text: "Automation" },
  { icon: FaChartLine, text: "Data-Driven Insights" },
];

export default function AIBuzzTape() {
  return (
    <section className="py-10 relative overflow-hidden" data-testid="ai-buzzwords-tape">
      <div className="relative">
        {/* Futuristic Tape edges */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/40 via-primary/40 to-accent/40"></div>

        {/* Main Scrolling Content */}
        <div className="flex items-center whitespace-nowrap animate-slide">
          {/* First set */}
          <div className="flex items-center space-x-16 px-12">
            {buzzwords.map((item, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center space-x-3 text-lg font-semibold text-foreground/90 hover:text-primary transition-colors duration-300"
              >
                <item.icon className="text-primary text-xl drop-shadow-md" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Duplicate set for infinite loop */}
          <div className="flex items-center space-x-16 px-12">
            {buzzwords.map((item, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center space-x-3 text-lg font-semibold text-foreground/90 hover:text-accent transition-colors duration-300"
              >
                <item.icon className="text-accent text-xl drop-shadow-md" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
