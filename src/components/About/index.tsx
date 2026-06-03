"use client";

import Skills from "../Skills";
import { motion } from "framer-motion";
import TechStackVisualization from "./TechStackVisualization";
import { resumeSummary } from "@/config/resume";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      className="container mx-auto px-0 sm:px-6 lg:px-8 py-4 sm:py-16 lg:py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4 sm:space-y-12"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 sm:gap-12 px-2 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            &lt;About Me/&gt;
          </h2>
          <span className="h-[2px] w-full bg-gradient-to-r from-[#2e2e2e] via-purple-500/20 to-[#2e2e2e]" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-3 sm:gap-8 lg:gap-12">
          <motion.div
            variants={itemVariants}
            className="flex-1 space-y-3 sm:space-y-6 px-2 sm:px-0"
          >
            {resumeSummary.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex-1">
            <Skills />
            <TechStackVisualization />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
