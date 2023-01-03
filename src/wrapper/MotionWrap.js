import React from 'react';
import {motion} from 'framer-motion';

const MotionWrap =(Component, classNames) => function HOC() {
    return(
        <motion.dev
          whileInView={{ y:[100, 50, 0], opecity:[0, 0, 1]}}
          transition={{duration: 0.5}}
          className={`${classNames} app__flex`}
        >
         <Component/>
        </motion.dev>
    )
}
export default MotionWrap