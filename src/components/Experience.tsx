"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiBriefcase } from "react-icons/fi";
import { experience } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
    return (
        <section id="experience" style={{ padding: "6rem 2rem" }}>
            <div style={{ maxWidth: "900px", width: "100%", margin: "0 auto" }}>
                <SectionHeading>
                    <span className="gradient-text">Professional Experience</span>
                </SectionHeading>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="glass-card gradient-border"
                            style={{ padding: "2rem" }}
                        >
                            {/* Header */}
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.75rem", marginBottom: "1.25rem" }}>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                                        <FiBriefcase style={{ color: "#60a5fa" }} size={18} />
                                        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#fff" }}>
                                            {exp.role}
                                        </h3>
                                    </div>
                                    <p style={{ color: "#60a5fa", fontWeight: 500 }}>{exp.company}</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.875rem", color: "#94a3b8" }}>
                                        <FiCalendar size={13} /> {exp.period}
                                    </span>
                                    {exp.location && (
                                        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.875rem", color: "#64748b" }}>
                                            <FiMapPin size={13} /> {exp.location}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Bullets */}
                            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {exp.bullets.map((bullet, j) => (
                                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.875rem", color: "#cbd5e1", lineHeight: 1.7 }}>
                                        <span style={{ marginTop: "8px", minWidth: "6px", minHeight: "6px", width: "6px", height: "6px", borderRadius: "50%", background: "linear-gradient(to right, #3b82f6, #8b5cf6)", flexShrink: 0 }} />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
