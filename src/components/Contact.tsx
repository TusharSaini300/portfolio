"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Contact() {
    return (
        <section id="contact" style={{ padding: "6rem 2rem" }}>
            <div style={{ maxWidth: "700px", width: "100%", margin: "0 auto" }}>
                <SectionHeading>
                    <span className="gradient-text">Get in Touch</span>
                </SectionHeading>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="glass-card gradient-border"
                    style={{ padding: "3rem 2rem", textAlign: "center" }}
                >
                    <p style={{ color: "#94a3b8", marginBottom: "2rem", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto 2rem" }}>
                        I&apos;m open to opportunities, collaborations, and projects where I can contribute and grow.
                        If you have something in mind or would like to connect, feel free to reach out.
                    </p>

                    {/* Contact info */}
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
                        <a
                            href={`mailto:${profile.email}`}
                            style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "9999px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#cbd5e1", textDecoration: "none", transition: "all 0.3s" }}
                        >
                            <FiMail style={{ color: "#60a5fa" }} size={16} />
                            <span style={{ fontSize: "0.875rem" }}>{profile.email}</span>
                        </a>
                        <a
                            href={`tel:${profile.phone}`}
                            style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "9999px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#cbd5e1", textDecoration: "none", transition: "all 0.3s" }}
                        >
                            <FiPhone style={{ color: "#60a5fa" }} size={16} />
                            <span style={{ fontSize: "0.875rem" }}>{profile.phone}</span>
                        </a>
                    </div>

                    {/* Social row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
                        {[
                            { Icon: FiGithub, href: profile.github, label: "GitHub" },
                            { Icon: FiLinkedin, href: profile.linkedin, label: "LinkedIn" },
                            { Icon: SiLeetcode, href: profile.leetcode, label: "LeetCode" },
                        ].map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", transition: "all 0.3s", textDecoration: "none" }}
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    {/* <a
                        href={`mailto:${profile.email}`}
                        style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 32px", borderRadius: "9999px", background: "linear-gradient(to right, #3b82f6, #9333ea)", color: "#fff", fontWeight: 500, transition: "all 0.3s", textDecoration: "none" }}
                    >
                        <FiSend size={16} />
                        Say Hello
                    </a> */}
                </motion.div>
            </div>
        </section>
    );
}
