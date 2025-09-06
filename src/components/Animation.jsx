import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Animation({ children, id }) {
  const ref = useRef(null);

  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1, // Reduced threshold for mobile
    margin: "0px 0px -100px 0px" // Trigger earlier on mobile
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 relative"
    >
      {children}
    </motion.section>
  );
}
