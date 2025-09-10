// HamburgerIcon.jsx
import React from "react";

export default function HamburgerIcon({ toggled, toggle, width = 60, height = 30, color = "black" }) {
  const barHeight = 0.7;
  const barRadius = 1;
  // Slowed transition for better observation
  const transition = "all 1s cubic-bezier(.73,1.5,.27,.99)";

  return (
    <div
      onClick={() => toggle(!toggled)}
      style={{
        width,
        height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
        background: "none",
        border: "none",
        padding: 0,
      }}
      aria-label="Menu"
      tabIndex={0}
    >
      <span
        style={{
          display: "block",
          position: "absolute",
          left: 0,
          width,
          height: barHeight,
          borderRadius: barRadius,
          backgroundColor: color,
          transition,
          top: toggled ? height / 2 - barHeight / 2 : 4,
          transform: toggled ? "rotate(45deg)" : "none",
        }}
      />
      <span
        style={{
          display: "block",
          position: "absolute",
          left: 0,
          width,
          height: barHeight,
          borderRadius: barRadius,
          backgroundColor: color,
          transition,
          top: height / 2 - barHeight / 2,
          opacity: toggled ? 0 : 1,
        }}
      />
      <span
        style={{
          display: "block",
          position: "absolute",
          left: 0,
          width,
          height: barHeight,
          borderRadius: barRadius,
          backgroundColor: color,
          transition,
          top: toggled ? height / 2 - barHeight / 2 : height - barHeight - 4,
          transform: toggled ? "rotate(-45deg)" : "none",
        }}
      />
    </div>
  );
}
