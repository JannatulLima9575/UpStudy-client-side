import { Link } from "react-router";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

import hero1 from "../../assets/lottiefiles/hero1.json";
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
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      {/* Decorative Lottie Animations */}
      {/* Bottom Left */}
      <div className="hidden lg:block absolute bottom-20 left-32 w-36 opacity-70">
        <Lottie animationData={hero1} loop={true} />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-3xl"
      >
        {/* Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400"
        >
          Share Your Knowledge
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl mb-8 text-white/90 dark:text-white/80"
        >
          Publish insightful articles, engage with learners, and grow your
          presence in the learning community.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 justify-center flex-wrap">
          <Link to="/articles">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-400 hover:shadow-emerald-300/50 transition dark:bg-white dark:text-emerald-600 dark:hover:bg-gray-200 dark:hover:shadow-white/40"
            >
              Explore Articles
            </motion.button>
          </Link>
          <Link to="/post-article">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-400 hover:shadow-emerald-300/50 transition dark:bg-white dark:text-emerald-600 dark:hover:bg-gray-200 dark:hover:shadow-white/40"
            >
              Create Article
            </motion.button>
          </Link>
        </div>
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
