// import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   const scrollToContact = () => {
//     const contactSection = document.getElementById('contact');
//     if (contactSection) {
//       window.scrollTo({
//         top: contactSection.offsetTop - 80,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4">
//       <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col space-y-6"
//         >
//           <div>
//             <motion.h2
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//               className="text-xl font-medium text-primary"
//             >
//               Hello, I'm
//             </motion.h2>
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//               className="text-4xl md:text-6xl font-bold mt-2"
//             >
//               Muhammad Raza
//             </motion.h1>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="mt-4 text-xl md:text-2xl text-muted-foreground"
//             >
//               <p>Full-Stack Developer | AI Enthusiast | Problem Solver</p>
//             </motion.div>
//           </div>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="text-muted-foreground max-w-lg"
//           >
//             I build innovative solutions using cutting-edge technologies, specializing in full-stack development, 
//             artificial intelligence, and data science. Let's create something amazing together.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1, duration: 0.8 }}
//             className="flex flex-wrap gap-4"
//           >
//             <Button onClick={scrollToContact} size="lg">
//               Hire Me
//             </Button>
//             <Button variant="outline" size="lg">
//               <Download className="mr-2 h-4 w-4" /> Download Resume
//             </Button>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2, duration: 0.8 }}
//             className="flex space-x-4 pt-4"
//           >
//             <a
//               href="https://github.com/muhammadraza30"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-muted-foreground hover:text-primary transition-colors"
//             >
//               <Github className="h-6 w-6" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/muhammad-raza-4000ba241/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-muted-foreground hover:text-primary transition-colors"
//             >
//               <Linkedin className="h-6 w-6" />
//             </a>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center"
//         >
//           <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20">
//             <img
//               src="/profile.jpg"
//               alt="Muhammad Raza"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.4, duration: 0.8 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
//       >
//         <p className="text-sm text-muted-foreground mb-2">Scroll Down</p>
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//         >
//           <ArrowDown className="h-6 w-6 text-primary" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;

import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl font-medium text-primary"
            >
              Hello, I'm
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mt-2"
            >
              Muhammad Raza
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-4 text-xl md:text-2xl text-muted-foreground"
            >
              <p>Computer Science Student | Full-Stack Developer | AI Enthusiast</p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-muted-foreground max-w-lg"
          >
            I'm passionate about building innovative solutions using cutting-edge technologies, 
            focusing on software development, artificial intelligence, and data science. 
            Currently pursuing a Bachelor's degree in Computer Science with a CGPA of 3.83.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button onClick={scrollToContact} size="lg">
              Contact Me
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex space-x-4 pt-4"
          >
            <a
              href="https://github.com/muhammadraza30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-raza-4000ba241/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20">
            <img
              src="/profile.jpg"
              alt="Muhammad Raza"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-sm text-muted-foreground mb-2">Scroll Down</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;