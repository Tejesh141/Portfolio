import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Java', level: 92 },
      { name: 'Spring Boot', level: 88 },
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 87 },
      { name: 'MySQL', level: 85 },
      { name: 'Firebase', level: 80 },
    ],
  },
  {
    category: 'AI/ML',
    skills: [
      { name: 'OpenCV', level: 85 },
      { name: 'TensorFlow', level: 78 },
      { name: 'scikit-learn', level: 82 },
      { name: 'NLP', level: 75 },
    ],
  },
  {
    category: 'IoT',
    skills: [
      { name: 'Arduino', level: 90 },
      { name: 'ESP32-CAM', level: 85 },
      { name: 'Sensors', level: 88 },
    ],
  },
  {
    category: 'Cloud & Tools',
    skills: [
      { name: 'AWS', level: 75 },
      { name: 'Git/GitHub', level: 92 },
      { name: 'API Gateway', level: 80 },
      { name: 'JWT', level: 85 },
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-20 relative overflow-hidden matrix-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass p-6 rounded-xl hover:glow-blue transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.1 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Problem Solving Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'LeetCode', value: '400+' },
            { label: 'GeeksforGeeks', value: '300+' },
            { label: 'Hackathons', value: '5+' },
            { label: 'Projects', value: '20+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="glass p-6 rounded-xl text-center hover:glow-violet transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
