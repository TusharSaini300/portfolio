"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "@/data/profile";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
                    : "bg-transparent"
                }`}
        >
            <div
                style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
                {/* Logo */}
                <a href="#" style={{ fontSize: "1.25rem", fontWeight: 700 }} className="gradient-text">
                    TS.
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex" style={{ alignItems: "center", gap: "2rem" }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative group"
                            style={{ fontSize: "0.875rem", color: "#94a3b8", transition: "color 0.2s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                        >
                            {link.label}
                            <span
                                className="group-hover:w-full"
                                style={{
                                    position: "absolute",
                                    bottom: "-4px",
                                    left: 0,
                                    width: 0,
                                    height: "2px",
                                    background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                                    transition: "width 0.3s",
                                }}
                            />
                        </a>
                    ))}
                    <a
                        href="/Tushar_Saini_Resume.pdf"
                        target="_blank"
                        style={{
                            padding: "6px 20px",
                            fontSize: "0.875rem",
                            borderRadius: "9999px",
                            background: "linear-gradient(to right, #3b82f6, #9333ea)",
                            color: "#fff",
                            transition: "all 0.3s",
                        }}
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden"
                    style={{ color: "#fff", fontSize: "1.5rem", background: "none", border: "none", cursor: "pointer" }}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden"
                        style={{ background: "rgba(10,10,15,0.95)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
                    >
                        <div style={{ padding: "1rem 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    style={{ color: "#94a3b8", transition: "color 0.2s", textDecoration: "none" }}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="/Tushar_Saini_Resume.pdf"
                                target="_blank"
                                style={{
                                    padding: "8px 16px",
                                    fontSize: "0.875rem",
                                    borderRadius: "9999px",
                                    background: "linear-gradient(to right, #3b82f6, #9333ea)",
                                    color: "#fff",
                                    textAlign: "center",
                                    textDecoration: "none",
                                }}
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
