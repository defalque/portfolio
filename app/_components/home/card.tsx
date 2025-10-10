"use client";

import { ReactNode, useState } from "react";

import { ChevronDown } from "lucide-react";

import { LazyMotion, AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
const loadFeatures = () =>
  import("../../../lib/features").then((res) => res.default);

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Card({
  icon,
  title,
  list,
}: {
  icon: ReactNode;
  title: string;
  list: { text: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LazyMotion features={loadFeatures}>
      <m.div className="h-max rounded-md border border-gray-200 px-4 py-3 text-black/70 lg:basis-1/2 dark:border-zinc-800 dark:text-white/60">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`card-panel-${title.replace(/\s+/g, "-").toLowerCase()}`}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full cursor-pointer items-center gap-3 rounded-xs px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 dark:focus-visible:ring-orange-400"
        >
          {icon}
          <span className="text-xl font-medium md:text-2xl dark:text-white/90">
            {title}
          </span>
          <ChevronDown
            className={`ml-auto transition-discrete duration-500 dark:text-white/90 ${isOpen ? "-rotate-180" : "rotate-0"}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <m.ul
              id={`card-panel-${title.replace(/\s+/g, "-").toLowerCase()}`}
              style={{ overflow: "hidden" }}
              animate={{ height: "auto", opacity: 1 }}
              initial={{ height: 0, opacity: 1 }}
              exit={{ height: 0, opacity: 1 }}
              transition={{ duration: 0.3, type: "tween", ease: "easeOut" }}
              variants={containerVariants}
            >
              <m.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="mt-4 list-disc space-y-1 px-5 marker:text-orange-600 dark:marker:text-orange-400"
              >
                {list.map((li) => (
                  <m.li
                    key={li.text}
                    variants={itemVariants}
                    aria-label={li.text}
                  >
                    {li.text}
                  </m.li>
                ))}
              </m.div>
            </m.ul>
          )}
        </AnimatePresence>
      </m.div>
    </LazyMotion>
  );
}

export default Card;
