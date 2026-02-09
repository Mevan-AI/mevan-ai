import { motion } from 'motion/react';
import { Sparkles, Zap, Star, Bot, Code, Cpu } from 'lucide-react';

export function FloatingElements() {
  const icons = [Sparkles, Zap, Star, Bot, Code, Cpu];
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + (i * 15)}%`,
            top: `${20 + (i * 10) % 60}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-50"></div>
            <Icon className="relative w-8 h-8 text-blue-400/40" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
