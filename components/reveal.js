"use client";

import { useEffect, useState, useRef } from "react";

export default function RevealOnScroll({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });

        scrollObserver.observe(ref.current);

        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);

    const classes = `transition-all ease-in 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};