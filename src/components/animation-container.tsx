"use client";

import { motion } from "framer-motion";

interface AnimationContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  reverse?: boolean;
}

export function AnimationContainer({
  children,
  className,
  delay,
  reverse,
}: AnimationContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reverse ? -30 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
