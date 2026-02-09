'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
    {
        title: "Sales & Marketing",
        description1: "We craft expert inbound and outbound strategies tailored for the unique dynamics of EU-Asia markets. Our approach is designed to build a powerful brand presence and drive a consistent stream of qualified leads to your business.",
        description2: "By combining market intelligence with creative storytelling, we ensure your message resonates with the right audience, turning potential interest into measurable growth and establishing your foothold in competitive international markets.",
        image: "https://picsum.photos/seed/sales/800/600",
        imageHint: "marketing strategy"
    },
    {
        title: "Partner & Customer Search",
        description1: "Leveraging our extensive and meticulously vetted network, we connect you with the ideal business partners and customers. We go beyond simple introductions, focusing on strategic alignment and long-term potential.",
        description2: "Our process involves deep due diligence to ensure that every connection we facilitate is not just a contact, but a valuable, synergistic relationship that can accelerate your growth and market penetration.",
        image: "https://picsum.photos/seed/partner/800/600",
        imageHint: "business handshake"
    },
    {
        title: "Business Development",
        description1: "Our team specializes in strategic growth planning and market penetration. We meticulously identify and analyze new market opportunities, creating actionable pathways for sustainable and profitable expansion.",
        description2: "We work as an extension of your team to turn strategy into reality, navigating local complexities and building the foundational relationships necessary for long-term success in new territories.",
        image: "https://picsum.photos/seed/businessdev/800/600",
        imageHint: "growth chart"
    },
    {
        title: "GTM Strategy",
        description1: "We provide comprehensive Go-To-Market execution for companies entering new regions. Our holistic service covers every phase, from initial market research and strategic planning to a successful and impactful launch.",
        description2: "We manage the complexities of localization, regulatory compliance, and channel development, ensuring your product or service makes a powerful and well-received entry into the target market.",
        image: "https://picsum.photos/seed/gtm/800/600",
        imageHint: "world map"
    },
    {
        title: "Application Consultancy",
        description1: "Our seasoned experts offer high-level technical advisory for specialized industrial applications. We provide critical insights to help you design, optimize, and future-proof your technology stack.",
        description2: "We assess your current systems, identify areas for improvement, and recommend innovative solutions that enhance efficiency, reduce operational costs, and give you a significant competitive advantage.",
        image: "https://picsum.photos/seed/consultancy/800/600",
        imageHint: "industrial machinery"
    },
    {
        title: "On-Site Training",
        description1: "We believe in empowering your team with the knowledge they need to excel. Our on-site training programs and knowledge transfer workshops are designed to be practical, engaging, and directly applicable to your operations.",
        description2: "From technical skills for new equipment to best practices in operational management, we ensure your local teams are fully equipped to maintain high standards of performance and drive your projects forward.",
        image: "https://picsum.photos/seed/training/800/600",
        imageHint: "team workshop"
    },
    {
        title: "Aftersales Services",
        description1: "Our commitment to your success extends far beyond project completion. We provide robust, long-term maintenance and lifecycle support to ensure continuous operational excellence and maximize your return on investment.",
        description2: "With local support teams and proactive monitoring, we guarantee customer satisfaction, minimize downtime, and help you adapt to evolving challenges long after the initial installation.",
        image: "https://picsum.photos/seed/aftersales/800/600",
        imageHint: "support engineer"
    }
];

export const Services = () => {
    return (
        <section id="what-we-do" className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-teal font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
                    <h2 className="font-display text-5xl lg:text-6xl font-bold text-navy leading-tight">
                        Lifecycle Solutions.
                    </h2>
                </motion.div>

                <div className="space-y-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            <div className={`relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={service.imageHint}
                                />
                                <div className="absolute inset-0 bg-navy/20"></div>
                            </div>
                            
                            <div className={`lg:px-8 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-teal font-display font-bold text-5xl">0{index + 1}</span>
                                    <div className="w-16 h-0.5 bg-teal"></div>
                                </div>
                                <h3 className="font-display text-4xl font-bold text-navy mb-6">{service.title}</h3>
                                <div className="space-y-6 text-steel font-light leading-relaxed">
                                    <p>{service.description1}</p>
                                    <p>{service.description2}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
