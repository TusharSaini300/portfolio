"use client";

import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";
import { responsibilities } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Responsibilities() {
    return (
        <section id="responsibilities" style={{ padding: "6rem 2rem" }}>
            <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto" }}>
                <SectionHeading>
                    <span className="gradient-text">Leadership & Responsibility</span>
                </SectionHeading>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                    {responsibilities.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="glass-card gradient-border"
                            style={{ padding: "1.5rem" }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "4px" }}>
                                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <FiUsers style={{ color: "#60a5fa" }} size={18} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#fff" }}>
                                        {item.role}
                                    </h3>
                                    <p style={{ fontSize: "0.875rem", color: "#60a5fa" }}>{item.organization}</p>
                                </div>
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                {item.bullets.map((b, j) => (
                                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.875rem", color: "#cbd5e1", lineHeight: 1.7 }}>
                                        <span style={{ marginTop: "8px", minWidth: "6px", minHeight: "6px", width: "6px", height: "6px", borderRadius: "50%", background: "linear-gradient(to right, #3b82f6, #8b5cf6)", flexShrink: 0 }} />
                                        {b}
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
