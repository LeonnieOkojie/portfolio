import { useEffect, useRef, createElement } from "react";
import { Github, Linkedin, Mail, Server, Database, Cloud, Code2, Calendar, Clock, ExternalLink, Layers, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectedProject, setSelectedBlogPost } from "@/store/uiSlice";
import FloatingNav from "@/components/FloatingNav";
import BackToTop from "@/components/BackToTop";
import profileImage from "@/assets/profile.png";
import taskQueueImage from "@/assets/project-task-queue.png";
import analyticsImage from "@/assets/project-analytics.png";
import cloudImage from "@/assets/project-cloud.png";

const Index = () => {
  const dispatch = useAppDispatch();
  const selectedProject = useAppSelector((state) => state.ui.selectedProject);
  const selectedBlogPost = useAppSelector((state) => state.ui.selectedBlogPost);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
  {
    title: "FSOpen Phonebook",
    description: "Full-stack phonebook app with CRUD operations for contacts and responsive design",
    tech: ["React", "Axios", "React Hooks", "Node.js", "Express.js", "MongoDB", "CSS / Tailwind"],
    icon: Server,
    image: taskQueueImage, // using sample image
    details: {
      challenge: "Building a simple and user-friendly full-stack application to manage contacts efficiently.",
      solution: "Implemented a React frontend with Axios for API calls, and a Node.js/Express backend with optional MongoDB for persistence.",
      impact: "Enabled users to add, edit, delete, and search contacts quickly with a responsive interface.",
      metrics: ["CRUD functionality", "Responsive design", "React Hooks implementation"],
      link: "https://fsopen-phonebook-x6qw.onrender.com"
    }
  },
  {
    title: "ERP System Management Hub",
    description: "Enterprise resource planning system with role-based access, payroll, and reporting",
    tech: ["Node.js", "Express", "TypeScript", "PostgreSQL", "MongoDB", "Prisma / Sequelize / TypeORM", "Redis", "JWT"],
    icon: Database,
    image: analyticsImage,
    details: {
      challenge: "Managing multiple enterprise functions with secure access and real-time reporting.",
      solution: "Built a modular backend with Node.js and TypeScript, integrated JWT-based authentication, role-based access, and PDF report generation.",
      impact: "Streamlined ERP processes, enabled secure role-based workflows, and improved payroll/report generation efficiency.",
      metrics: ["Role-based access control", "Automated PDF reports", "Optimized payroll runs"],
      link: "https://erp-system-management-client.onrender.com"
    }
  },
  {
    title: "Task Queue Scheduler",
    description: "High-performance task scheduling and job queue system with repeatable CRON jobs",
    tech: ["Node.js", "Express", "TypeScript", "Redis", "BullMQ", "React-Vite"],
    icon: Server,
    image: cloudImage,
    details: {
      challenge: "Processing scheduled tasks reliably and monitoring their execution in real-time.",
      solution: "Used BullMQ with Redis to implement repeatable jobs, CRON scheduling, and real-time job monitoring through a React frontend.",
      impact: "Reduced task execution failures, enabled repeatable scheduling, and provided an intuitive monitoring interface.",
      metrics: ["Reliable CRON jobs", "Real-time monitoring", "Scalable task execution"],
      link: "https://workhorseui.onrender.com"
    }
  },
  {
    title: "FSOpen Pokedex",
    description: "Full-stack Pokemon Pokedex with search and browse functionality",
    tech: ["React", "Axios", "React Router", "Node.js", "Express.js", "PostgreSQL", "Sequelize / Knex"],
    icon: Database,
    image: taskQueueImage,
    details: {
      challenge: "Providing a searchable, full-stack application to browse Pokemon efficiently.",
      solution: "Implemented a React frontend with routing and API calls, and a PostgreSQL backend with Sequelize/Knex ORM for data handling.",
      impact: "Allowed users to search and view Pokemon data seamlessly, providing a smooth user experience.",
      metrics: ["Full-stack implementation", "Search functionality", "Responsive UI"],
      link: "https://full-stack-open-pokedex-i3nu.onrender.com"
    }
  },
  {
    title: "Simple Shell",
    description: "Custom UNIX shell implementation executing basic commands",
    tech: ["C", "Linux system calls", "access", "execve", "fork", "wait"],
    icon: Server,
    image: analyticsImage,
    details: {
      challenge: "Building a minimal UNIX shell as part of a system programming curriculum.",
      solution: "Implemented a shell supporting commands like ls, pwd, and custom execution with fork/execve and signal handling.",
      impact: "Gained deep understanding of process management and system calls in Linux.",
      metrics: ["Custom command execution", "Process management", "Signal handling"],
      link: "https://github.com/devonochie/simple_shell-1"
    }
  },
  {
    title: "Shoppulse",
    description: "E-commerce backend API with authentication, product management, and order processing",
    tech: ["Node.js", "Express", "TypeScript", "MongoDB", "JWT", "Bcrypt"],
    icon: Server,
    image: cloudImage,
    details: {
      challenge: "Building a secure and scalable backend for an e-commerce platform.",
      solution: "Implemented JWT-based authentication, role-based access, product catalog CRUD, shopping cart, order processing, and analytics dashboard.",
      impact: "Enabled secure user transactions, real-time sales analytics, and automated daily reporting for admin users.",
      metrics: ["Role-based authentication", "Shopping cart and orders", "Real-time analytics"],
      link: "https://github.com/devonochie/shoppulse"
    }
  },
];
  const skills = [
    { name: "HTML5 & CSS3", level: 95 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "React.js", level: 92 },
    { name: "Responsive & Mobile-First Design", level: 90 },
    { name: "UI/UX Design Principles", level: 88 },
    { name: "MongoDB", level: 80 },
    { name: "Version Control (Git & GitHub)", level: 85 }
  ];

  const blogPosts = [
    {
      title: "Optimizing React Performance",
      excerpt: "Learn strategies to make your React apps faster and more efficient",
      date: "2025-10-01",
      readTime: "7 min read",
      category: "React.js",
      content: `
        <h2>Improving React App Performance</h2>
        <p>React apps can become slow with large component trees or unnecessary re-renders. Here are practical tips to optimize performance.</p>

        <h3>Memoization</h3>
        <p>Use React.memo and useCallback to prevent unnecessary re-renders of components and functions.</p>

        <h3>Code Splitting</h3>
        <p>Split your code using React.lazy and Suspense to load components only when needed, improving initial load time.</p>

        <h3>Optimized State Management</h3>
        <p>Keep state local when possible and avoid deeply nested state updates that trigger large re-renders.</p>

        <h3>Virtualization</h3>
        <p>Use libraries like react-window or react-virtualized to render only visible items in long lists.</p>
      `
    },
    {
      title: "Responsive Design Best Practices",
      excerpt: "Creating interfaces that look and work great on every device",
      date: "2025-09-20",
      readTime: "6 min read",
      category: "UI/UX",
      content: `
        <h2>Responsive Web Design</h2>
        <p>Responsive design ensures users have a seamless experience across all devices. Key practices include:</p>

        <h3>Mobile-First Approach</h3>
        <p>Design for smaller screens first, then progressively enhance for larger devices.</p>

        <h3>Flexible Layouts</h3>
        <p>Use CSS Grid and Flexbox to create layouts that adapt to different screen sizes.</p>

        <h3>Fluid Typography & Media</h3>
        <p>Use relative units like rem and percentages to make text and images scale appropriately.</p>

        <h3>Testing Across Devices</h3>
        <p>Always test your designs on multiple screen sizes and browsers to ensure consistency.</p>
      `
    },
    {
      title: "Modern JavaScript Tips for Frontend Developers",
      excerpt: "Master ES6+ features to write cleaner, more efficient code",
      date: "2025-09-10",
      readTime: "5 min read",
      category: "JavaScript",
      content: `
        <h2>ES6+ Features for Cleaner Code</h2>
        <p>Modern JavaScript introduces powerful features that improve readability and maintainability.</p>

        <h3>Destructuring</h3>
        <p>Simplify accessing object properties and array items with destructuring syntax.</p>

        <h3>Template Literals</h3>
        <p>Use template literals for dynamic strings instead of concatenation.</p>

        <h3>Arrow Functions</h3>
        <p>Write shorter function expressions and maintain proper 'this' binding.</p>

        <h3>Async/Await</h3>
        <p>Handle asynchronous operations in a cleaner, more readable way than Promises chaining.</p>
      `
    },
    {
      title: "Building Accessible Web Interfaces",
      excerpt: "Ensure your web apps are usable by everyone, including users with disabilities",
      date: "2025-08-30",
      readTime: "6 min read",
      category: "Accessibility",
      content: `
        <h2>Accessibility in Frontend Development</h2>
        <p>Accessibility (a11y) is essential for creating inclusive web experiences. Here's how to improve it.</p>

        <h3>Semantic HTML</h3>
        <p>Use proper HTML elements like <code>header</code>, <code>nav</code>, and <code>button</code> for meaningful structure.</p>

        <h3>Keyboard Navigation</h3>
        <p>Ensure all interactive elements are reachable and usable via keyboard.</p>

        <h3>ARIA Attributes</h3>
        <p>Use ARIA roles and labels to provide context for assistive technologies.</p>

        <h3>Color Contrast & Text</h3>
        <p>Check color contrast ratios and provide scalable font sizes for readability.</p>
      `
    },
    {
      title: "Deploying Frontend Apps with Vercel & Netlify",
      excerpt: "Learn how to quickly deploy your React or static sites to the cloud",
      date: "2025-08-15",
      readTime: "5 min read",
      category: "Deployment",
      content: `
        <h2>Frontend Deployment Made Easy</h2>
        <p>Deploying your frontend apps has never been easier with platforms like Vercel and Netlify.</p>

        <h3>Vercel</h3>
        <p>Automatic builds for React, Next.js, and other frameworks with zero configuration.</p>

        <h3>Netlify</h3>
        <p>Continuous deployment from Git repositories, with serverless functions support.</p>

        <h3>Best Practices</h3>
        <ul>
          <li>Optimize assets and bundle sizes</li>
          <li>Set proper cache headers for performance</li>
          <li>Enable HTTPS and redirects for security</li>
        </ul>
      `
    }
  ];


  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <FloatingNav />
      <BackToTop />
      
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div ref={heroRef} className="relative z-10 text-center max-w-5xl mx-auto animate-fade-in">
          <div className="inline-block mb-6">
            <span className="font-mono text-sm text-primary px-4 py-2 rounded-full border border-primary/30 bg-primary/5 glow-cyan">
              &lt;Frontend Software Engineer & Developer/&gt;
            </span>
          </div>
          
          <h1 className="text-6xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Building</span>
            <br />
            <span className="text-foreground">Intuitive And Responsive</span>
            <br />
            <span className="text-gradient">Interfaces</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Building responsive, user-focused interfaces that power seamless digital experiences
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan hover-glow font-medium"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent/10 hover:glow-violet font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Tech Icons */}
          <div className="flex gap-8 justify-center mt-16 text-muted-foreground">
            <div className="flex flex-col items-center gap-2 animate-float">
              <Layers className="w-8 h-8 text-primary" />
              <span className="font-mono text-xs">React.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-float" style={{ animationDelay: "1s" }}>
              <Code2 className="w-8 h-8 text-accent" />
              <span className="font-mono text-xs">HTML, CSS & JavaScript (ES6+)</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-float" style={{ animationDelay: "2s" }}>
              <Database className="w-8 h-8 text-primary" />
              <span className="font-mono text-xs">MongoDB</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-float" style={{ animationDelay: "3s" }}>
              <Smartphone className="w-8 h-8 text-accent" />
              <span className="font-mono text-xs">Responsive & UX-Focused Design</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-glow-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">About</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-8 animate-slide-up">
              <Card className="glass-card p-8 hover-glow flex flex-col items-center">
                <div className="relative mb-6 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img 
                    src={profileImage} 
                    alt="Developer Profile" 
                    className="relative w-48 h-48 rounded-full object-cover border-2 border-primary/30"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-primary">Frontend Developer</h3>
                <p className="font-mono text-sm text-muted-foreground mb-4">Building scalable systems</p>
              </Card>

              <Card className="glass-card p-8 hover-glow">
                <h3 className="text-2xl font-semibold mb-4 text-primary">The Human Side</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I’m deeply passionate about creating interfaces that feel effortless and intuitive. There’s something rewarding about turning complex functionality into seamless, user-friendly experiences that delight people.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I’m not coding, you’ll find me exploring modern frontend frameworks, experimenting with design systems, or building small projects that push the boundaries of web interaction.
                </p>
              </Card>
            </div>

            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-accent">Core Expertise</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm text-foreground">{skill.name}</span>
                        <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="glass-card p-6 border-primary/30 glow-cyan">
                <p className="font-mono text-sm text-muted-foreground mb-2">Philosophy</p>
                <p className="text-lg font-medium text-foreground">
                  "Frontend should guide users, not distract them. Simplicity is the ultimate sophistication."
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="glass-card overflow-hidden hover-glow cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => dispatch(setSelectedProject(index))}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="font-mono text-xs px-3 py-1 rounded-full bg-secondary border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Project Detail Dialog */}
          <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && dispatch(setSelectedProject(null))}>
            <DialogContent className="max-w-4xl glass-card border-primary/30">
              {selectedProject !== null && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-gradient flex items-center gap-3">
                      {createElement(projects[selectedProject].icon, { className: "w-8 h-8 text-primary" })}
                      {projects[selectedProject].title}
                    </DialogTitle>
                    <DialogDescription className="text-base text-muted-foreground">
                      {projects[selectedProject].description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6 mt-4">
                    <div className="relative h-64 rounded-lg overflow-hidden border border-border/50">
                      <img 
                        src={projects[selectedProject].image} 
                        alt={projects[selectedProject].title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      {projects[selectedProject].details.metrics.map((metric, idx) => (
                        <Card key={idx} className="glass-card p-4 text-center border-primary/20">
                          <p className="text-2xl font-bold text-primary mb-1">{metric.split(' ')[0]}</p>
                          <p className="text-xs text-muted-foreground">{metric.split(' ').slice(1).join(' ')}</p>
                        </Card>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">Challenge</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {projects[selectedProject].details.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-accent mb-2">Solution</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {projects[selectedProject].details.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">Impact</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {projects[selectedProject].details.impact}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">Link | Live Demo</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {projects[selectedProject].details.link}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {projects[selectedProject].tech.map((tech) => (
                        <span 
                          key={tech}
                          className="font-mono text-xs px-4 py-2 rounded-full bg-secondary border border-border text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Contact and Blog Section */}
      <section id="blog" className="relative py-32 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,380px] gap-8 items-start">
            {/* Contact Section */}
            <div className="text-center lg:text-left">
              <div className="mb-12 animate-slide-up">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="text-gradient">Let's Connect</span>
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full mx-auto lg:mx-0 mb-6" />
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Whether you want to collaborate on a project or talk about building intuitive web experiences, I’d love to connect.
                </p>
              </div>

              <div className="flex gap-6 justify-center lg:justify-start mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <a 
                  href="mailto:your.email@example.com"
                  className="group"
                >
                  <div className="w-16 h-16 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover-glow transition-all">
                    <Mail className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </a>
                <a 
                  href="https://github.com/leonnieokojie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-16 h-16 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover-glow transition-all">
                    <Github className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </a>
                <a 
                  href="https://linkedin.com/in/okojie-leonnie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-16 h-16 rounded-full bg-card border border-accent/30 flex items-center justify-center hover:bg-accent/10 hover:glow-violet transition-all">
                    <Linkedin className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                </a>
              </div>

              <Card className="glass-card p-8 max-w-md mx-auto lg:mx-0 glow-cyan animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <p className="font-mono text-primary text-sm mb-2">okojieleonnie8@example.com</p>
                <p className="text-muted-foreground text-sm">Open to opportunities, collaborations, and interesting conversations</p>
              </Card>
            </div>

            {/* Blog Sidebar */}
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">
                  <span className="text-gradient">Recent Posts</span>
                </h3>
                <div className="w-16 h-1 bg-primary rounded-full" />
              </div>

              <div className="glass-card p-4 max-h-[600px] overflow-y-auto scrollbar-hide space-y-4">
                {blogPosts.map((post, index) => (
                  <Card 
                    key={post.title}
                    className="glass-card p-4 hover-glow cursor-pointer"
                    onClick={() => dispatch(setSelectedBlogPost(index))}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30">
                        {post.category}
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                      <span className="font-mono">{post.readTime}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Dialog */}
      <Dialog open={selectedBlogPost !== null} onOpenChange={(open) => !open && dispatch(setSelectedBlogPost(null))}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto glass-card border-primary/30">
          {selectedBlogPost !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gradient mb-2">
                  {blogPosts[selectedBlogPost].title}
                </DialogTitle>
                <DialogDescription className="flex items-center gap-4 text-sm flex-wrap">
                  <span className="font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                    {blogPosts[selectedBlogPost].category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPosts[selectedBlogPost].date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="font-mono text-muted-foreground">
                    {blogPosts[selectedBlogPost].readTime}
                  </span>
                </DialogDescription>
              </DialogHeader>
              <div 
                className="prose prose-invert max-w-none mt-6"
                dangerouslySetInnerHTML={{ __html: blogPosts[selectedBlogPost].content }}
              />
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="relative border-t border-border py-8 px-6 bg-background">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-mono">
            © 2025 Frontend Developer. Built with ❤️ and React
          </p>
          <div className="flex gap-4 text-muted-foreground text-sm font-mono">
            <span className="text-primary">React.js(JavaScript)</span>
            <span>•</span>
            <span className="text-accent">UI/UX Design</span>
            <span>•</span>
            <span className="text-primary">MongoDB</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
