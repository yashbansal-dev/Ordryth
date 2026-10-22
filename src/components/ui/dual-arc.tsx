"use client";

import React from "react";

export interface DualArcProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}

/**
 * DualArc: High-precision dual-arc orbital loading animation component.
 * Configured as the designated loading animation for Ordryth & Imagica ecosystems.
 */
export function DualArc({
  className = "",
  size = 40,
  color = "currentColor",
  strokeWidth = 3,
  style,
  ...props
}: DualArcProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={size}
      height={size}
      className={`dual-arc-spinner ${className}`.trim()}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        ...style,
      }}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <style>{`
        @keyframes dualArcOuter {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes dualArcInner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        .dual-arc-outer-ring {
          transform-origin: 25px 25px;
          animation: dualArcOuter 1.25s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }
        .dual-arc-inner-ring {
          transform-origin: 25px 25px;
          animation: dualArcInner 0.95s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }
      `}</style>
      {/* Outer dual-opposing arcs */}
      <circle
        className="dual-arc-outer-ring"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="42 63"
      />
      {/* Inner counter-rotating dual arcs */}
      <circle
        className="dual-arc-inner-ring"
        cx="25"
        cy="25"
        r="13"
        fill="none"
        stroke={color}
        strokeWidth={Math.max(2, strokeWidth - 0.8)}
        strokeLinecap="round"
        strokeDasharray="24 44"
        opacity="0.8"
      />
    </svg>
  );
}

export default DualArc;
