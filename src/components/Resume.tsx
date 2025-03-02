// import { motion } from 'framer-motion';
// import { 
//   Card, 
//   CardContent, 
//   CardDescription, 
//   CardHeader, 
//   CardTitle 
// } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// const Resume = () => {
//   const experiences = [
//     {
//       title: 'Senior Software Engineer',
//       company: 'Tech Innovations Inc.',
//       period: '2021 - Present',
//       description: [
//         'Lead a team of 5 developers in building and maintaining enterprise-level applications',
//         'Implemented CI/CD pipelines that reduced deployment time by 40%',
//         'Designed and developed microservices architecture for scalable backend systems',
//         'Mentored junior developers and conducted code reviews to ensure code quality',
//       ],
//     },
//     {
//       title: 'Full-Stack Developer',
//       company: 'Digital Solutions Ltd.',
//       period: '2018 - 2021',
//       description: [
//         'Developed responsive web applications using React, Node.js, and MongoDB',
//         'Created RESTful APIs for mobile applications with over 50,000 users',
//         'Optimized database queries resulting in a 30% performance improvement',
//         'Collaborated with UX/UI designers to implement user-friendly interfaces',
//       ],
//     },
//     {
//       title: 'Software Developer Intern',
//       company: 'InnoTech Startups',
//       period: '2017 - 2018',
//       description: [
//         'Assisted in developing features for a SaaS product using Java and Spring Boot',
//         'Implemented unit tests that increased code coverage by 25%',
//         'Participated in agile development processes including daily stand-ups and sprint planning',
//         'Contributed to the company blog with technical articles on emerging technologies',
//       ],
//     },
//   ];

//   const education = [
//     {
//       degree: 'Master of Science in Computer Science',
//       institution: 'Stanford University',
//       period: '2016 - 2018',
//       description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on "Neural Networks for Natural Language Processing".',
//     },
//     {
//       degree: 'Bachelor of Science in Software Engineering',
//       institution: 'Massachusetts Institute of Technology',
//       period: '2012 - 2016',
//       description: 'Graduated with honors. Focused on software architecture and design patterns. Participated in multiple hackathons and coding competitions.',
//     },
//     {
//       degree: 'High School Diploma',
//       institution: 'Tech Preparatory Academy',
//       period: '2008 - 2012',
//       description: 'Advanced courses in Mathematics, Physics, and Computer Science. Valedictorian of graduating class.',
//     },
//   ];

//   const certifications = [
//     {
//       title: 'AWS Certified Solutions Architect',
//       issuer: 'Amazon Web Services',
//       date: '2022',
//       description: 'Expertise in designing distributed systems on AWS infrastructure.',
//     },
//     {
//       title: 'Google Professional Data Engineer',
//       issuer: 'Google Cloud',
//       date: '2021',
//       description: 'Proficiency in designing, building, and maintaining data processing systems on Google Cloud.',
//     },
//     {
//       title: 'TensorFlow Developer Certificate',
//       issuer: 'Google',
//       date: '2020',
//       description: 'Demonstrated ability to develop deep learning models using TensorFlow.',
//     },
//     {
//       title: 'Oracle Certified Professional, Java SE Developer',
//       issuer: 'Oracle',
//       date: '2019',
//       description: 'Advanced knowledge of Java programming language and its applications.',
//     },
//   ];

//   return (
//     <div className="py-20 px-4 bg-muted/30">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
//           <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
//           <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
//             A summary of my professional experience, education, and certifications.
//           </p>
//           <Button className="mt-8" size="lg">
//             <Download className="mr-2 h-4 w-4" /> Download Resume
//           </Button>
//         </motion.div>

//         <Tabs defaultValue="experience" className="w-full">
//           <TabsList className="grid w-full grid-cols-3 mb-12">
//             <TabsTrigger value="experience">
//               <Briefcase className="mr-2 h-4 w-4" /> Experience
//             </TabsTrigger>
//             <TabsTrigger value="education">
//               <GraduationCap className="mr-2 h-4 w-4" /> Education
//             </TabsTrigger>
//             <TabsTrigger value="certifications">
//               <Award className="mr-2 h-4 w-4" /> Certifications
//             </TabsTrigger>
//           </TabsList>

//           <TabsContent value="experience">
//             <div className="space-y-8">
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card>
//                     <CardHeader>
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <CardTitle>{exp.title}</CardTitle>
//                           <CardDescription className="text-lg font-medium mt-1">
//                             {exp.company}
//                           </CardDescription>
//                         </div>
//                         <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
//                           {exp.period}
//                         </span>
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
//                         {exp.description.map((item, i) => (
//                           <li key={i}>{item}</li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="education">
//             <div className="space-y-8">
//               {education.map((edu, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card>
//                     <CardHeader>
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <CardTitle>{edu.degree}</CardTitle>
//                           <CardDescription className="text-lg font-medium mt-1">
//                             {edu.institution}
//                           </CardDescription>
//                         </div>
//                         <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
//                           {edu.period}
//                         </span>
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-muted-foreground">{edu.description}</p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="certifications">
//             <div className="grid md:grid-cols-2 gap-6">
//               {certifications.map((cert, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card>
//                     <CardHeader>
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <CardTitle>{cert.title}</CardTitle>
//                           <CardDescription className="text-lg font-medium mt-1">
//                             {cert.issuer}
//                           </CardDescription>
//                         </div>
//                         <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
//                           {cert.date}
//                         </span>
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-muted-foreground">{cert.description}</p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default Resume;

import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, GraduationCap, Award } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Resume = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'IQRA University',
      period: 'Oct 2022 - Present',
      description: 'CGPA 3.83.',
    },
    {
      degree: 'Intermediate in Computer Science',
      institution: 'Govt. Degree Boys College Sachal Goth at Ghazi Goth',
      period: 'Nov 2020 - Aug 2022',
      description: 'Grade: 70% (A Grade).',
    },
    {
      degree: 'Matriculation in Biology',
      institution: 'AI-Rasheed Public Secondary School',
      period: 'Sep 2018 - Aug 2020',
      description: 'Grade: 61% (B Grade).',
    },
  ];

  const certifications = [
    {
      title: 'Neo4j Fundamentals',
      issuer: 'Neo4j',
      date: 'Feb 2025',
      description: 'Skills: Neo4j, GraphQL, Graph Databases, Cypher Query Language, Database Development.',
      credential: 'Credential ID: 37adb7e2-432e-4048-8193-0509d2de5fb6',
    },
  ];

  return (
    <div className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A summary of my education and certifications.
          </p>
          <Button className="mt-8" size="lg">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </motion.div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="education">
              <GraduationCap className="mr-2 h-4 w-4" /> Education
            </TabsTrigger>
            <TabsTrigger value="certifications">
              <Award className="mr-2 h-4 w-4" /> Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{edu.degree}</CardTitle>
                          <CardDescription className="text-lg font-medium mt-1">
                            {edu.institution}
                          </CardDescription>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications">
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{cert.title}</CardTitle>
                          <CardDescription className="text-lg font-medium mt-1">
                            {cert.issuer}
                          </CardDescription>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {cert.date}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{cert.description}</p>
                      <p className="text-muted-foreground">{cert.credential}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;