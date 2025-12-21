// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Container, Grid, Card, 
  CardContent, CardMedia, Box, IconButton, Paper,
  Tooltip, CardActions, Fab, Divider, Chip
} from '@mui/material';
import { 
  Email as EmailIcon,
  Phone as PhoneIcon,
  GitHub as GitHubIcon,
  Description as DescriptionIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalShipping as LocalShippingIcon,
  Computer as ComputerIcon,
  PointOfSale as PointOfSaleIcon
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import CV (place the PDF file inside src/assets/)
import CV from './assets/Mark Gachanja Ngari CV.pdf';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Refs for smooth scrolling and section tracking
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const researchRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { id: "home", ref: homeRef },
    { id: "skills", ref: skillsRef },
    { id: "projects", ref: projectsRef },
    { id: "research", ref: researchRef },
    { id: "experience", ref: experienceRef },
    { id: "contact", ref: contactRef }
  ];

  // Handle scroll event for nav shadow and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      sectionRefs.forEach(section => {
        if (!section.ref.current) return;
        const rect = section.ref.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // run once to set initial active
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description: "Cross-platform mobile application built with React Native, enabling seamless shopping experiences on both iOS and Android. Features include product browsing, cart management, secure checkout, and real-time order tracking.",
      images: [
        require('./assets/ecomerce1.jpeg'),
        require('./assets/ecomerce2.jpeg'),
        require('./assets/ecomerce3.jpeg'),
        require('./assets/ecomerce4.jpeg'),
        require('./assets/ecomerce5.jpeg')
      ],
      link: "https://github.com/mgachanja",
      tags: ["React Native", "iOS", "Android", "E-Commerce"],
      icon: <ShoppingCartIcon />,
      isMobile: true
    },
    {
      id: 2,
      title: "Delivery Driver App",
      description: "Android delivery management application for order fulfillment and logistics. Built with React Native, featuring route optimization, real-time GPS tracking, order status updates, and delivery confirmation with digital signatures.",
      images: [
        require('./assets/delivery1.jpeg'),
        require('./assets/delivery2.jpeg'),
        require('./assets/delivery3.jpeg'),
        require('./assets/delivery4.jpeg'),
        require('./assets/delivery5.jpeg')
      ],
      link: "https://github.com/mgachanja",
      tags: ["React Native", "Android", "Logistics", "GPS"],
      icon: <LocalShippingIcon />,
      isMobile: true
    },
    {
      id: 3,
      title: "E-Commerce Web Platform",
      description: "Comprehensive web application for desktop shopping with integrated admin panel. Includes inventory management, order processing, analytics dashboard, and customer relationship management tools.",
      image: "/api/placeholder/400/200",
      link: "https://github.com/mgachanja",
      tags: ["React", "Admin Panel", "Web App", "Dashboard"],
      icon: <ComputerIcon />,
      isMobile: false
    },
    {
      id: 4,
      title: "POS Desktop System",
      description: "Point-of-sale desktop application built with React Native and Electron. Manages in-store transactions, inventory, order synchronization from mobile and web platforms, and provides comprehensive sales analytics.",
      image: "/api/placeholder/400/200",
      link: "https://github.com/mgachanja",
      tags: ["Electron", "React Native", "POS", "Desktop"],
      icon: <PointOfSaleIcon />,
      isMobile: false
    }
  ];

  // Research/POC data
  const researchProjects = [
    {
      id: 1,
      title: "Multi-Window Orchestration System",
      description: "Advanced proof-of-concept exploring resilient multi-window management in Chrome browsers with process isolation and multi-monitor distribution capabilities.",
      status: "In Development",
      technologies: ["Vue.js 2", "Window Management API", "BroadcastChannel API", "WebSocket"],
      challenges: [
        "Process independence across window instances",
        "Cross-monitor spatial distribution algorithm",
        "Heartbeat monitoring for fault detection",
        "Browser process management limitations"
      ],
      findings: [
        "Chrome's process allocation varies based on client hardware (RAM/CPU)",
        "Web applications cannot directly control Chrome's process management",
        "Subdomain-based architecture provides guaranteed process isolation",
        "WebSocket communication enables reliable cross-window messaging"
      ],
      solution: "Multi-subdomain architecture with WebSocket-based communication, ensuring each child window operates independently while maintaining synchronized state through a ping-pong heartbeat system."
    }
  ];

  // Skills data
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "React Native", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "SASS", level: 75 },
    { name: "PHP", level: 85 },
    { name: "Laravel", level: 80 },
    { name: "Machine Learning", level: 70 },
    { name: "SQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "UI/UX Design", level: 85 }
  ];

  // Smooth scroll function
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Create a dark theme with full black background
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#7B68EE',
      },
      secondary: {
        main: '#9370DB',
      },
      background: {
        default: '#000000',
        paper: '#131336',
      },
    },
    typography: {
      fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundColor: 'rgba(19, 19, 54, 0.8)',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="galaxy-background">
        <div className="stars-container">
          <div className="stars stars-small"></div>
          <div className="stars stars-medium"></div>
          <div className="stars stars-large"></div>
        </div>

        {/* Starship Cursor */}
        <StarshipCursor />

        {/* Floating Navigation */}
        <header className="floating-nav custom-nav">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid justify-content-between">
              <a className="navbar-brand" href="#home">Mark</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                  <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                  <li className="nav-item"><a className="nav-link" href="#research">Research</a></li>
                  <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                  <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* Side Tracker */}
        <SideTracker 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
          refs={{ homeRef, skillsRef, projectsRef, researchRef, experienceRef, contactRef }} 
        />

        {/* Back to Top Button */}
        <Fab 
          color="primary" 
          size="medium" 
          className="back-to-top"
          onClick={() => scrollToSection(homeRef)}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            display: scrolled ? 'flex' : 'none',
            zIndex: 1000
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>

        {/* Home Section */}
        <section id="home" ref={homeRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', paddingBottom: '80px' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6} className="animated-content">
                <Typography variant="h2" className="glow-text">
                  Mark Gachanja Ngari
                </Typography>
                <Typography variant="h4" className="subtitle">
                  Software Developer & Technical Architect
                </Typography>
                <Box mt={3}>
                  <Typography variant="body1" className="intro-text">
                    Delivering full-stack solutions that drive operational efficiency and market reach. 
                    I architect digital platforms that reduce friction in customer acquisition, 
                    streamline internal workflows, and generate measurable ROI. From conception through 
                    deployment, I build complete ecosystems—web platforms, mobile applications, and 
                    integrated systems—that solve real business problems and scale with organizational growth.
                  </Typography>
                </Box>
                <Box mt={4} display="flex" gap={2}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    onClick={() => scrollToSection(projectsRef)}
                    className="glow-button"
                  >
                    View Projects
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="secondary" 
                    size="large"
                    onClick={() => scrollToSection(contactRef)}
                    className="outline-glow-button"
                  >
                    Contact Me
                  </Button>
                </Box>
                <Box mt={4} display="flex" gap={2}>
                  <Tooltip title="GitHub">
                    <IconButton
                      color="primary"
                      className="social-icon"
                      component="a"
                      href="https://github.com/Mgachanja"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Download CV">
                    <IconButton
                      color="primary"
                      className="social-icon"
                      component="a"
                      href={CV}
                      download="Mark_Gachanja_Ngari_CV.pdf"
                    >
                      <DescriptionIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} className="profile-container animated-content">
                <div className="profile-image-wrapper">
                  <img 
                    src="/api/placeholder/400/400" 
                    alt="Mark Gachanja Ngari - Software Developer" 
                    className="profile-image" 
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} style={{ minHeight: 'auto', paddingTop: '80px', paddingBottom: '80px' }}>
          <Container maxWidth="lg">
            <Typography variant="h3" className="section-title">
              Skills & Expertise
            </Typography>
            <Grid container spacing={4} className="skills-container">
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper className="skill-card">
                    <Box p={3}>
                      <Typography variant="h6" gutterBottom>
                        {skill.name}
                      </Typography>
                      <Box className="skill-bar-container">
                        <Box 
                          className="skill-bar" 
                          sx={{ width: `${skill.level}%` }}
                        ></Box>
                      </Box>
                      <Typography variant="body2" className="skill-level">
                        {skill.level}%
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} style={{ minHeight: 'auto', paddingTop: '80px', paddingBottom: '80px' }}>
          <Container maxWidth="lg">
            <Typography variant="h3" className="section-title">
              Enterprise Solutions Portfolio
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: 'text.secondary' }}>
              Complete multi-platform ecosystem for unified business operations
            </Typography>
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item xs={12} md={6} key={project.id}>
                  <Card className="project-card" sx={{ height: '100%' }}>
                    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, bgcolor: 'rgba(123, 104, 238, 0.1)' }}>
                      {project.icon}
                      <Typography variant="h6">{project.title}</Typography>
                    </Box>
                    
                    {project.isMobile ? (
                      <Box 
                        sx={{ 
                          height: 200,
                          overflow: 'hidden',
                          display: 'flex',
                          bgcolor: '#000'
                        }}
                      >
                        {project.images.map((img, index) => (
                          <Box
                            key={index}
                            sx={{
                              flex: '0 0 20%',
                              height: '100%',
                              backgroundImage: `url(${img})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                          />
                        ))}
                      </Box>
                    ) : (
                      <CardMedia
                        component="img"
                        height="300"
                        image={project.image}
                        alt={project.title}
                      />
                    )}
                    
                    <CardContent>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                        {project.tags.map((tag, index) => (
                          <Chip 
                            key={index} 
                            label={tag} 
                            size="small" 
                            sx={{ bgcolor: 'rgba(123, 104, 238, 0.2)' }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button 
                        size="small" 
                        color="primary" 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-button"
                      >
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        {/* Research Section */}
        <section id="research" ref={researchRef} style={{ minHeight: 'auto', paddingTop: '80px', paddingBottom: '80px' }}>
          <Container maxWidth="lg">
            <Typography variant="h3" className="section-title">
              Technical Research & Innovation
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: 'text.secondary' }}>
              Exploring cutting-edge web technologies and architectural patterns
            </Typography>
            {researchProjects.map((research) => (
              <Paper key={research.id} sx={{ p: 4, mb: 3, bgcolor: 'rgba(19, 19, 54, 0.8)' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h5" gutterBottom>
                    {research.title}
                  </Typography>
                  <Chip 
                    label={research.status} 
                    color="primary" 
                    sx={{ fontWeight: 600 }}
                  />
                </Box>
                
                <Typography variant="body1" paragraph>
                  {research.description}
                </Typography>

                <Box mt={3} mb={2}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                    Technologies & APIs
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {research.technologies.map((tech, index) => (
                      <Chip 
                        key={index} 
                        label={tech} 
                        variant="outlined" 
                        color="primary"
                        size="small"
                      />
                    ))}
                  </Box>
                </Box>

                <Grid container spacing={3} mt={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main' }}>
                      Technical Challenges
                    </Typography>
                    <ul style={{ paddingLeft: '20px' }}>
                      {research.challenges.map((challenge, index) => (
                        <li key={index}>
                          <Typography variant="body2" paragraph>
                            {challenge}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main' }}>
                      Key Findings
                    </Typography>
                    <ul style={{ paddingLeft: '20px' }}>
                      {research.findings.map((finding, index) => (
                        <li key={index}>
                          <Typography variant="body2" paragraph>
                            {finding}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                </Grid>

                <Box mt={3} p={2} sx={{ bgcolor: 'rgba(123, 104, 238, 0.1)', borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                    Solution Architecture
                  </Typography>
                  <Typography variant="body2">
                    {research.solution}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Container>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={experienceRef} style={{ minHeight: 'auto', paddingTop: '80px', paddingBottom: '80px' }}>
          <Container maxWidth="lg">
            <Typography variant="h3" className="section-title">Professional Experience</Typography>
            <Paper className="experience-card">
              <Box p={4}>
                <Typography variant="h5" gutterBottom>Software Developer</Typography>
                <Typography variant="subtitle1" gutterBottom>Cenco Consultaria</Typography>
                <Box className="timeline-indicator">
                  <Typography variant="body2" className="timeline-date">March 2024 - Present</Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  Started as an intern and was offered a full-time position after demonstrating strong
                  technical capabilities and delivering significant value to legacy systems modernization.
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>Key Achievements:</Typography>
                <ul className="responsibility-list">
                  <li>Migrated two critical legacy React applications from versions 16 and 17 to React 18, incorporating TypeScript for enhanced type safety and maintainability</li>
                  <li>Successfully upgraded enterprise mobile application from React Native 0.79 to 0.76, resolving breaking changes and improving performance</li>
                  <li>Architected and implemented new features across existing projects using clean code principles and scalable design patterns</li>
                  <li>Refactored codebases to follow SOLID principles and modern architectural patterns, reducing technical debt by 40%</li>
                  <li>Implemented comprehensive testing strategies and documentation standards that improved team productivity and code quality</li>
                  <li>Collaborated with cross-functional teams to deliver customer-facing features that increased user engagement by 25%</li>
                </ul>
              </Box>
            </Paper>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} style={{ minHeight: 'auto', paddingTop: '80px', paddingBottom: '80px' }}>
          <Container maxWidth="lg">
            <Typography variant="h3" className="section-title">Contact Me</Typography>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Paper className="contact-info-card">
                  <Box p={4}>
                    <Typography variant="h5" gutterBottom>Get In Touch</Typography>
                    <Typography variant="body1" paragraph>
                      Have a project in mind or want to discuss potential opportunities? 
                      Feel free to reach out!
                    </Typography>
                    
                    <Box display="flex" alignItems="center" mb={2}>
                      <IconButton
                        color="primary"
                        size="large"
                        component="a"
                        href="mailto:ngarimarkgachanja@gmail.com"
                      >
                        <EmailIcon />
                      </IconButton>
                      <Typography variant="body1">ngarimarkgachanja@gmail.com</Typography>
                    </Box>
                    
                    <Box display="flex" alignItems="center">
                      <IconButton color="primary" size="large">
                        <PhoneIcon />
                      </IconButton>
                      <Typography variant="body1">+254 768212567</Typography>
                    </Box>
                    
                    <Box mt={4} display="flex" gap={2}>
                      <Tooltip title="GitHub">
                        <IconButton
                          color="primary"
                          className="social-icon"
                          component="a"
                          href="https://github.com/Mgachanja"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Download CV">
                        <IconButton
                          color="primary"
                          className="social-icon"
                          component="a"
                          href={CV}
                          download="Mark_Gachanja_Ngari_CV.pdf"
                        >
                          <DescriptionIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </Paper>
              </Grid>

              {/* Removed contact form per request */}
            </Grid>
          </Container>
        </section>

        <footer className="footer">
          <Container>
            <Typography variant="body2" align="center" className="light-font">© {new Date().getFullYear()} Mark Gachanja Ngari. All rights reserved.</Typography>
          </Container>
        </footer>
      </div>
    </ThemeProvider>
  );
};

// Starship Cursor Component
const StarshipCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div className="starship-cursor" ref={cursorRef}></div>;
};

// Side Tracker Component
const SideTracker = ({ activeSection, scrollToSection, refs }) => {
  const [hoveredSection, setHoveredSection] = useState(null);
  
  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "research", label: "Research" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        right: 30,
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '2px',
          height: '100%',
          bgcolor: 'grey.800',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: -1
        }}
      />
      {navItems.map((item) => (
        <Box key={item.id} sx={{ py: 2.5 }}>
          <Tooltip title={item.label} placement="left">
            <Box
              onClick={() => {
                if (item.id === "home") scrollToSection(refs.homeRef);
                if (item.id === "skills") scrollToSection(refs.skillsRef);
                if (item.id === "projects") scrollToSection(refs.projectsRef);
                if (item.id === "research") scrollToSection(refs.researchRef);
                if (item.id === "experience") scrollToSection(refs.experienceRef);
                if (item.id === "contact") scrollToSection(refs.contactRef);
              }}
              onMouseEnter={() => setHoveredSection(item.id)}
              onMouseLeave={() => setHoveredSection(null)}
              sx={{
                width: activeSection === item.id || hoveredSection === item.id ? 14 : 10,
                height: activeSection === item.id || hoveredSection === item.id ? 14 : 10,
                borderRadius: "50%",
                bgcolor: activeSection === item.id ? "primary.main" : "grey.700",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: hoveredSection === item.id ? "2px solid" : "none",
                borderColor: "primary.main",
                '&:hover': {
                  bgcolor: activeSection === item.id ? "primary.main" : "primary.dark",
                  transform: "scale(1.3)",
                }
              }}
            />
          </Tooltip>
        </Box>
      ))}
    </Box>
  );
};

export default App;
