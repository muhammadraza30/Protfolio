import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Code, Database, Globe, Server, Shield } from 'lucide-react';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const specialties = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: 'Software Development',
      description: 'Building robust applications with modern frameworks and languages.',
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: 'AI & Machine Learning',
      description: 'Developing intelligent systems that learn and adapt.',
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: 'Data Science',
      description: 'Extracting insights from complex datasets to drive decisions.',
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: 'Web Development',
      description: 'Creating responsive, user-friendly web applications.',
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: 'Backend Systems',
      description: 'Designing scalable server architectures and APIs.',
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Cybersecurity',
      description: 'Implementing secure systems with best practices in mind.',
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            I'm a passionate Full-Stack Developer and AI Enthusiast with a strong foundation in software engineering principles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
            <p>
                I'm currently pursuing a Bachelor's degree in Computer Science at IQRA University with a CGPA of 3.83. My journey began with a deep curiosity about how technology can solve real-world problems.
              </p>
              <p>
                As a distinguished member of the university's Computer Science Society, I've been actively involved in various academic and extracurricular activities that have helped me grow both personally and professionally.
              </p>
              <p>
                My approach combines technical expertise with strong problem-solving abilities. I believe in writing clean, maintainable code and creating intuitive user experiences. I'm particularly passionate about the intersection of AI and software development.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or expanding my knowledge in various computer science domains.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Specialties</h3>
            <div className="grid grid-cols-2 gap-4">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4">{specialty.icon}</div>
                      <h4 className="font-bold mb-2">{specialty.title}</h4>
                      <p className="text-sm text-muted-foreground">{specialty.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

// import { motion } from 'framer-motion';
// import { Card, CardContent } from '@/components/ui/card';
// import { Brain, Code, Database, Globe, Server, Shield } from 'lucide-react';

// const About = () => {
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.1 * i,
//         duration: 0.5,
//       },
//     }),
//   };

//   const specialties = [
//     {
//       icon: <Code className="h-10 w-10 text-primary" />,
//       title: 'Software Development',
//       description: 'Building robust applications with modern frameworks and languages.',
//     },
//     {
//       icon: <Brain className="h-10 w-10 text-primary" />,
//       title: 'AI & Machine Learning',
//       description: 'Developing intelligent systems that learn and adapt.',
//     },
//     {
//       icon: <Database className="h-10 w-10 text-primary" />,
//       title: 'Data Science',
//       description: 'Extracting insights from complex datasets to drive decisions.',
//     },
//     {
//       icon: <Globe className="h-10 w-10 text-primary" />,
//       title: 'Web Development',
//       description: 'Creating responsive, user-friendly web applications.',
//     },
//     {
//       icon: <Server className="h-10 w-10 text-primary" />,
//       title: 'Backend Systems',
//       description: 'Designing scalable server architectures and APIs.',
//     },
//     {
//       icon: <Shield className="h-10 w-10 text-primary" />,
//       title: 'Cybersecurity',
//       description: 'Implementing secure systems with best practices in mind.',
//     },
//   ];

//   return (
//     <div className="py-20 px-4">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
//           <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
//           <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
//             I'm a passionate Computer Science student and aspiring Full-Stack Developer with a strong foundation in software engineering principles.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-2xl font-bold mb-6">My Journey</h3>
//             <div className="space-y-4 text-muted-foreground">
//               <p>
//                 I'm currently pursuing a Bachelor's degree in Computer Science at IQRA University with a CGPA of 3.83. My journey began with a deep curiosity about how technology can solve real-world problems.
//               </p>
//               <p>
//                 As a distinguished member of the university's Computer Science Society, I've been actively involved in various academic and extracurricular activities that have helped me grow both personally and professionally.
//               </p>
//               <p>
//                 My approach combines technical expertise with strong problem-solving abilities. I believe in writing clean, maintainable code and creating intuitive user experiences. I'm particularly passionate about the intersection of AI and software development.
//               </p>
//               <p>
//                 When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or expanding my knowledge in various computer science domains.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-2xl font-bold mb-6">My Specialties</h3>
//             <div className="grid grid-cols-2 gap-4">
//               {specialties.map((specialty, index) => (
//                 <motion.div
//                   key={index}
//                   custom={index}
//                   variants={fadeIn}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 >
//                   <Card>
//                     <CardContent className="p-6 flex flex-col items-center text-center">
//                       <div className="mb-4">{specialty.icon}</div>
//                       <h4 className="font-bold mb-2">{specialty.title}</h4>
//                       <p className="text-sm text-muted-foreground">{specialty.description}</p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;