"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/profile";
import SectionHeading from "./SectionHeading";

const categoryIcons: Record<string, string> = {
    Languages: "💻",
    "Web Technologies": "🌐",
    "Tools & Concepts": "🛠️",
};

export default function Skills() {
    return (
        <section id="skills" style={{ padding: "6rem 2rem", background: "#0d0d14" }}>
            <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto" }}>
                <SectionHeading>
                    <span className="gradient-text">Technical Skills</span>
                </SectionHeading>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                    {Object.entries(skills).map(([category, items], i) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card gradient-border"
                            style={{ padding: "1.5rem" }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                                <span style={{ fontSize: "1.5rem" }}>
                                    {categoryIcons[category] || "📦"}
                                </span>
                                <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#fff" }}>{category}</h3>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                {items.map((skill) => (
                                    <span key={skill} className="skill-badge">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
