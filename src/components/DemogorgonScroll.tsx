import { motion } from 'motion/react';
import { useMemo } from 'react';

interface DemogorgonScrollProps {
  scrollY: number;
}

export function DemogorgonScroll({ scrollY }: DemogorgonScrollProps) {
  // Calculate transformations based on scroll
  const transformations = useMemo(() => {
    const yPosition = Math.min(scrollY * 0.5, 2000);
    
    const progress = scrollY / 500;
    let opacityValue = 0.3;
    if (progress < 0.5) {
      opacityValue = progress * 0.6;
    } else if (progress > 4) {
      opacityValue = Math.max(0, 0.3 - (progress - 4) * 0.1);
    }

    const rotation = (scrollY * 0.05) % 360;
    const scaleProgress = scrollY / 1000;
    const scaleValue = 0.4 + Math.sin(scaleProgress) * 0.1;

    return {
      y: yPosition,
      opacity: opacityValue,
      rotate: rotation,
      scale: scaleValue,
    };
  }, [scrollY]);

  return (
    <motion.div
      className="fixed left-[5%] pointer-events-none z-[5]"
      style={{
        top: '20%',
      }}
      animate={{
        y: transformations.y,
        opacity: transformations.opacity,
        rotate: transformations.rotate,
        scale: transformations.scale,
      }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 20,
      }}
    >
      <svg 
        viewBox="0 0 1000 1000" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
        style={{ 
          stroke: '#dc2626', 
          strokeWidth: 2, 
          fill: 'none',
          filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.4))',
        }}
      >
        {/* Legs */}
        <motion.path 
          d="M500 950 L500 800 M450 780 C400 700, 450 600, 500 550 C550 600, 600 700, 550 780" 
          strokeWidth="5"
          animate={{
            d: [
              "M500 950 L500 800 M450 780 C400 700, 450 600, 500 550 C550 600, 600 700, 550 780",
              "M500 950 L500 800 M445 780 C395 700, 445 600, 500 550 C555 600, 605 700, 555 780",
              "M500 950 L500 800 M450 780 C400 700, 450 600, 500 550 C550 600, 600 700, 550 780",
            ],
            strokeOpacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.path 
          d="M480 800 L480 600 M520 800 L520 600" 
          strokeWidth="3"
          animate={{
            strokeOpacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.3,
          }}
        />
        
        <motion.path 
          d="M460 700 Q400 650, 400 600 M540 700 Q600 650, 600 600" 
          strokeWidth="2"
          animate={{
            d: [
              "M460 700 Q400 650, 400 600 M540 700 Q600 650, 600 600",
              "M460 700 Q395 650, 395 600 M540 700 Q605 650, 605 600",
              "M460 700 Q400 650, 400 600 M540 700 Q600 650, 600 600",
            ],
            strokeOpacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        
        {/* Torso */}
        <motion.path 
          d="M470 580 C450 550, 400 550, 420 500 L420 400 M530 580 C550 550, 600 550, 580 500 L580 400" 
          strokeWidth="2"
          animate={{
            strokeOpacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.path 
          d="M450 500 L550 500 M450 450 L550 450 M460 420 L540 420" 
          strokeWidth="1.5"
          animate={{
            strokeOpacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.2,
          }}
        />
        
        {/* Arms */}
        <motion.path 
          d="M400 600 C300 500, 200 450, 150 500 M600 600 C700 500, 800 450, 850 500" 
          strokeWidth="4"
          animate={{
            d: [
              "M400 600 C300 500, 200 450, 150 500 M600 600 C700 500, 800 450, 850 500",
              "M400 600 C295 500, 195 450, 145 505 M600 600 C705 500, 805 450, 855 505",
              "M400 600 C300 500, 200 450, 150 500 M600 600 C700 500, 800 450, 850 500",
            ],
            strokeOpacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.path 
          d="M150 500 L130 550 M150 500 L170 550 M850 500 L870 550 M850 500 L830 550" 
          strokeWidth="3"
          animate={{
            strokeOpacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.4,
          }}
        />

        {/* Head/Flower */}
        <g transform="translate(500, 300) scale(0.6)">
          <motion.path 
            d="M0 -250 Q150 -200, 150 -50 M0 -250 Q-150 -200, -150 -50" 
            strokeWidth="4"
            animate={{
              d: [
                "M0 -250 Q150 -200, 150 -50 M0 -250 Q-150 -200, -150 -50",
                "M0 -250 Q155 -200, 155 -50 M0 -250 Q-155 -200, -155 -50",
                "M0 -250 Q150 -200, 150 -50 M0 -250 Q-150 -200, -150 -50",
              ],
              strokeOpacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          <motion.path 
            d="M150 -50 Q100 50, 50 100 M-150 -50 Q-100 50, -50 100" 
            strokeWidth="4"
            animate={{
              d: [
                "M150 -50 Q100 50, 50 100 M-150 -50 Q-100 50, -50 100",
                "M155 -50 Q105 50, 55 100 M-155 -50 Q-105 50, -55 100",
                "M150 -50 Q100 50, 50 100 M-150 -50 Q-100 50, -50 100",
              ],
              strokeOpacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          />
          
          <motion.path 
            d="M50 100 Q100 150, 0 200 M-50 100 Q-100 150, 0 200" 
            strokeWidth="4"
            animate={{
              d: [
                "M50 100 Q100 150, 0 200 M-50 100 Q-100 150, 0 200",
                "M55 100 Q105 150, 0 205 M-55 100 Q-105 150, 0 205",
                "M50 100 Q100 150, 0 200 M-50 100 Q-100 150, 0 200",
              ],
              strokeOpacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
          />
          
          <motion.path 
            d="M0 200 Q-50 150, -100 100 M0 200 Q50 150, 100 100" 
            strokeWidth="3"
            animate={{
              strokeOpacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          />
          
          <motion.path 
            d="M-100 100 Q-150 50, -200 0 M100 100 Q150 50, 200 0" 
            strokeWidth="3"
            animate={{
              d: [
                "M-100 100 Q-150 50, -200 0 M100 100 Q150 50, 200 0",
                "M-105 100 Q-155 50, -205 0 M105 100 Q155 50, 205 0",
                "M-100 100 Q-150 50, -200 0 M100 100 Q150 50, 200 0",
              ],
              strokeOpacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
          
          {/* Central circles */}
          <motion.circle 
            cx="0" 
            cy="0" 
            r="40" 
            fill="#dc2626" 
            strokeWidth="0"
            animate={{
              r: [40, 45, 40],
              fillOpacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          <motion.circle 
            cx="0" 
            cy="0" 
            r="45" 
            stroke="#dc2626" 
            strokeWidth="2"
            fill="none"
            animate={{
              r: [45, 50, 45],
              strokeOpacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>
        
        {/* Energy lines */}
        <motion.path 
          d="M300 350 C200 300, 300 200, 400 250" 
          strokeDasharray="5 5" 
          strokeOpacity="0.6"
          animate={{
            strokeDashoffset: [0, 10, 0],
            strokeOpacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        <motion.path 
          d="M700 350 C800 300, 700 200, 600 250" 
          strokeDasharray="5 5" 
          strokeOpacity="0.6"
          animate={{
            strokeDashoffset: [0, 10, 0],
            strokeOpacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            delay: 0.5,
          }}
        />

        {/* Additional glow effect */}
        <motion.circle
          cx="500"
          cy="300"
          r="200"
          stroke="#dc2626"
          strokeWidth="1"
          fill="none"
          animate={{
            r: [200, 220, 200],
            strokeOpacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </motion.div>
  );
}
