import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Development Intern',
    company: 'Pratinik Infotech',
    period: 'Apr 2025 – Jun 2025',
    description:
      'Developed a microservice-based blog management platform with authentication, CRUD APIs, and API Gateway integration. Implemented JWT-based security and optimized database queries for performance.',
    achievements: [
      'Built RESTful APIs with Spring Boot',
      'Created responsive React frontend',
      'Integrated MongoDB with efficient data models',
      'Implemented JWT authentication system',
    ],
  },
  {
    role: 'Data Science Trainee',
    company: 'Internshala (IITM Pravartak Certified)',
    period: 'May 2025 – Jun 2025',
    description:
      'Completed comprehensive data science training covering data analysis, visualization, and machine learning. Executed capstone projects involving real-world datasets and predictive modeling.',
    achievements: [
      'Mastered Python for data analysis',
      'Created interactive data visualizations',
      'Built ML models with scikit-learn',
      'Completed industry-relevant capstone projects',
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass p-6 sm:p-8 rounded-xl hover:glow-blue transition-all duration-300 group">
                {/* Timeline Dot */}
                <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-125 transition-transform">
                  <Briefcase size={16} className="text-background" />
                </div>

                <div className="ml-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-secondary text-lg font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70 mt-2 sm:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-foreground/70">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
