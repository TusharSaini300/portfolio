"use client";

import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { profile } from "@/data/profile";

export default function Footer() {
    return (
        <footer style={{ padding: "2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                {/* <p suppressHydrationWarning style={{ fontSize: "0.875rem", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
                    © {new Date().getFullYear()} {profile.name}. Built with{" "}
                    <FiHeart style={{ color: "#f87171" }} size={12} /> using Next.js
                </p> */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    {[
                        { Icon: FiGithub, href: profile.github },
                        { Icon: FiLinkedin, href: profile.linkedin },
                        { Icon: SiLeetcode, href: profile.leetcode },
                    ].map(({ Icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#64748b", transition: "color 0.3s", textDecoration: "none" }}
                        >
                            <Icon size={16} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
