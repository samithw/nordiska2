'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const accordionData = [
    {
        num: "01",
        title: "Sales & Marketing",
        desc: "Expert inbound/outbound strategies tailored for EU-Asia markets. We build your brand presence and drive qualified leads.",
    },
    {
        num: "02",
        title: "Partner & Customer Search",
        desc: "Connecting you with vetted business partners and customers. We leverage our extensive network to find the perfect match for your business.",
    },
    {
        num: "03",
        title: "Business Development",
        desc: "Strategic growth planning and market penetration. We identify new opportunities and create pathways for sustainable expansion.",
    },
    {
        num: "04",
        title: "GTM Strategy",
        desc: "Comprehensive Go-To-Market execution for new regions. From planning to launch, we ensure a successful market entry.",
    },
    {
        num: "05",
        title: "Application Consultancy",
        desc: "Technical advisory for specialized industrial applications. Our experts provide insights to optimize your technology stack.",
    },
    {
        num: "06",
        title: "On-Site Training",
        desc: "Knowledge transfer workshops and operational training. We empower your team with the skills they need to succeed.",
    },
    {
        num: "07",
        title: "Aftersales Services",
        desc: "Long-term maintenance and lifecycle support to ensure operational excellence and customer satisfaction.",
    }
];


const AccordionItem = ({ item, isOpen, onClick }: { item: any, isOpen: boolean, onClick: () => void}) => (
    <div className="border-b border-navy/10">
        <button
            onClick={onClick}
            className="w-full py-10 flex justify-between items-center text-left group hover:bg-white/50 transition-colors px-4 md:px-8"
        >
            <div className="flex items-center gap-8">
                <span className={`font-display text-sm font-bold ${isOpen ? 'text-teal' : 'text-navy/30'}`}>{item.num}</span>
                <h3 className={`font-display text-2xl md:text-4xl font-bold uppercase transition-colors ${isOpen ? 'text-teal' : 'text-navy group-hover:text-teal'}`}>
                    {item.title}
                </h3>
            </div>
            <div className={`transition-transform duration-500 ${isOpen ? 'rotate-45 text-teal' : 'text-navy'}`}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </div>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="pb-12 pl-16 md:pl-24 pr-8 md:pr-32">
                        <p className="text-lg text-steel leading-relaxed">{item.desc}</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);


export const Services = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="what-we-do" className="py-32 bg-beige">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-teal font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
                    <h2 className="font-display text-5xl lg:text-6xl font-bold text-navy leading-tight">
                        Lifecycle Solutions.
                    </h2>
                </div>
                <div className="border-t border-navy/10">
                    {accordionData.map((item, idx) => (
                        <AccordionItem
                            key={idx}
                            item={item}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};