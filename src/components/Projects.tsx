import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Microservice Blog Management System',
    description: 'Full-stack microservice architecture with API Gateway, Spring Boot backend, React frontend, and MongoDB database. Features include JWT authentication, CRUD operations, and real-time updates.',
    tech: ['Spring Boot', 'React', 'MongoDB', 'API Gateway', 'JWT'],
    category: 'Web',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Smart Water Flood Warning System',
    description: 'IoT-based intelligent flood detection system using ESP32-CAM and AI algorithms. Real-time water level monitoring with SMS alerts and cloud dashboard integration.',
    tech: ['ESP32-CAM', 'IoT', 'AI', 'Computer Vision', 'Arduino'],
    category: 'IoT',
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Smart Agro Storage System',
    description: 'Solar-powered IoT system for agricultural storage monitoring. Features DHT11 sensors for temperature and humidity tracking with automated ventilation control.',
    tech: ['IoT', 'Arduino', 'DHT11', 'Solar Power', 'Cloud'],
    category: 'IoT',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Amazon Review Sentiment Analysis',
    description: 'NLP-based sentiment classifier analyzing customer reviews. Built with Python, scikit-learn, and NLTK for accurate emotion detection and rating prediction.',
    tech: ['Python', 'NLP', 'scikit-learn', 'NLTK', 'Pandas'],
    category: 'AI/ML',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Intelligent Mining System Prototype',
    description: 'AI-powered mineral detection and safety analytics system. Combines computer vision with predictive analytics for enhanced mining efficiency and worker safety.',
    tech: ['AI', 'Computer Vision', 'TensorFlow', 'OpenCV', 'Analytics'],
    category: 'AI/ML',
    color: 'from-yellow-500 to-amber-500',
  },
];

const categories = ['All', 'Web', 'AI/ML', 'IoT', 'Data Science'];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden matrix-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary glow-blue'
                    : 'border-primary/50 hover:border-primary'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="glass p-6 rounded-xl h-full flex flex-col border-l-4 border-transparent group-hover:border-primary transition-all duration-300 group-hover:glow-blue">
                {/* Gradient Overlay */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.color} rounded-t-xl opacity-50 group-hover:opacity-100 transition-opacity`}
                />

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-muted/50 text-foreground/80 border border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-secondary/50 hover:bg-secondary/10 hover:border-secondary"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
