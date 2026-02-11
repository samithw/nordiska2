'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';
import type { MouseEvent } from 'react';
import Image from 'next/image';

const menuContent: any = {
    "who-we-are": {
        subtitle: "Who We Are",
        title: "Finnish Innovation.\nGlobal Impact.",
        desc: "Nordiska Solutions acts as the bridge between European technology clusters and Asian infrastructure needs. We don't just supply equipment; we develop the business concepts that make sustainable projects financially viable.",
        links: [
            { label: "Our Leadership", target: "hero" },
            { label: "Sustainability Mission", target: "hero" },
            { label: "22 Years of History", target: "hero" },
            { label: "Careers", target: "contacts" }
        ],
        stats: [{ val: "6", label: "Global Hubs" }, { val: "22+", label: "Years Exp." }],
        action: { label: "Read Full Story", target: "hero" }
    },
    "what-we-do": {
        subtitle: "What We Do",
        title: "Comprehensive\nService Modules.",
        desc: "From the first handshake in Helsinki to the final site commissioning in Hanoi, we handle the entire lifecycle. Our services range from market entry strategy to deep technical operational training.",
        links: [
            { label: "Sales & Marketing", target: "what-we-do" },
            { label: "GTM Strategy", target: "what-we-do" },
            { label: "App Consultancy", target: "what-we-do" },
            { label: "On-Site Training", target: "what-we-do" }
        ],
        stats: [{ val: "7", label: "Core Services" }, { val: "100%", label: "Turnkey" }],
        action: { label: "View All Services", target: "what-we-do" }
    },
    "industries": {
        subtitle: "Industries",
        title: "Sectors We\nTransform.",
        desc: "Advanced solutions for sustainable infrastructure. We specialize in high-impact sectors where technology meets ecology, driving efficiency in water, waste, and energy.",
        links: [
            { label: "Water & Wastewater", target: "industries" },
            { label: "Solid Waste Mgmt", target: "industries" },
            { label: "Bio Energy", target: "industries" },
            { label: "Green Hydrogen", target: "industries" }
        ],
        stats: [{ val: "5", label: "Key Sectors" }, { val: "40%", label: "Efficiency Avg" }],
        action: { label: "View All Sectors", target: "industries" }
    },
    "success-stories": {
        subtitle: "Success Stories",
        title: "Proven Results.\nReal Impact.",
        desc: "We don't just promise sustainability; we deliver measurable financial and environmental ROI for our clients through optimized engineering and smart execution.",
        links: [
            { label: "EcoWater Asia", target: "success-stories" },
            { label: "BioGen Nord", target: "success-stories" },
            { label: "Municipal Grid", target: "success-stories" }
        ],
        stats: [{ val: "$2M", label: "Client Savings" }, { val: "+35%", label: "Efficiency" }],
        action: { label: "View Case Studies", target: "success-stories" }
    }
};

export const FullScreenMenu = ({ activeMenu, onClose }: { activeMenu: string | null, onClose: () => void }) => {
    const content = activeMenu ? menuContent[activeMenu] : null;

    const handleNavigation = (targetId: any) => {
        onClose();
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (targetId === 'hero') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 300);
    };

    return (
        <AnimatePresence>
            {activeMenu && content && (
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 z-50 bg-navy text-beige grid grid-cols-1 lg:grid-cols-2 pt-24 px-8 lg:px-20 overflow-y-auto min-h-screen"
                    onClick={(e: MouseEvent<HTMLDivElement>) => {
                        if (e.target === e.currentTarget) {
                            onClose();
                        }
                    }}
                >
                    <div
                        className="absolute top-8 left-8 lg:left-20 cursor-pointer"
                        onClick={() => handleNavigation('hero')}
                    >
                        <Image src="./images/ns__logo__trans1.png" alt="NORDISKA Logo" width={160} height={40} className="h-10 w-auto" />
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-beige hover:text-teal transition-colors"
                    >
                        <Icon name="x" className="w-10 h-10" />
                    </button>

                    {/* Left Column: Narrative */}
                    <div className="flex flex-col justify-center space-y-8 pr-12 border-b lg:border-b-0 lg:border-r border-steel/30 pb-12 lg:pb-0">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-teal font-display tracking-widest uppercase text-sm font-bold"
                        >
                            {content.subtitle}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="font-display text-4xl lg:text-6xl leading-[1.1] font-bold whitespace-pre-line"
                        >
                            {content.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-gray-300 font-light leading-relaxed max-w-xl"
                        >
                            {content.desc}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="pt-8"
                        >
                            <button
                                onClick={() => handleNavigation(content.action.target)}
                                className="flex items-center gap-2 text-teal font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
                            >
                                {content.action.label} <Icon name="arrow" className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Links */}
                    <div className="flex flex-col justify-center lg:pl-20 space-y-12 pt-12 lg:pt-0">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-teal mb-8 opacity-70">Quick Links</h3>
                            <ul className="space-y-6 text-3xl font-display font-semibold">
                                {content.links.map((link: any, i: number) => (
                                    <motion.li
                                        key={link.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + (i * 0.1) }}
                                        onClick={() => handleNavigation(link.target)}
                                        className="hover:text-teal cursor-pointer transition-colors flex items-center gap-4 group w-full"
                                    >
                                        <span className="w-0 group-hover:w-8 h-[2px] bg-teal transition-all duration-300"></span>
                                        {link.label}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-12 border-t border-steel/30 pt-12">
                            {content.stats.map((stat: any, i: number) => (
                                <div key={i}>
                                    <span className="block text-5xl font-display font-bold text-teal mb-2">{stat.val}</span>
                                    <span className="text-xs uppercase tracking-widest opacity-60">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
