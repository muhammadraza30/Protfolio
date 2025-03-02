import { motion } from 'framer-motion';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const programmingSkills = [
    { name: 'Java', value: 90 },
    { name: 'Python', value: 85 },
    { name: 'JavaScript', value: 80 },
    { name: 'C++', value: 75 },
    { name: 'SQL', value: 85 },
    { name: 'C', value: 70 },
    { name: 'TypeScript', value: 75 },
  ];

  const webSkills = [
    { name: 'React', value: 85 },
    { name: 'HTML/CSS', value: 90 },
    { name: 'JavaScript', value: 80 },
    { name: 'REST APIs', value: 75 },
    { name: 'TypeScript', value: 75 },
  ];

  const aiSkills = [
    { name: 'Machine Learning', value: 80 },
    { name: 'Deep Learning', value: 75 },
    { name: 'NLP', value: 70 },
    { name: 'Data Analysis', value: 85 },
    { name: 'TensorFlow', value: 75 },
    { name: 'Scikit Learn', value: 80 },
  ];

  const otherSkills = [
    { name: 'Git', value: 90 },
    { name: 'Docker', value: 75 },
    { name: 'Cybersecurity', value: 75 },
    { name: 'Networking', value: 80 },
    { name: 'Debugging', value: 85 },
    { name: 'Software Design', value: 80 },
  ];

  const radarData = [
    { subject: 'Programming', A: 90, fullMark: 100 },
    { subject: 'Web Dev', A: 85, fullMark: 100 },
    { subject: 'AI/ML', A: 80, fullMark: 100 },
    { subject: 'Database', A: 85, fullMark: 100 },
    { subject: 'Cybersecurity', A: 75, fullMark: 100 },
    { subject: 'Problem Solving', A: 95, fullMark: 100 },
  ];
// const Skills = () => {
//   const programmingSkills = [
//     { name: 'Java', value: 90 },
//     { name: 'Python', value: 85 },
//     { name: 'JavaScript', value: 80 },
//     { name: 'C++', value: 75 },
//     { name: 'SQL', value: 85 },
//     { name: 'TypeScript', value: 75 },
//   ];

//   const webSkills = [
//     { name: 'React', value: 85 },
//     { name: 'Node.js', value: 80 },
//     { name: 'HTML/CSS', value: 90 },
//     { name: 'Angular', value: 70 },
//     { name: 'Express', value: 75 },
//     { name: 'MongoDB', value: 70 },
//   ];

//   const aiSkills = [
//     { name: 'Machine Learning', value: 80 },
//     { name: 'Deep Learning', value: 75 },
//     { name: 'NLP', value: 70 },
//     { name: 'Computer Vision', value: 65 },
//     { name: 'Data Analysis', value: 85 },
//     { name: 'TensorFlow/PyTorch', value: 75 },
//   ];

//   const otherSkills = [
//     { name: 'Git', value: 90 },
//     { name: 'Docker', value: 75 },
//     { name: 'AWS', value: 70 },
//     { name: 'Agile/Scrum', value: 85 },
//     { name: 'CI/CD', value: 80 },
//     { name: 'Cybersecurity', value: 75 },
//   ];

//   const radarData = [
//     { subject: 'Programming', A: 90, fullMark: 100 },
//     { subject: 'Web Dev', A: 85, fullMark: 100 },
//     { subject: 'AI/ML', A: 80, fullMark: 100 },
//     { subject: 'Database', A: 85, fullMark: 100 },
//     { subject: 'DevOps', A: 75, fullMark: 100 },
//     { subject: 'Problem Solving', A: 95, fullMark: 100 },
//   ];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            I've developed a diverse skill set across multiple technologies and domains.
            Here's a visual representation of my technical expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-[400px]"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">Skill Overview</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Skills"
                      dataKey="A"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Proficiency</h3>
            <p className="text-muted-foreground mb-8">
              My technical skills span across multiple domains including software development, 
              web technologies, AI/ML, and CyberSecurity. I continuously strive to expand my knowledge 
              and stay updated with the latest industry trends.
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Software Development</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Web Development</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">AI & Machine Learning</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Database Management</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="programming" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="programming">Programming</TabsTrigger>
              <TabsTrigger value="web">Web Technologies</TabsTrigger>
              <TabsTrigger value="ai">AI & Data Science</TabsTrigger>
              <TabsTrigger value="other">Other Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="programming" className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={programmingSkills}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Proficiency" fill="hsl(var(--chart-1))" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="web" className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={webSkills}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Proficiency" fill="hsl(var(--chart-2))" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="ai" className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={aiSkills}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Proficiency" fill="hsl(var(--chart-3))" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="other" className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={otherSkills}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Proficiency" fill="hsl(var(--chart-4))" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;