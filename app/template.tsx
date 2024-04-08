"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial='hidden'
      animate='enter'
      transition={{ type: "linear" }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.main>
  );
}
