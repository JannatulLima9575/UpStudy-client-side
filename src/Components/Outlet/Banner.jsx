import { Link } from "react-router";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

import hero1 from "../../assets/lottiefiles/hero1.json";
import hero2 from "../../assets/lottiefiles/hero2.json";
import physics from "../../assets/lottiefiles/physics.json";
import chemistry from "../../assets/lottiefiles/chemistry.json";
import py from "../../assets/lottiefiles/py.json";
import bg from "../../assets/bg.avif";

const Banner = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-12 bg-cover bg-center text-white overflow-hidden dark:text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.6)"
      }}
    >
      {/* Decorative Lottie Animations */}

      {/* Top Left */}
      <div className="hidden lg:block absolute top-20 mt-20 left-16 w-40 opacity-80">
        <Lottie animationData={py} loop={true} />
      </div>

      <div className="hidden lg:block absolute mt-40 left-16 w-40 opacity-80">
        <Lottie animationData={physics} loop={true} />
      </div>

      {/* Bottom Left */}
      <div className="hidden lg:block absolute bottom-20 left-32 w-36 opacity-70">
        <Lottie animationData={hero1} loop={true} />
      </div>
      <div className="hidden lg:block absolute bottom-10 w-36 opacity-70">
        <Lottie animationData={hero2} loop={true} />
      </div>

      {/* Top Right */}
      <div className="hidden lg:block absolute top-12 pt-20 right-16 w-32 opacity-75">
        <Lottie animationData={chemistry} loop={true} />
      </div>

      {/* Center Right */}
      <div className="hidden lg:block absolute right-16 top-3/5 mr-60 mt-[16%]  transform -translate-y-2/3 w-44 opacity-80">
        <Lottie animationData={hero2} loop={true} />
      </div>

      {/* Bottom Right */}
      <div className="hidden lg:block absolute mb-[5%] right-32 w-36 opacity-70">
        <Lottie animationData={physics} loop={true} />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Share Your Knowledge
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl mb-8 text-white/90 dark:text-white/80"
        >
          Publish insightful articles, engage with learners, and grow your presence in the learning community.
        </motion.p>

        <Link to="/articles">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-indigo-100 transition dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600"
          >
            Explore Articles
          </motion.button>
        </Link>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;