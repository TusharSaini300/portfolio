"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
    children: ReactNode;
    className?: string;
}

export default function SectionHeading({ children, className = "" }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: "4rem" }}
            className={className}
        >
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, marginBottom: "0.75rem" }}>{children}</h2>
            <div className="section-divider" />
        </motion.div>
    );
}
