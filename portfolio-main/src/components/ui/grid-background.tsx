import React, { useRef } from 'react';
import { 
  motion, 
  useMotionValue, 
  useMotionTemplate, 
  useAnimationFrame 
} from "framer-motion";

const GridPattern = ({ size }: { size: number }) => {
  return (
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <pattern
          id={`grid-bg-pattern-${size}`}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#grid-bg-pattern-${size})`} />
    </svg>
  );
};

interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
  gridSize?: number;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ 
  children, 
  className = "",
  gridSize = 40 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + 0.3) % gridSize);
    gridOffsetY.set((currentY + 0.3) % gridSize);
  });

  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Layer 1: Subtle background grid */}
      <div className="absolute inset-0 text-gold/10">
        <motion.div
          className="absolute inset-0"
          style={{
            x: gridOffsetX,
            y: gridOffsetY,
          }}
        >
          <GridPattern size={gridSize} />
        </motion.div>
      </div>

      {/* Layer 2: Highlighted grid (revealed by mouse) */}
      <motion.div
        className="absolute inset-0 text-gold/40"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern size={gridSize} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;
