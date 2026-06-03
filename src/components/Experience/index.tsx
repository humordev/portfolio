"use client";

import dynamic from "next/dynamic";
import styles from "./experience.module.css";
import { resumeExperience } from "@/config/resume";

const DynamicChrono = dynamic(
  () => import("react-chrono").then((mod) => mod.Chrono),
  {
    ssr: false,
  }
);

const experienceData = resumeExperience.map((job) => ({
  title: job.period,
  cardTitle: job.company,
  cardSubtitle: `${job.role} | ${job.location}`,
  cardDetailedText: job.highlights.join(" "),
}));

const Experience = () => {
  return (
    <div id="experience" className="py-8 sm:py-12">
      <div className="flex items-center gap-4 sm:gap-12 mb-8 px-2 sm:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          &lt;Experience/&gt;
        </h2>
        <span className="h-[2px] w-full bg-gradient-to-r from-[#2e2e2e] via-purple-500/20 to-[#2e2e2e]" />
      </div>
      <div
        className={`w-full max-w-[1200px] mx-auto [&_.timeline-controls]:!hidden [&_.timeline-main-wrapper]:!px-0 ${styles.timelineWrapper}`}
      >
        <DynamicChrono
          items={experienceData}
          mode="VERTICAL_ALTERNATING"
          disableToolbar
          cardHeight={280}
          theme={{
            primary: "#b520fe",
            secondary: "transparent",
            titleColor: "white",
            titleColorActive: "#b520fe",
            cardBgColor: "#2e2e2e50",
            cardForeColor: "white",
          }}
          classNames={{
            card: styles["teste-card"],
            title: styles["my-title"],
            cardText: styles["card-text"],
          }}
        />
      </div>
    </div>
  );
};

export default Experience;
