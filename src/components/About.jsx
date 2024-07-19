import { motion } from "framer-motion";

import { about } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const About = () => {
  return (
    <div className='text-center md:text-left px-4 md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>About</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {about.map((paragraph, index) => (
          <p key={index}
            className="about__text cursor-default text-center text-slate-500 font-semibold text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px]"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          >
          </p>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");