import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Award, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';


const contactInfo = [
  { icon: Mail, label: 'Email', value: 'sstejesh100549@gmail.com', href: 'mailto:sstejesh100549@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 7200766141', href: 'tel:+917200766141' },
  { icon: MapPin, label: 'Location', value: 'Coimbatore, India', href: '#' },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tejesh-s-s-40ba2b28b/' },
  { icon: Code2, label: 'LeetCode', href: 'https://leetcode.com/u/Tejesh564/' },
  { icon: Award, label: 'GeeksforGeeks', href: 'https://www.geeksforgeeks.org/user/sstejeshboi9/' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/he.is_teju/?hl=en' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100070251122157' },
];

export const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        'service_zv86czd',
        'template_svd68ec',
        formRef.current,
        'opgblb93HzR23Zlpx'
      );

      console.log('EmailJS result:', result);
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Let's collaborate on innovative projects! Feel free to reach out for opportunities, collaborations, or just a tech chat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 glass p-4 rounded-xl hover:glow-blue transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">{info.label}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 gradient-text">Connect With Me</h3>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-lg glass-dark flex items-center justify-center text-primary hover:glow-blue transition-all group"
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  name="from_email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity glow-blue"
                size="lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              
              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
