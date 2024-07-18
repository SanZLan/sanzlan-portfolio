import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Voyager from "./Voyager";
import Position from "./Position";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const layer1 = useTransform(scrollYProgress, [0, 1], ["0vh", "200vh"]);
  const layer2 = useTransform(scrollYProgress, [0, 0.5, 1], ["0vh", "100vh", "150vh"]);
  const layer3 = useTransform(scrollYProgress, [0, 0.5, 1], ["0vh", "100vh", "100vh"]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], ["0vh", "100vh", "170vh"]);

  return (
    <div
      ref={ref}
      className="relative top-0 w-full h-hero overflow-hidden grid"
    >
      <motion.div
        style={{ y: textY }}
        className="relative z-10 -mt-0"
      >
        <div className='parallax__content relative ml-4 top-[8%] sm:ml-8 sm:top-[10%] lg:top-[10%] w-full mx-auto lg:pl-[6rem] lg:pr-[6rem] xl:pl-[10rem] xl:pr-40 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row lg:items-end'>
          <div className="flex-1 lg:mb-0">
            <h1 className='font-medium text-white text-[40px] sm:text-[38px] md:text-[50px] lg:text-[70px] 2xl:text-[120px] 3xl:text-[150px] leading-[110px] 2xl:leading-[160px]'>
              SANTIAGO ZULUAGA
            </h1>
            <Position />
          </div>
          <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 lg:mt-10 2xl:mt-0">
            <div className='font-bold text-[25px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left lg:mb-4'>
              Passionate about <br/> science, technology and astronomy.
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute h-screen inset-0 z-0"
        style={{
          backgroundImage: `url(./Layer1.png)`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          y: layer1,
          willChange: 'transform'
        }}
      />
      <motion.div
        className="absolute h-screen inset-0 z-20"
        style={{
          backgroundImage: `url(./Layer2.png)`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          y: layer2,
          willChange: 'transform'
        }}
      />
      <motion.div
        className="absolute h-screen inset-0 z-30"
        style={{
          backgroundImage: `url(./Layer3.png)`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          y: layer3,
          willChange: 'transform'
        }}
      />
      <Voyager />
    </div>
  );
}

export default Hero