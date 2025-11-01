import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Motivational Quote */}
          <div className="max-w-2xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />
            <blockquote className="text-xl sm:text-2xl font-medium text-foreground/90 italic mb-6">
              "Innovation begins where logic meets creativity."
            </blockquote>
            <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent mb-6 animate-pulse-glow" />
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-foreground/60">
            <span>© 2025 Tejesh. Crafted with</span>
            <Heart className="text-primary animate-pulse" size={16} fill="currentColor" />
            <span>and code</span>
          </div>

          {/* Tech Stack */}
          <p className="text-sm text-foreground/40">
            Built with React, Framer Motion, Tailwind CSS & TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
