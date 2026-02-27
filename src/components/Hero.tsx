"use client";

import { motion } from "framer-motion";
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiChevronDown,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { profile } from "@/data/profile";

export default function Hero() {
    return (
        <section
            id="hero"
            className="bg-grid"
            style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
        >
            {/* Background orbs */}
            <div className="animate-float" style={{ position: "absolute", top: "25%", left: "-128px", width: "384px", height: "384px", background: "rgba(59,130,246,0.1)", borderRadius: "50%", filter: "blur(48px)" }} />
            <div className="animate-float" style={{ position: "absolute", bottom: "25%", right: "-128px", width: "384px", height: "384px", background: "rgba(139,92,246,0.1)", borderRadius: "50%", filter: "blur(48px)", animationDelay: "3s" }} />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", background: "rgba(6,182,212,0.05)", borderRadius: "50%", filter: "blur(48px)" }} />

            <div style={{ position: "relative", zIndex: 10, maxWidth: "800px", width: "100%", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
                {/* Greeting badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "9999px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.875rem", color: "#94a3b8", marginBottom: "2rem" }}
                >
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#34d399", animation: "pulse 2s infinite" }} />
                    Available for opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1rem", lineHeight: 1.1 }}
                >
                    Hi, I&apos;m{" "}
                    <span className="gradient-text">{profile.name}</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#94a3b8", fontWeight: 300, marginBottom: "1rem" }}
                >
                    {profile.tagline}
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    style={{ fontSize: "1rem", color: "#64748b", maxWidth: "600px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}
                >
                    {profile.description}
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}
                >
                    <a
                        href="#contact"
                        style={{ padding: "12px 28px", borderRadius: "9999px", background: "linear-gradient(to right, #3b82f6, #9333ea)", color: "#fff", fontWeight: 500, transition: "all 0.3s", textDecoration: "none" }}
                    >
                        Get in Touch
                    </a>
                    <a
                        href="#projects"
                        style={{ padding: "12px 28px", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.1)", color: "#cbd5e1", transition: "all 0.3s", textDecoration: "none" }}
                    >
                        View Projects
                    </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.75 }}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.25rem" }}
                >
                    {[
                        { Icon: FiGithub, href: profile.github, label: "GitHub" },
                        { Icon: FiLinkedin, href: profile.linkedin, label: "LinkedIn" },
                        { Icon: SiLeetcode, href: profile.leetcode, label: "LeetCode" },
                        { Icon: FiMail, href: `mailto:${profile.email}`, label: "Email" },
                    ].map(({ Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", transition: "all 0.3s", textDecoration: "none" }}
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", color: "#64748b", textDecoration: "none" }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <FiChevronDown size={24} />
                </motion.div>
            </motion.a>
        </section>
    );
}
