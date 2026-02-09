'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        title: "Vietnam Water Purification Plant",
        description: "Implemented a state-of-the-art cryogenic water purification system for a major industrial park, reducing water waste by 60%.",
        image: "https://picsum.photos/seed/project1/800/600",
        imageHint: "water treatment plant",
        location: "Ho Chi Minh City, Vietnam"
    },
    {
        title: "Finnish Biogas Optimization",
        description: "Partnered with a leading energy provider to optimize their biogas production, increasing output by 35% through advanced process automation.",
        image: "https://picsum.photos/seed/project2/800/600",
        imageHint: "biogas facility",
        location: "Espoo, Finland"
    },
    {
        title: "Malaysian Waste-to-Energy",
        description: "Developed a turnkey waste-to-energy solution for a municipality, converting 500 tons of solid waste into clean energy daily.",
        image: "https://picsum.photos/seed/project3/800/600",
        imageHint: "waste management",
        location: "Kuala Lumpur, Malaysia"
    }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="group relative overflow-hidden bg-navy text-white shadow-2xl h-96 rounded-lg"
    >
        <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            data-ai-hint={project.imageHint}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent"></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <h3 className="font-display text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 font-light mb-4">{project.location}</p>
            <p className="text-md font-light max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                {project.description}
            </p>
        </div>
    </motion.div>
);


export const Success = () => (
    <section id="success-stories" className="py-32 bg-white">
        <div className="container mx-auto px-6 space-y-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto"
            >
                <span className="text-teal font-bold uppercase tracking-widest text-xs mb-4 block">Our Projects</span>
                <h2 className="font-display text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
                    Impact in Action.
                </h2>
                <p className="text-xl text-steel font-light leading-relaxed">
                    We deliver tangible results across the globe. Explore some of our key projects that showcase our commitment to a sustainable future.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => <ProjectCard key={i} project={project} index={i} />)}
            </div>
        </div>
    </section>
);
