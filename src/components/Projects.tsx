"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/profile";
import SectionHeading from "./SectionHeading";

const gradientColors: Record<string, string> = {
    "from-blue-500 to-purple-600": "linear-gradient(to right, #3b82f6, #9333ea)",
    "from-emerald-500 to-cyan-600": "linear-gradient(to right, #10b981, #0891b2)",
    "from-orange-500 to-rose-600": "linear-gradient(to right, #f97316, #e11d48)",
};

export default function Projects() {
    return (
        <section id="projects" style={{ padding: "6rem 2rem", background: "#0d0d14" }}>
            <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto" }}>
                <SectionHeading>
                    <span className="gradient-text">Projects</span>
                </SectionHeading>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card gradient-border"
                            style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
                        >
                            {/* Gradient banner */}
                            <div
                                style={{
                                    height: "4px",
                                    background: gradientColors[project.gradient] || "linear-gradient(to right, #3b82f6, #9333ea)",
                                }}
                            />

                            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                                {/* Title row */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                                    <div>
                                        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#fff" }}>
                                            {project.title}
                                        </h3>
                                        <p style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "2px" }}>
                                            {project.subtitle}
                                        </p>
                                    </div>
                                    <FiExternalLink style={{ color: "#475569", marginTop: "4px" }} />
                                </div>

                                {/* Description */}
                                <p style={{ fontSize: "0.875rem", color: "#94a3b8", marginBottom: "1rem", lineHeight: 1.7 }}>
                                    {project.description}
                                </p>

                                {/* Bullets */}
                                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem", flex: 1 }}>
                                    {project.bullets.map((b, j) => (
                                        <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.8rem", color: "#94a3b8", lineHeight: 1.6 }}>
                                            <span style={{ marginTop: "6px", minWidth: "5px", minHeight: "5px", width: "5px", height: "5px", borderRadius: "50%", background: "linear-gradient(to right, #3b82f6, #8b5cf6)", flexShrink: 0 }} />
                                            {b}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech badges */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            style={{ fontSize: "0.75rem", padding: "4px 10px", borderRadius: "9999px", background: "rgba(255,255,255,0.05)", color: "#94a3b8", border: "1px solid rgba(255,255,255,0.05)" }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
