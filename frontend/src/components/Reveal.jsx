import React, { useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControl = useAnimation();
    const slideControl=useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControl.start("visible");
        }
    }, [isInView, mainControl]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControl}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
  variants={{
    hidden: { left: 0 },
    visible: { left: "100%" },
  }}
  initial="hidden"
  animate={slideControl}
  transition={{ duration: 0.5, ease: "easeIn" }}
  style={{
    position: "absolute",
    top: 4,
    bottom: 4,
    left: 0,
    right: 0,
    background: "var(--brand)",
    zIndex: 20,
  }}
/>

        </div>
    );
};

export default Reveal;
