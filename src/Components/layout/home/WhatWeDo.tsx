import "../../../assets/css/whatwedo.css";
import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import { motion } from "framer-motion";
const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const mainControlsLeft = useAnimation();
  const mainControlsP = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      mainControlsLeft.start("visible");
      mainControlsP.start("visible");
    }
  }, [isInView]);
  return (
    <div className="wwd d-flex justify-content-center align-items-center gap-5">
      <div
        ref={ref}
        className="w-50 border d-flex justify-content-center align-items-center wwdbg"
      ></div>
      <div className="why w-50 gap-3">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -350, x: 0 },
            visible: { opacity: 1, y: 0, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ ease: "easeOut", duration: 0.75, delay: 0.5 }}
          id="title"
        >
          Why <span id="business">FarmHub?</span>
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 200, x: 0 },
            visible: { opacity: 1, y: 0, x: 0 },
          }}
          initial="hidden"
          animate={mainControlsP}
          transition={{ ease: "easeOut", duration: 0.75, delay: 1 }}
        >
          Welcome to Farmhub, a revolutionary platform designed to prioritize
          farmers and transform the agricultural landscape. At Farmhub, we
          believe that farmers are the backbone of our societies, and their
          success is paramount to building a sustainable future. We are
          committed to empowering farmers to achieve maximum profits and
          simplify the distribution of their products, ensuring their growth and
          prosperity.
        </motion.p>
        <motion.button
          className="discover btn btn-success"
          variants={{
            hidden: { opacity: 0, y: 50, x: 0 },
            visible: { opacity: 1, y: 0, x: 0 },
          }}
          initial="hidden"
          animate={mainControlsP}
          transition={{ ease: "easeOut", duration: 0.75, delay: 1.25 }}
        >
          Discover More
        </motion.button>
      </div>
    </div>
  );
};

export default WhatWeDo;
