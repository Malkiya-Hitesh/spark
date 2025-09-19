import React from 'react'

import {
    FaLeaf,
    FaGlobe,
    FaLightbulb,
    FaCog,
    FaFlask,
    FaRobot,
    FaMicrochip,
    FaBookOpen,
    FaSun,
    FaRocket,
    FaMagnet,
    FaFish
  } from "react-icons/fa";




const items = [
    { Icon: FaLeaf, label: "Plant", bg: "bg-orange-400" },
    { Icon: FaGlobe, label: "Globe", bg: "bg-sky-400" },
    { Icon: FaLightbulb, label: "Idea", bg: "bg-emerald-400" },
    { Icon: FaCog, label: "Gear", bg: "bg-rose-400" },
    { Icon: FaFlask, label: "Flask", bg: "bg-amber-400" },
    { Icon: FaRobot, label: "Robot", bg: "bg-cyan-400" },
    { Icon: FaMicrochip, label: "Circuit", bg: "bg-green-400" },
    { Icon: FaBookOpen, label: "Book", bg: "bg-orange-400" },
    { Icon: FaSun, label: "Sun", bg: "bg-teal-400" },
    { Icon: FaRocket, label: "Rocket", bg: "bg-sky-400" },
    { Icon: FaMagnet, label: "Magnet", bg: "bg-amber-400" },
    { Icon: FaFish, label: "Marine", bg: "bg-rose-400" },
    { Icon: FaMicrochip, label: "Circuit", bg: "bg-green-400" },
    { Icon: FaBookOpen, label: "Book", bg: "bg-orange-400" },
    { Icon: FaSun, label: "Sun", bg: "bg-teal-400" },
    { Icon: FaRocket, label: "Rocket", bg: "bg-sky-400" },
    { Icon: FaMagnet, label: "Magnet", bg: "bg-amber-400" },
    { Icon: FaFish, label: "Marine", bg: "bg-rose-400" }
  ];
  
  export  function IconsRow({ size = 77 }) {
    return (
      <div style={{ display: "flex", gap: 8, alignItems: "center", padding: 6 }}>
        {items.map(({ Icon, label, bg }, i) => (
          <span
            key={i}
            title={label}

            
            aria-label={label}
            /* If you use Tailwind, the bg classes above will work. */
            className={`${bg} inline-flex items-center justify-center rounded p-3`}
            style={{ width: "48px", height: "48px" }}
          >
            <Icon size={size} />
          </span>
        ))}
      </div>
    );
  }