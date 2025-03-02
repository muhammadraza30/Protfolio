import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Charse - Chatting App',
      description: 'A real-time chat application built with Java and Socket Programming. Features include private messaging, group chats, and file sharing.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      tags: ['Java', 'Socket Programming', 'UI/UX', 'Real-time'],
      category: 'desktop',
      github: 'https://github.com/muhammadraza30/Charse-A-Chatting-App',
      demo: '#',
    },
    {
      id: 2,
      title: 'MusicLoud - Music Library',
      description: 'A comprehensive music library management system with features for organizing, searching, and playing music files.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      tags: ['Java', 'JavaFX', 'SQL', 'Audio Processing'],
      category: 'desktop',
      github: 'https://github.com/muhammadraza30/Music-Library-Management-System',
      demo: '#',
    },
    {
      id: 3,
      title: 'Library Management System',
      description: 'A Python-based library management system with features for book cataloging, member management, and borrowing/returning books.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      tags: ['Python', 'SQLite', 'Tkinter', 'Database'],
      category: 'desktop',
      github: 'https://github.com/muhammadraza30/Library-Management-System-Python',
      demo: '#',
    },
    {
      id: 4,
      title: 'Web Music Library',
      description: 'A full-stack web application for music library management with user authentication, playlists, and music streaming.',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      tags: ['React', 'Node.js', 'MySQL', 'RESTful API'],
      category: 'web',
      github: 'https://github.com/muhammadraza30/Web-Music-Library-Management-System-FrontEnd',
      demo: '#',
    },
    {
      id: 5,
      title: 'TicTacToe',
      description: 'A classic TicTacToe game implementation with a clean interface and multiplayer support.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      tags: ['Java', 'Game Development', 'UI Design'],
      category: 'desktop',
      github: 'https://github.com/muhammadraza30/TicTacToe',
      demo: '#',
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid grid-cols-5 max-w-md mx-auto">
            <TabsTrigger value="all" onClick={() => setFilter('all')}>All</TabsTrigger>
            <TabsTrigger value="web" onClick={() => setFilter('web')}>Web</TabsTrigger>
            <TabsTrigger value="desktop" onClick={() => setFilter('desktop')}>Desktop</TabsTrigger>
            <TabsTrigger value="mobile" onClick={() => setFilter('mobile')}>Mobile</TabsTrigger>
            <TabsTrigger value="ai" onClick={() => setFilter('ai')}>AI/ML</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;