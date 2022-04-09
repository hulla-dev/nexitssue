import { motion } from 'framer-motion'

const MotionTest = () => (
  <motion.div animate={{ x:200, scale: 1.2 }}>
    THIS IS A TEST
  </motion.div>
)

export default MotionTest