"use client";

import { useEffect } from "react";

export default function LineDraw({ hasScroll }) {
  useEffect(() => {
    if (hasScroll) {
      const svgSustainably = document.querySelector(".line-draw");
      const path = svgSustainably.querySelector(".path-draw");
      const triggerAnimation = () => {
        path.style.animation = "draw 1.5s ease-out forwards";
      };
      const isLineVisible = (svg) => {
        const rect = svg.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      };

      const handleVisibility = () => {
        if (isLineVisible(svgSustainably)) {
          triggerAnimation();
          window.removeEventListener("scroll", handleVisibility);
        }
      };

      handleVisibility();

      window.addEventListener("scroll", handleVisibility);

      return () => window.removeEventListener("scroll", handleVisibility);
    }
  }, [hasScroll]);
  return (
    <svg
      className="line-draw absolute bottom-0 left-0 w-full h-8 -mb-4"
      viewBox="0 40 300 70"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={hasScroll ? {} : { animation: "draw 1.5s ease-out forwards" }}
        className="path-draw"
        d="M 0,76.23 c 36.5,-2.1174999999999926 73,-6.545000000000002 146,-8.469999999999999 c 73,-1.9249999999999972 110.95999999999998,0 146,0.769999999999996 c 7.007999999999981,0.15399999999999636 -5.548000000000002,2.194500000000005 -5.840000000000032,2.3100000000000023"
        fill="transparent"
        stroke="#F9A825"
        strokeWidth="0.25rem"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        transform="scale(1)"
        vectorEffect="non-scaling-stroke"
        strokeDasharray="324"
        strokeDashoffset="648"
      />
    </svg>
  );
}
