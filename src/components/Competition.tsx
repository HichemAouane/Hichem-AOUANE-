"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy } from "lucide-react";

const competitions = [
    {
        platform: "TryHackMe",
        logo: "/thm.png",
        stats: [
            { label: "", value: "Top 4% utilisateur" },
            { label: "Points", value: "11 000" },
        ],
        link: "https://tryhackme.com/p/Levlev",
        className: "md:col-span-1 bg-indigo-900/20 border-indigo-500/20",
    },
    {
        platform: "RootMe",
        logo: "https://www.root-me.org/IMG/logo/siteon0.svg",
        stats: [
            { label: "Points", value: "400" },
        ],
        link: "https://www.root-me.org",
        className: "md:col-span-1 bg-amber-900/20 border-amber-500/20",
    },
];

export default function Competition() {
    return (
        <section id="competition" className="py-20 px-4 md:px-10 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                        <Trophy className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                        Compétitions
                    </h2>
                    <p className="text-muted-foreground max-w-md">
                        Plateformes de challenges et CTF où je m&apos;entraîne et me mesure à la communauté.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[minmax(160px,auto)]">
                    {competitions.map((comp, index) => (
                        <motion.a
                            key={index}
                            href={comp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-3xl border flex flex-row items-center gap-4 group hover:border-primary/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 ${comp.className}`}
                        >
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center overflow-hidden shrink-0 p-1.5">
                                <Image
                                    src={comp.logo}
                                    alt={`${comp.platform} logo`}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                    {comp.platform}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {comp.stats.map((stat, idx) => (
                                        <span
                                            key={idx}
                                            className="text-sm text-muted-foreground bg-white/5 px-3 py-1.5 rounded-md inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
                                        >
                                            <span className="text-white font-medium">{stat.value}</span>
                                            {stat.label && (
                                                <span className="text-muted-foreground/70 text-xs">{stat.label}</span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
