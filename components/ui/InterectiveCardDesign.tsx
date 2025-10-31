"use client";

import { useRef } from "react";

export default function InterectiveCardDesign() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 20; // tilt up-down
    const rotateY = ((x - centerX) / centerX) * -20; // tilt left-right

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    const lightX = (x / rect.width) * 100;
    const lightY = (y / rect.height) * 100;
    card.style.setProperty("--light-x", `${lightX}%`);
    card.style.setProperty("--light-y", `${lightY}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="flex items-center">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-[400px] h-[250px] rounded-2xl transition-transform duration-150 ease-out cursor-pointer [transform-style:preserve-3d]"
        style={{
          backgroundImage: `url('/images/aicwa-card.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0 10px 45px rgba(0,0,0,0.5)",
        }}
      >
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle at var(--light-x, 50%) var(--light-y, 50%), rgba(255,255,255,0.3), transparent 60%)`,
          }}
        />
      </div>
    </div>
  );
}
