"use client";

import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";
import { education } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
    return (
        <section id="about" style={{ padding: "6rem 2rem" }}>
            <div style={{ maxWidth: "900px", width: "100%", margin: "0 auto" }}>
                <SectionHeading>
                    <span className="gradient-text">Education</span>
                </SectionHeading>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="glass-card gradient-border"
                            style={{ padding: "1.5rem 2rem" }}
                        >
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                <span style={{ fontSize: "2rem", lineHeight: 1 }}>{edu.logo}</span>
                                <div>
                                    <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#fff", marginBottom: "4px" }}>
                                        {edu.institution}
                                    </h3>
                                    <p style={{ fontSize: "0.875rem", color: "#94a3b8" }}>
                                        {edu.degree}
                                    </p>
                                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#64748b", marginTop: "8px" }}>
                                        <FiCalendar size={12} />
                                        {edu.period}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
