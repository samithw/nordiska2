'use client';

import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative h-screen w-full flex flex-col md:flex-row bg-navy overflow-hidden">
            {/* Left Split */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center filter grayscale contrast-125 transition-transform duration-[2s] group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-navy/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80"></div>
            </motion.div>

            {/* Right Split */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-teal/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-90"></div>
            </motion.div>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none mix-blend-screen">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-display font-extrabold text-[12vw] md:text-[7vw] leading-[0.85] tracking-tighter text-center text-white"
                >
                    <span className="block text-stroke opacity-75">BRIDGING</span>
                    <span className="block">CONTINENTS</span>
                </motion.h1>
            </div>

            <div className="absolute bottom-12 w-full text-center z-30">
                 <p className="text-teal text-xs font-bold uppercase tracking-[0.4em] animate-pulse">Scroll to Explore</p>
            </div>
        </section>
    );
};
