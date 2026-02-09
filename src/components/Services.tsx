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
        <section id="what-we-do" className="py-32 bg-teal text-beige">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-white font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
                    <h2 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Comprehensive Services.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 min-h-[500px]">
                    {/* Vertical Tabs */}
                    <div className="lg:col-span-4 flex flex-col border-l border-steel/30">
                        <ul className="flex flex-col">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => setActiveTab(index)}
                                        className={`w-full text-left p-6 transition-all duration-300 flex items-center gap-5 border-l-4 ${
                                            activeTab === index
                                                ? 'bg-steel/20 border-teal'
                                                : 'border-transparent text-gray-400 hover:bg-steel/20 hover:text-white'
                                        }`}
                                    >
                                        <Icon name={service.icon} className={`w-8 h-8 transition-colors shrink-0 ${activeTab === index ? 'text-white' : ''}`} />
                                        <span className="font-display font-bold text-xl">{service.short_title}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Content Pane */}
                    <div className="lg:col-span-8 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="w-full h-full flex flex-col"
                            >
                               <div className="relative w-full h-72 md:h-80 mb-8 overflow-hidden">
                                    <Image
                                        src={activeService.image}
                                        alt={activeService.title}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={activeService.imageHint}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-teal/60 to-transparent"></div>
                               </div>
                               <div>
                                     <h3 className="font-display text-4xl font-bold text-white mb-4">{activeService.title}</h3>
                                     <p className="text-gray-300 font-light leading-relaxed text-lg mb-8">{activeService.description}</p>
                                     <Link href={activeService.link} className="group text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
                                            Read More <Icon name="arrow" className="w-4 h-4" />
                                     </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
