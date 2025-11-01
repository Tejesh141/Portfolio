import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileCheck, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    title: 'Java Programming',
    issuer: 'NPTEL',
    category: 'Programming',
    year: '2024',
  },
  {
    title: 'Database Management Systems',
    issuer: 'NPTEL',
    category: 'Database',
    year: '2024',
  },
  {
    title: 'Emotional Intelligence',
    issuer: 'NPTEL',
    category: 'Soft Skills',
    year: '2024',
  },
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    category: 'Cloud',
    year: '2025',
  },
  {
    title: 'Artificial Intelligence',
    issuer: 'LinkedIn Learning',
    category: 'AI/ML',
    year: '2025',
  },
  {
    title: 'Data Science Training',
    issuer: 'Internshala',
    category: 'Data Science',
    year: '2025',
  },
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 relative overflow-hidden matrix-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-xl hover:glow-violet transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileCheck className="text-white" size={24} />
                </div>
                <ExternalLink
                  className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  size={20}
                />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {cert.title}
              </h3>

              <p className="text-foreground/70 text-sm mb-3">{cert.issuer}</p>

              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-muted/50 text-foreground/80">
                  {cert.category}
                </Badge>
                <span className="text-xs text-foreground/50">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
