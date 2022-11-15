import Link from "next/link"
import { motion } from "framer-motion"

interface ButtonProps {
  text: string;
  link: string;
}

export const Button = ({ text, link }: ButtonProps) => {
  return (
    <Link href={link}>
      <motion.button whileHover={{
        scale: 1.05,
      }} className="bg-cyan-500 text-white rounded-lg font-semibold my-4 text-lg w-full py-1">
        {text}
      </motion.button>
    </Link>
  )
};