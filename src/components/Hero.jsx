import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5 mx-auto`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 violet-gradient sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">UserName</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Description about site, <br className="sm:block hidden" /> or about
            you
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute w-full justify-center items-center flex xs:bottom-10 bottom-32">
        <a href="#about">
          <div className="w-[35px] h-[64px] flex justify-center items-start p-2 rounded-3xl border-4 border-secondary">
            <motion.dev
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
