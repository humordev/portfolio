"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaBriefcase, FaGraduationCap, FaTrophy } from "react-icons/fa";
import { resumeTimeline } from "@/config/resume";

const timelineIcons = {
  education: <FaGraduationCap className="text-blue-400" />,
  work: <FaBriefcase className="text-green-400" />,
  achievement: <FaTrophy className="text-yellow-400" />,
};

const timelineData = resumeTimeline.map((event) => ({
  ...event,
  icon: timelineIcons[event.category],
}));

// Filter categories for the timeline
const categories = [
  { name: "all", label: "All Events", icon: null },
  { name: "work", label: "Work Experience", icon: <FaBriefcase /> },
  { name: "education", label: "Education", icon: <FaGraduationCap /> },
  { name: "achievement", label: "Key Achievements", icon: <FaTrophy /> },
];

// Timeline event component
const TimelineEvent = ({
  event,
  isActive,
  onClick,
}: {
  event: {
    id: number;
    date: string;
    title: string;
    description: string;
    category: string;
    icon: JSX.Element;
  };
  isActive: boolean;
  onClick: (id: number) => void;
}) => {
  // Memoize the connector and positioning elements to prevent re-renders
  const eventElements = useMemo(() => {
    return {
      connector: (
        <div className="absolute top-0 -mt-5 left-1/2 transform -translate-x-1/2 h-5 w-px bg-gradient-to-b from-transparent to-purple-500"></div>
      ),
      dateTag: (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#8c1df3] text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
          {event.date}
        </div>
      ),
    };
  }, [event.date]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`relative p-3 sm:p-5 lg:p-6 mb-6 sm:mb-8 rounded-lg border ${
        isActive
          ? "border-purple-500 bg-gradient-to-br from-purple-900/30 to-pink-900/30"
          : "border-[#2e2e2e] bg-[#1a1a1a]/50"
      } backdrop-blur-sm transition-all duration-300 hover:border-purple-500/70`}
      onClick={() => onClick(event.id)}
    >
      {/* Timeline connector */}
      {eventElements.connector}

      {/* Date tag */}
      {eventElements.dateTag}

      {/* Event icon */}
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center ${
          isActive ? "bg-purple-500" : "bg-[#2e2e2e]"
        } transition-all duration-300`}
      >
        <span className="text-base sm:text-xl">{event.icon}</span>
      </div>

      {/* Event content */}
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 text-center">
        {event.title}
      </h3>
      <p className="text-[#ababab] text-sm sm:text-base text-center leading-relaxed">
        {event.description}
      </p>
    </motion.div>
  );
};

const InteractiveTimeline = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeEventId, setActiveEventId] = useState<number | null>(null);
  const [filteredEvents, setFilteredEvents] = useState(timelineData);
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);

  // Memoize the timeline data to prevent unnecessary re-creation
  const memoizedTimelineData = useMemo(() => timelineData, []);

  // Filter timeline events by category and key milestones
  useEffect(() => {
    let filtered = memoizedTimelineData;

    // First filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((event) => event.category === activeCategory);
    }

    // Then filter by key milestones if not expanded
    if (!expanded) {
      filtered = filtered.filter((event) => event.isKeyMilestone);
    }

    setFilteredEvents(filtered);
    setActiveEventId(null);
  }, [activeCategory, memoizedTimelineData, expanded]);

  // Calculate visible events - show all filtered events
  const visibleEvents = useMemo(() => {
    return filteredEvents;
  }, [filteredEvents]);

  // Check if there are more events to show
  const hasMoreEvents = useMemo(() => {
    if (expanded) return false;
    const allEvents =
      activeCategory === "all"
        ? memoizedTimelineData
        : memoizedTimelineData.filter(
            (event) => event.category === activeCategory
          );
    return allEvents.length > filteredEvents.length;
  }, [activeCategory, expanded, filteredEvents.length, memoizedTimelineData]);

  // Memoize the categories to prevent re-renders
  const memoizedCategories = useMemo(() => categories, []);

  // Container animation variants - memoize to prevent regeneration
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          staggerChildren: 0.1,
        },
      },
    }),
    []
  );

  // Memoize the title animation variants
  const titleVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }),
    []
  );

  // Memoize the future section animation variants
  const futureVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { delay: 0.5 } },
    }),
    []
  );

  return (
    <motion.section
      id="journey"
      className="container mx-auto px-0 sm:px-6 lg:px-8 py-4 sm:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      ref={containerRef}
    >
      <motion.div
        variants={containerVariants}
        className="space-y-4 sm:space-y-12"
      >
        {/* Title section */}
        <motion.div
          className="flex items-center gap-2 sm:gap-12 px-2 sm:px-0"
          variants={titleVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            &lt;Career Journey/&gt;
          </h2>
          <span className="h-[2px] w-full bg-gradient-to-r from-[#2e2e2e] via-purple-500/20 to-[#2e2e2e]" />
        </motion.div>

        {/* Category filter - Improved mobile design */}
        <div className="flex flex-wrap gap-1.5 sm:gap-3 justify-center px-2 sm:px-0 mx-auto max-w-xl mb-8 sm:mb-12">
          {memoizedCategories.map((category) => (
            <motion.button
              key={category.name}
              className={`px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-2
                transition-all duration-300 text-xs sm:text-base
                ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-[#8c1df3] to-[#621aaf] text-white shadow-lg shadow-purple-500/20"
                    : "bg-[#2e2e2e] text-white/70 hover:text-white"
                }`}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon && (
                <span className="text-sm sm:text-base">{category.icon}</span>
              )}
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Timeline - Improved for mobile */}
        <div className="relative mt-14 sm:mt-20 px-2 sm:px-0">
          {/* Timeline center line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#8c1df3] to-[#621aaf]/30"></div>

          {/* Event cards - Adjusted for better mobile layout */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative"
            layout
            transition={{
              layout: { duration: 0.3, ease: "easeInOut" },
              opacity: { duration: 0.2 },
            }}
          >
            {visibleEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
              >
                <TimelineEvent
                  event={event}
                  isActive={activeEventId === event.id}
                  onClick={setActiveEventId}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* See more/less button - Enhanced for mobile */}
          {hasMoreEvents && (
            <div className="flex justify-center mt-6 sm:mt-8">
              <motion.button
                onClick={() => setExpanded(!expanded)}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#2e2e2e] text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-[#8c1df3] hover:to-[#621aaf] transition-all duration-300 font-medium flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout="position"
                transition={{
                  layout: { duration: 0.2, ease: "easeInOut" },
                }}
              >
                {expanded ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Show Key Milestones
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Show All Events
                  </>
                )}
              </motion.button>
            </div>
          )}
        </div>

        {/* Future direction */}
        <motion.div className="px-2 sm:px-0 mt-8" variants={futureVariants}>
          <div className="p-6 border border-[#2e2e2e] bg-[#1a1a1a]/50 backdrop-blur-sm rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-[#8c1df3] to-[#621aaf] text-transparent bg-clip-text">
              Looking Forward
            </h3>
            <p className="text-[#ababab] text-center max-w-3xl mx-auto">
              I&apos;m focused on building secure, scalable SaaS and AI-powered platforms—from robust APIs and multi-tenant cloud architectures to LLM integrations that ship as reliable production features. My goal is to keep delivering maintainable systems with strong ownership, clear collaboration, and measurable business impact in remote, product-driven teams.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default InteractiveTimeline;
