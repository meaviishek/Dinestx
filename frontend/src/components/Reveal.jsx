import React, { useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from "framer-motion";

const Reveal = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControl = useAnimation();
    const slideControl = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControl.start("visible");
            slideControl.start("visible");
        }
    }, [isInView, mainControl, slideControl]);

    return (
        <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
            {/* Main Content Animation */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControl}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ position: "relative", zIndex: 10 }}
            >
                {children}
            </motion.div>

            {/* Sliding Overlay Animation */}
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
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "var(--brand)", // Adjust the brand color variable if necessary
                    zIndex: 20,
                }}
            />
        </div>
    );
};

export default Reveal;
