import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Globe } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Building scalable web applications with modern frameworks',
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Creating intelligent solutions with cutting-edge ML models',
  },
  {
    icon: Globe,
    title: 'IoT Systems',
    description: 'Developing smart IoT solutions for real-world problems',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              A passionate <span className="text-primary font-semibold">Computer Science and Engineering</span> student 
              from <span className="font-semibold">Sri Krishna College of Engineering and Technology (SKCET)</span>, Coimbatore.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Skilled in <span className="text-secondary font-semibold">Java, Spring Boot, React, MongoDB</span>, and{' '}
              <span className="text-secondary font-semibold">AI-driven IoT systems</span>. 
              Focused on building scalable web applications, machine learning models, and IoT solutions that solve real-world problems.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Enthusiastic about <span className="text-accent font-semibold">hackathons, backend engineering</span>, and{' '}
              <span className="text-accent font-semibold">cloud deployment</span>. 
              Always eager to learn new technologies and take on challenging projects that push the boundaries of innovation.
            </p>

            <div className="glass p-6 rounded-xl border-l-4 border-primary">
              <p className="text-foreground/90 italic">
                "Innovation begins where logic meets creativity."
              </p>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass p-6 rounded-xl hover:glow-blue transition-all duration-300 group"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="text-background" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
