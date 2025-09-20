import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTensorflow,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRadixui,
  SiFramer,
  SiPrisma,
  SiCloudinary,
  SiPostgresql,
  SiPytorch,
} from "react-icons/si";

// Projects data
const projects = [
  {
    title: "InterioAI - AI Powered Interior Designer",
    description:
      "AI-powered tool that reimagines room interiors by combining Stable Diffusion with ControlNet depth conditioning. Users can upload their room photo and generate realistic redesigns guided by custom style prompts, leveraging PyTorch, ControlNet, and depth estimation for precise spatial awareness.",
    image: "/images/interioai.png",
    tech: [
      {
        icon: SiNextdotjs,
        name: "Next.js",
        color: "bg-gray-800/20 text-gray-300",
      },
      {
        icon: SiReact,
        name: "React.js",
        color: "bg-blue-500/20 text-blue-400",
      },
      {
        icon: SiNodedotjs,
        name: "Node.js",
        color: "bg-green-500/20 text-green-400",
      },
      {
        icon: SiPytorch,
        name: "PyTorch",
        color: "bg-red-600/20 text-red-400",
      },
      {
        icon: SiCloudinary,
        name: "Cloudinary",
        color: "bg-sky-500/20 text-sky-400",
      },
      {
        icon: SiPostgresql,
        name: "PostgreSQL",
        color: "bg-blue-800/20 text-blue-300",
      },
      {
        icon: SiPrisma,
        name: "Prisma",
        color: "bg-indigo-500/20 text-indigo-400",
      },
      {
        icon: SiFramer,
        name: "Framer Motion",
        color: "bg-pink-500/20 text-pink-400",
      },
      {
        icon: SiRadixui,
        name: "shadcn/ui",
        color: "bg-purple-500/20 text-purple-400",
      },
    ],
    liveUrl: "https://ai-interior-designer-sable.vercel.app/",
    githubUrl: "https://github.com/ZainaPasha/AI-Interior-Designer",
  },
  {
    title: "Rural Reach - AI Powered Healthcare Referral System",
    description:
      "AI-powered referral system recommending the top three hospitals for rural patients based on emergency severity and resource availability. Includes an admin dashboard to manage referrals and schedule appointments.",
    image: "/images/rural_reach.png",
    tech: [
      {
        icon: SiNextdotjs,
        name: "Next.js",
        color: "bg-gray-800/20 text-gray-300",
      },
      {
        icon: SiMongodb,
        name: "MongoDB",
        color: "bg-green-700/20 text-green-300",
      },
      {
        icon: SiReact,
        name: "React.js",
        color: "bg-blue-500/20 text-blue-400",
      },
      {
        icon: SiNodedotjs,
        name: "Node.js",
        color: "bg-green-500/20 text-green-400",
      },
      {
        icon: SiTensorflow,
        name: "TensorFlow",
        color: "bg-orange-500/20 text-orange-400",
      },
    ],
    liveUrl: "https://rural-reach-zeta.vercel.app/",
    githubUrl: "https://github.com/ZainaPasha/Rural-Reach",
  },
  {
    title: "Safe Haven",
    description:
      "A landing page for a mental health tracking app, with mood tracking, journaling, and resource sharing.",
    image: "/images/safe_haven.png",
    tech: [
      {
        icon: SiReact,
        name: "React.js",
        color: "bg-blue-500/20 text-blue-400",
      },
      {
        icon: SiExpress,
        name: "Express.js",
        color: "bg-gray-600/20 text-gray-400",
      },
      {
        icon: SiNodedotjs,
        name: "Node.js",
        color: "bg-green-500/20 text-green-400",
      },
    ],
    liveUrl: "https://safe-haven-khaki.vercel.app/",
    githubUrl: "https://github.com/ZainaPasha/Safe-Haven",
  },
  {
    title: "Cube Craze Challenge",
    description:
      "A website for the smooth execution of Crescent Literary Society's Writer's Guild auditions.",
    image: "/images/cube-craze.png",
    tech: [
      {
        icon: SiHtml5,
        name: "HTML",
        color: "bg-orange-500/20 text-orange-400",
      },
      { icon: SiCss3, name: "CSS", color: "bg-blue-500/20 text-blue-400" },
      {
        icon: SiJavascript,
        name: "JavaScript",
        color: "bg-yellow-500/20 text-yellow-400",
      },
    ],
    liveUrl: "https://cube-craze-challenge.vercel.app/",
    githubUrl: "https://github.com/ZainaPasha/Cube-Craze-Challenge",
  },
  {
    title: "Tesla Website Clone",
    description:
      "A modern, responsive website inspired by Tesla's official site. Focused on sleek UI and clean layouts.",
    image: "/images/tesla_website_clone.png",
    tech: [
      {
        icon: SiHtml5,
        name: "HTML",
        color: "bg-orange-500/20 text-orange-400",
      },
      { icon: SiCss3, name: "CSS", color: "bg-blue-500/20 text-blue-400" },
      {
        icon: SiJavascript,
        name: "JavaScript",
        color: "bg-yellow-500/20 text-yellow-400",
      },
    ],
    liveUrl: "http://zainapasha.github.io/Tesla_Website_Clone/",
    githubUrl: "https://github.com/ZainaPasha/Tesla_Website_Clone",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      id="projects"
      className="py-20 px-6"
      ref={ref}
      data-testid="projects-section"
    >
      <div className="container mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            data-testid="projects-title"
          >
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="glass-card rounded-xl overflow-hidden group transition-all duration-300 
             hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 
             mx-2 h-full flex flex-col"
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden h-48 bg-gradient-to-br from-secondary to-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {project.description}
                      </p>

                      {/* Tech & Buttons pinned bottom */}
                      <div className="mt-4 space-y-6">
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`flex items-center gap-1 px-2 py-1 text-xs rounded-full shadow-sm ${tech.color}`}
                            >
                              <tech.icon className="h-3.5 w-3.5" /> {tech.name}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            className="flex-1 bg-gradient-to-r from-indigo-300 to-pink-400 text-black shadow-md 
                     hover:opacity-80 transition-all duration-300 text-sm py-2"
                            onClick={() =>
                              window.open(project.liveUrl, "_blank")
                            }
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1 border border-primary/40 text-primary hover:bg-primary/10 
                     transition-all duration-300 text-sm py-2"
                            onClick={() =>
                              window.open(project.githubUrl, "_blank")
                            }
                          >
                            <Github className="mr-2 h-4 w-4" /> GitHub
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollPrev}
              className="glass-card w-12 h-12 rounded-full p-0 text-primary hover:scale-110 transition-all duration-300 border border-primary/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-primary scale-125"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollNext}
              className="glass-card w-12 h-12 rounded-full p-0 text-primary hover:scale-110 transition-all duration-300 border border-primary/20"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* View All Projects */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button
            variant="outline"
            className="glass-card px-8 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300 border-2 border-primary/30 bg-transparent"
            onClick={() =>
              window.open("https://github.com/ZainaPasha", "_blank")
            }
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
