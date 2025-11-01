import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Target, Code } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: '2nd Place - IDEATHON',
    organization: 'Pondicherry University',
    description: 'Winner in university-level innovation hackathon',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Award,
    title: 'Finalist - SNS Oblivion',
    organization: 'SNS Institutions',
    description: '30-hour intensive hackathon finalist',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Ninja Dominator League',
    organization: 'Coding Ninjas',
    description: 'Top performer in competitive coding league',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    title: '700+ Problems Solved',
    organization: 'LeetCode & GeeksforGeeks',
    description: 'Active problem solver across platforms',
    color: 'from-green-500 to-emerald-500',
  },
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass p-6 rounded-xl hover:glow-blue transition-all duration-300 group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <achievement.icon className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              <p className="text-sm text-secondary font-semibold mb-2">{achievement.organization}</p>
              <p className="text-sm text-foreground/70">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
