"use client";

import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import { resumeAchievements } from "@/config/resume";

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="achievements" className="py-8 sm:py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6 sm:space-y-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 sm:gap-12 px-2 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            &lt;Key Achievements/&gt;
          </h2>
          <span className="h-[2px] w-full bg-gradient-to-r from-[#2e2e2e] via-purple-500/20 to-[#2e2e2e]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {resumeAchievements.map((item, index) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              className="p-5 sm:p-6 rounded-xl border border-[#2e2e2e] bg-[#1a1a1a]/50 backdrop-blur-sm hover:border-purple-500/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8c1df3] to-[#621aaf] flex items-center justify-center">
                  <FaTrophy className="text-yellow-300 text-lg" />
                </span>
                <span className="text-xs text-[#b520fe] font-semibold">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-[#ababab] text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
