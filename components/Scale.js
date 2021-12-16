import {
  useViewportScroll,
  motion,

} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function Scale({children}) {

    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
          opacity: 0,
          scale: 0.65,
          y: 50
        }
      };
const [ref, inView, entry] = useInView({
  /* Optional options */
  threshold: 0.5,
  triggerOnce: false
});
    return (
        <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1, ease: 'easeOut' }}
        ref={ref}
      >
          {children}
      </motion.div>
    )
}
