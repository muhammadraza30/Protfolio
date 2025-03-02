// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { 
//   Card, 
//   CardContent, 
//   CardDescription, 
//   CardHeader, 
//   CardTitle 
// } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';
// import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

// const formSchema = z.object({
//   name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
//   email: z.string().email({ message: 'Please enter a valid email address.' }),
//   subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
//   message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
// });

// type FormValues = z.infer<typeof formSchema>;

// const Contact = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const form = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     },
//   });

//   const onSubmit = async (data: FormValues) => {
//     setIsSubmitting(true);
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1500));
    
//     console.log('Form data:', data);
    
//     toast({
//       title: 'Message sent!',
//       description: 'Thank you for your message. I will get back to you soon.',
//     });
    
//     form.reset();
//     setIsSubmitting(false);
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="h-6 w-6 text-primary" />,
//       title: 'Email',
//       value: 'muhammad.raza@example.com',
//       link: 'mailto:muhammad.raza@example.com',
//     },
//     {
//       icon: <Phone className="h-6 w-6 text-primary" />,
//       title: 'Phone',
//       value: '+1 (123) 456-7890',
//       link: 'tel:+11234567890',
//     },
//     {
//       icon: <MapPin className="h-6 w-6 text-primary" />,
//       title: 'Location',
//       value: 'San Francisco, CA',
//       link: 'https://maps.google.com/?q=San+Francisco,+CA',
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: <Linkedin className="h-6 w-6" />,
//       link: 'https://linkedin.com/in/muhammad-raza',
//       label: 'LinkedIn',
//     },
//     {
//       icon: <Github className="h-6 w-6" />,
//       link: 'https://github.com/muhammad-raza',
//       label: 'GitHub',
//     },
//     {
//       icon: <Twitter className="h-6 w-6" />,
//       link: 'https://twitter.com/muhammad_raza',
//       label: 'Twitter',
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
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
//           <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
//           <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
//             Have a project in mind or want to discuss a potential collaboration? 
//             Feel free to reach out to me through any of the channels below.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <Card>
//               <CardHeader>
//                 <CardTitle>Contact Information</CardTitle>
//                 <CardDescription>
//                   Feel free to reach out through any of these channels
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-8">
//                 <div className="space-y-6">
//                   {contactInfo.map((info, index) => (
//                     <div key={index} className="flex items-start">
//                       <div className="mr-4">{info.icon}</div>
//                       <div>
//                         <h4 className="font-medium">{info.title}</h4>
//                         <a 
//                           href={info.link} 
//                           className="text-muted-foreground hover:text-primary transition-colors"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           {info.value}
//                         </a>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div>
//                   <h4 className="font-medium mb-4">Connect with me</h4>
//                   <div className="flex space-x-4">
//                     {socialLinks.map((social, index) => (
//                       <a
//                         key={index}
//                         href={social.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-muted-foreground hover:text-primary transition-colors"
//                         aria-label={social.label}
//                       >
//                         {social.icon}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <Card>
//               <CardHeader>
//                 <CardTitle>Send Me a Message</CardTitle>
//                 <CardDescription>
//                   I'll get back to you as soon as possible
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Form {...form}>
//                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                     <div className="grid grid-cols-2 gap-4">
//                       <FormField
//                         control={form.control}
//                         name="name"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Name</FormLabel>
//                             <FormControl>
//                               <Input placeholder="Your name" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                       <FormField
//                         control={form.control}
//                         name="email"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Email</FormLabel>
//                             <FormControl>
//                               <Input placeholder="Your email" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     </div>
//                     <FormField
//                       control={form.control}
//                       name="subject"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Subject</FormLabel>
//                           <FormControl>
//                             <Input placeholder="Subject of your message" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                     <FormField
//                       control={form.control}
//                       name="message"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Message</FormLabel>
//                           <FormControl>
//                             <Textarea 
//                               placeholder="Your message" 
//                               className="min-h-[120px]" 
//                               {...field} 
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                     <Button type="submit" className="w-full" disabled={isSubmitting}>
//                       {isSubmitting ? (
//                         <span className="flex items-center">
//                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                           Sending...
//                         </span>
//                       ) : (
//                         <span className="flex items-center">
//                           <Send className="mr-2 h-4 w-4" /> Send Message
//                         </span>
//                       )}
//                     </Button>
//                   </form>
//                 </Form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form data:', data);
    
    toast({
      title: 'Message sent!',
      description: 'Thank you for your message. I will get back to you soon.',
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      value: 'muhammadraza3009@gmail.com',
      link: 'mailto:muhammadraza3009@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone',
      value: '+92 3472490550',
      link: 'tel:+923472490550',
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Location',
      value: 'Karachi, Sindh, Pakistan',
      link: 'https://maps.google.com/?q=Karachi,+Sindh,+Pakistan',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-6 w-6" />,
      link: 'https://www.linkedin.com/in/muhammad-raza-4000ba241/',
      label: 'LinkedIn',
    },
    {
      icon: <Github className="h-6 w-6" />,
      link: 'https://github.com/muhammadraza30',
      label: 'GitHub',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Have a project in mind or want to discuss a potential collaboration? 
            Feel free to reach out to me through any of the channels below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4">{info.icon}</div>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;