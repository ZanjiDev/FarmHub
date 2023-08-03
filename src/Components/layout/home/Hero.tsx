import "../../../assets/css/hero.css";
import { motion } from "framer-motion";
import Farm3D from "../../../assets/imgs/hero3d.png";
import FarmVector1 from "../../../assets/imgs/farm-vector1.png";
import FarmVector2 from "../../../assets/imgs/farm-vector2.png";
import FarmVector3 from "../../../assets/imgs/farm-vector3.png";
const hero = () => {
  const spring = {
    type: "spring",
    damping: 100,
    stiffness: 100,
  };
  return (
    <div className="cont d-flex">
      <div className="w-50 m-auto">
        <motion.h1
          initial={{ opacity: 0.75, y: 400, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.75, spring }}
          id="title"
        >
          Use FarmHub to Grow Your <span id="business">Farm Business!</span>
        </motion.h1>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 300, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.75, spring, delay: 0.25 }}
        >
          Harvest More, Earn More! 🌽🚜 Cut out the middleman and sell your
          freshest produce directly to eager customers. Join FarmHub today and
          plow your way to success!
        </motion.p>
        <br />
        <motion.div
          initial={{ opacity: 0, y: 200, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.75, spring, delay: 0.5 }}
          className="d-flex gap-3"
        >
          <button className="btn btn-success" id="buy">
            Buy Plans
          </button>
          <button className="btn " id="see">
            See plans
          </button>
        </motion.div>
      </div>
      <div className="w-50 d-flex align-items-center">
        <motion.img
          src={Farm3D}
          alt=""
          id="farm3d"
          initial={{ opacity: 1, y: 0, x: 0 }}
          animate={{ opacity: 1, y: 25, x: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1.5,
            spring,
            delay: 0,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.img
          src={FarmVector1}
          id="fv1"
          initial={{ opacity: 1, y: 0, x: 0 }}
          animate={{ opacity: 1, y: 75, x: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1.5,
            spring,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.img
          src={FarmVector2}
          id="fv2"
          initial={{ opacity: 1, y: 50, x: 0 }}
          animate={{ opacity: 1, y: 100, x: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1.5,
            spring,
            delay: 0.25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.img
          src={FarmVector3}
          id="fv3"
          initial={{ opacity: 1, y: 50, x: 0 }}
          animate={{ opacity: 1, y: 100, x: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1.5,
            spring,
            delay: 0.75,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </div>
  );
};

export default hero;
