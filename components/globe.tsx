"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
 const sampleArcs = [
  {
    order: 1,
    startLat: 31.5204,
    startLng: 74.3587,
    endLat: 28.6139,
    endLng: 77.2090,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 31.5204,
    startLng: 74.3587,
    endLat: 24.7136,
    endLng: 46.6753,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 31.5204,
    startLng: 74.3587,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.4,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 31.5204,
    startLng: 74.3587,
    endLat: 37.5665,
    endLng: 126.9780,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 31.5204,
    startLng: 74.3587,
    endLat: 40.7128,
    endLng: -74.0060,
    arcAlt: 0.6,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 31.5204,
    startLng: 74.3587,
    endLat: 34.3416,
    endLng: 108.9398,
    arcAlt: 0.4,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 31.5204,
    startLng: 74.3587,
    endLat: 17.9712,
    endLng: -76.7936,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 31.5204,
    startLng: 74.3587,
    endLat: 23.5859,
    endLng: 58.4059,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 31.5204,
    startLng: 74.3587,
    endLat: 36.7538,
    endLng: 3.0588,
    arcAlt: 0.4,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
];


  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-linear-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
