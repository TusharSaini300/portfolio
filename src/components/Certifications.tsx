"use client";

import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import {
    FaBasketballBall,
    FaFutbol,
    FaSwimmer,
    FaFistRaised,
    FaBookOpen,
    FaPen,
} from "react-icons/fa";
import { certifications, interests } from "@/data/profile";
import SectionHeading from "./SectionHeading";

const interestIcons: Record<string, React.ReactNode> = {
    Basketball: <FaBasketballBall />,
    Football: <FaFutbol />,
    Swimming: <FaSwimmer />,
    "District-Level Taekwondo": <FaFistRaised />,
    "Technical blogs": <FaPen />,
    "Non-fiction books": <FaBookOpen />,
};

export default function Certifications() {
    return (
        <section style={{ padding: "6rem 2rem", background: "#0d0d14" }}>
            <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto" }}>
                <SectionHeading>
                    <span className="gradient-text">Certifications & Interests</span>
                </SectionHeading>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="glass-card gradient-border"
                        style={{ padding: "1.5rem" }}
                    >
                        <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#fff", display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.25rem" }}>
                            <FiAward style={{ color: "#60a5fa" }} /> Certifications
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            {certifications.map((cert, i) => (
                                <div
                                    key={i}
                                    style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", transition: "border-color 0.3s" }}
                                >
                                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <FiAward style={{ color: "#60a5fa" }} size={14} />
                                    </div>
                                    <span style={{ fontSize: "0.875rem", color: "#cbd5e1" }}>{cert}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Interests */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="glass-card gradient-border"
                        style={{ padding: "1.5rem" }}
                    >
                        <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#fff", marginBottom: "1.25rem" }}>
                            🎯 Interests
                        </h3>
                        {Object.entries(interests).map(([category, items]) => (
                            <div key={category} style={{ marginBottom: "1rem" }}>
                                <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", marginBottom: "0.5rem" }}>
                                    {category}
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                    {items.map((item) => (
                                        <span
                                            key={item}
                                            className="skill-badge"
                                            style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                                        >
                                            {interestIcons[item] && (
                                                <span style={{ color: "#60a5fa", fontSize: "0.75rem" }}>
                                                    {interestIcons[item]}
                                                </span>
                                            )}
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
