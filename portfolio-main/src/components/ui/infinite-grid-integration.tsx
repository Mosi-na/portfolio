import React, { useState, useRef, useEffect } from 'react';
import { 
  motion, 
  useMotionValue, 
  useMotionTemplate, 
  useAnimationFrame 
} from "framer-motion";
import { MousePointerClick, Info, Sun, Moon, Settings2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Helper component for the SVG grid pattern.
 */
const GridPattern = ({ offsetX, offsetY, size }: { offsetX: any; offsetY: any; size: number }) => {
  return (
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <pattern
          id={`grid-pattern-${size}`}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(${offsetX} ${offsetY})`}
        >
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#grid-pattern-${size})`} />
    </svg>
  );
};

/**
 * The Infinite Grid Component
 * Displays a scrolling background grid that reveals an active layer on mouse hover.
 */
const InfiniteGrid = () => {
  const [count, setCount] = useState(0);
  const [gridSize, setGridSize] = useState(40);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse position with Motion Values for performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  // Grid offsets for infinite scroll animation
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5; 
  const speedY = 0.5;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % gridSize);
    gridOffsetY.set((currentY + speedY) % gridSize);
  });

  // Create a dynamic radial mask for the "flashlight" effect
  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden bg-background"
    >
      {/* Layer 1: Subtle background grid (always visible) */}
      <div className="absolute inset-0 text-muted-foreground/20">
        <motion.div
          className="absolute inset-0"
          style={{
            x: gridOffsetX,
            y: gridOffsetY,
          }}
        >
          <GridPattern offsetX={0} offsetY={0} size={gridSize} />
        </motion.div>
      </div>

      {/* Layer 2: Highlighted grid (revealed by mouse mask) */}
      <motion.div
        className="absolute inset-0 text-primary/60"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={0} offsetY={0} size={gridSize} />
      </motion.div>

      {/* Decorative Blur Spheres */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      {/* Grid Density Control Panel */}
      <div className="absolute top-4 left-4 z-20">
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-3 text-sm font-medium text-foreground">
            <Settings2 className="w-4 h-4" />
            Grid Density
          </div>
          <input
            type="range"
            min="20"
            max="80"
            value={gridSize}
            onChange={(e) => setGridSize(Number(e.target.value))}
            className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>Dense</span>
            <span>Sparse ({gridSize}px)</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            The Infinite Grid
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto mb-8">
            Move your cursor to reveal the active grid layer.
            <br />
            The pattern scrolls infinitely in the background.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            onClick={() => setCount(count + 1)}
            whileHover={{ 
              scale: 1.05, 
              y: -4,
            }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md shadow-md border-2 border-transparent transition-colors hover:bg-primary/90"
          >
            <MousePointerClick className="w-5 h-5" />
            Interact ({count})
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-md shadow-md border border-border transition-colors hover:bg-secondary/80"
          >
            <Info className="w-5 h-5" />
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

interface InfiniteGridIntegrationProps {
  showThemeToggle?: boolean;
}

const InfiniteGridIntegration: React.FC<InfiniteGridIntegrationProps> = ({ 
  showThemeToggle = true 
}) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Sticky Theme Toggle */}
      {showThemeToggle && (
        <button
          onClick={() => setIsDark(!isDark)}
          className="fixed top-4 right-4 z-50 p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
          aria-label="Toggle Theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-foreground" />
          ) : (
            <Moon className="w-5 h-5 text-foreground" />
          )}
        </button>
      )}

      {/* Main Content */}
      <main>
        <InfiniteGrid />
      </main>

      {/* Footer Branding */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20 text-xs text-muted-foreground">
        Shadcn Infinite Grid v1.1
      </div>
    </div>
  );
};

export default InfiniteGridIntegration;
