'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Icon } from './Icons';
import Link from 'next/link';

const services = [
    {
        title: "Sales & Marketing",
        short_title: "Sales & Marketing",
        description: "We provide expert inbound and outbound strategies tailored for the unique dynamics of EU-Asia markets. Our approach builds a powerful brand presence and drives a consistent stream of qualified leads to your business. We dig deep into market analytics to position your brand for optimal impact.",
        icon: "target",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format=fit=crop",
        imageHint: "business people meeting",
        link: "#"
    },
    {
        title: "Partner & Customer Search",
        short_title: "Partner Search",
        description: "Leveraging our extensive and meticulously vetted network, we connect you with ideal business partners and customers. We focus on strategic alignment and long-term potential for accelerated growth. Our matchmaking process is driven by data and deep industry knowledge.",
        icon: "users",
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format=fit=crop",
        imageHint: "business handshake",
        link: "#"
    },
    {
        title: "Business Development",
        short_title: "Business Dev",
        description: "Our team specializes in strategic growth planning and market penetration. We identify new opportunities and create actionable pathways for sustainable and profitable expansion into new territories. From joint ventures to strategic alliances, we pave the way for your success.",
        icon: "trending-up",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format=fit=crop",
        imageHint: "business strategy meeting",
        link: "#"
    },
    {
        title: "GTM Strategy",
        short_title: "GTM Strategy",
        description: "We offer a comprehensive Go-To-Market execution for companies entering new regions. Our service covers every phase, from initial market research and planning to a successful and impactful launch. We ensure your product-market fit is perfect before you invest heavily.",
        icon: "map",
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format=fit=crop",
        imageHint: "market strategy chart",
        link: "#"
    },
    {
        title: "Application Consultancy",
        short_title: "App Consultancy",
        description: "Our seasoned experts offer high-level technical advisory for specialized industrial applications. We provide critical insights to help you design, optimize, and future-proof your technology stack. We help you navigate complex technical landscapes with confidence.",
        icon: "cpu",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format=fit=crop",
        imageHint: "business consultation",
        link: "#"
    },
    {
        title: "On-Site Training",
        short_title: "On-Site Training",
        description: "We empower your team with the knowledge they need to excel. Our on-site training programs and workshops are practical, engaging, and directly applicable to your daily operations. Our goal is to make your team self-sufficient and highly skilled.",
        icon: "book-open",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format=fit=crop",
        imageHint: "team workshop",
        link: "#"
    },
    {
        title: "Aftersales Services",
        short_title: "Aftersales",
        description: "Our commitment extends beyond project completion. We provide robust, long-term maintenance and lifecycle support to ensure continuous operational excellence and maximize your return on investment. We are your partners for the long haul.",
        icon: "tool",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format=fit=crop",
        imageHint: "engineer maintenance",
        link: "#"
    }
];

export const Services = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeService = services[activeTab];

    return (
        <section id="what-we-do" className="relative flex flex-col lg:flex-row min-h-screen overflow-hidden">
            {/* Left Pane - Tabs */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 bg-navy text-beige p-8 py-16 lg:p-16 flex flex-col justify-center"
            >
                <div className="mb-12">
                     <span className="text-teal font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
                    <h2 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Comprehensive Services.
                    </h2>
                </div>
                <ul className="flex flex-col">
                    {services.map((service, index) => (
                        <li key={index}>
                            <button
                                onClick={() => setActiveTab(index)}
                                className={`w-full text-left p-6 transition-colors duration-300 flex items-start gap-5 border-l-4 ${
                                    activeTab === index
                                        ? 'bg-steel/30 border-teal'
                                        : 'border-transparent hover:bg-steel/20'
                                }`}
                            >
                                <Icon name={service.icon} className={`w-8 h-8 transition-colors shrink-0 mt-1 ${activeTab === index ? 'text-teal' : 'text-white'}`} />
                                <div>
                                    <h3 className={`font-display font-bold text-2xl transition-colors ${activeTab === index ? 'text-white' : 'text-gray-300'}`}>{service.title}</h3>
                                    <p className="font-light text-sm text-gray-400 mt-2 pr-4 hidden md:block">
                                        {service.description.split('.')[0]}.
                                    </p>
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Right Pane - Content */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 bg-teal text-beige relative"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full h-full"
                    >
                       <div className="relative w-full h-full min-h-[75vh] lg:min-h-screen">
                            <Image
                                src={activeService.image}
                                alt={activeService.title}
                                fill
                                className="object-cover"
                                data-ai-hint={activeService.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal via-teal/70 to-transparent flex flex-col justify-end p-8 lg:p-16">
                                <motion.div
                                     initial={{ opacity: 0, y: 30 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                >
                                     <h3 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">{activeService.title}</h3>
                                     <p className="text-gray-200 font-light leading-relaxed text-lg mb-8 max-w-xl">{activeService.description}</p>
                                     <Link href={activeService.link} className="group text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
                                            Read More <Icon name="arrow" className="w-4 h-4" />
                                     </Link>
                                </motion.div>
                            </div>
                       </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </section>
    );
};
