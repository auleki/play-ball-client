import React from 'react'
import { motion } from 'framer-motion'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            style={{ height: "100vh", marginLeft: '1rem', marginRight: '1rem' }}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    )
}

export default PageLayout
