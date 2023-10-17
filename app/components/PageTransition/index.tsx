"use client";

import React, { forwardRef } from "react";
import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type PageTransitionProps = HTMLMotionProps<"div">;

export default function PageTransition({
  children,
  ...rest
}: PageTransitionProps) {
  const pathname = usePathname();
  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };

  const transition = { duration: 0.2, ease: "easeInOut" };

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      // onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.main
        key={pathname}
        initial={onTheRight}
        animate={inTheCenter}
        exit={onTheLeft}
        transition={transition}
        {...rest}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
