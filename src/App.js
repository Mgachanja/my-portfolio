import React, { useState, useEffect, useRef } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Container, Grid, Card, 
  CardContent, CardMedia, TextField, Box, IconButton, Paper,
  Tooltip, CardActions, Fab, CircularProgress, Divider 
} from '@mui/material';
import { 
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Description as DescriptionIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  // Refs for smooth scrolling and section tracking
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { id: "home", ref: homeRef },
    { id: "skills", ref: skillsRef },
    { id: "projects", ref: projectsRef },
    { id: "experience", ref: experienceRef },
    { id: "contact", ref: contactRef }
  ];

  // Form values
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle scroll event for nav shadow and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      sectionRefs.forEach(section => {
        const rect = section.ref.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A responsive web application built with React and Node.js",
      image: "/api/placeholder/400/200",
      link: "https://github.com/markngari"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Mobile app developed with React Native for cross-platform compatibility",
      image: "/api/placeholder/400/200",
      link: "https://github.com/markngari"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Interactive dashboard with data visualization using D3.js and React",
      image: "/api/placeholder/400/200",
      link: "https://github.com/markngari"
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
    { name: "SASS", level: 75 }
  ];

  // Smooth scroll function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setFormStatus('success');
      setFormValues({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1500);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
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
        default: '#000000', // full black background
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
      <a className="navbar-brand" href="#home">🚀 Mark</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>


        {/* Side Tracker */}
        <SideTracker 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
          refs={{ homeRef, skillsRef, projectsRef, experienceRef, contactRef }} 
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
        <section id="home" ref={homeRef} className="section-padding">
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6} className="animated-content">
                <Typography variant="h2" className="glow-text">
                  Mark Gachanja Ngari
                </Typography>
                <Typography variant="h4" className="subtitle">
                  Web & Mobile Developer
                </Typography>
                <Box mt={3}>
                  <Typography variant="body1" className="intro-text">
                    Crafting innovative digital experiences with cutting-edge technologies. 
                    Specialized in creating responsive web applications and seamless mobile 
                    experiences with React and React Native. My passion lies in transforming 
                    concepts into reality through clean code and intuitive design.
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
                  <Tooltip title="LinkedIn">
                    <IconButton color="primary" className="social-icon">
                      <LinkedInIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="GitHub">
                    <IconButton color="primary" className="social-icon">
                      <GitHubIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Download CV">
                    <IconButton color="primary" className="social-icon">
                      <DescriptionIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} className="profile-container animated-content">
                <div className="profile-image-wrapper">
                  <img 
                    src="/api/placeholder/400/400" 
                    alt="Mark Gachanja Ngari" 
                    className="profile-image" 
                  />
                </div>
              </Grid>
            </Grid>
            <Divider className="section-divider" sx={{ my: 4 }} />
          </Container>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="section-padding">
          <Container maxWidth="lg">
            <Typography variant="h3" className="section-title">
              Skills & Expertise
            </Typography>
            <Grid container spacing={4} className="skills-container">
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
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
            <Divider className="section-divider" sx={{ my: 4 }} />
          </Container>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="section-padding">
          <Container maxWidth="lg">
            <Typography variant="h3" className="section-title">
              Projects
            </Typography>
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item xs={12} md={4} key={project.id}>
                  <Card className="project-card">
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button 
                        size="small" 
                        color="primary" 
                        href={project.link}
                        target="_blank"
                        className="project-button"
                      >
                        View Project
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Divider className="section-divider" sx={{ my: 4 }} />
          </Container>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={experienceRef} className="section-padding">
          <Container maxWidth="lg">
            <Typography variant="h3" className="section-title">
              Experience
            </Typography>
            <Paper className="experience-card">
              <Box p={4}>
                <Typography variant="h5" gutterBottom>
                  Web Developer
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Cenco Consultaria
                </Typography>
                <Box className="timeline-indicator">
                  <Typography variant="body2" className="timeline-date">
                    March 2024 - Present
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  Started as an intern and was offered a full-time position after demonstrating strong
                  skills in front-end development. Working on creating responsive web applications
                  and mobile solutions using React and React Native.
                </Typography>
                <Typography variant="body1">
                  Key responsibilities include:
                </Typography>
                <ul className="responsibility-list">
                  <li>Developing responsive user interfaces using React</li>
                  <li>Building cross-platform mobile applications with React Native</li>
                  <li>Collaborating with design and backend teams</li>
                  <li>Implementing modern front-end technologies and best practices</li>
                </ul>
              </Box>
            </Paper>
            <Divider className="section-divider" sx={{ my: 4 }} />
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="section-padding">
          <Container maxWidth="lg">
            <Typography variant="h3" className="section-title">
              Contact Me
            </Typography>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Paper className="contact-info-card">
                  <Box p={4}>
                    <Typography variant="h5" gutterBottom>
                      Get In Touch
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Have a project in mind or want to discuss potential opportunities? 
                      Feel free to reach out!
                    </Typography>
                    
                    <Box display="flex" alignItems="center" mb={2}>
                      <IconButton color="primary" size="large">
                        <EmailIcon />
                      </IconButton>
                      <Typography variant="body1">
                        mark.ngari@example.com
                      </Typography>
                    </Box>
                    
                    <Box display="flex" alignItems="center">
                      <IconButton color="primary" size="large">
                        <PhoneIcon />
                      </IconButton>
                      <Typography variant="body1">
                        +254 700 000 000
                      </Typography>
                    </Box>
                    
                    <Box mt={4} display="flex" gap={2}>
                      <Tooltip title="LinkedIn">
                        <IconButton color="primary" className="social-icon">
                          <LinkedInIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="GitHub">
                        <IconButton color="primary" className="social-icon">
                          <GitHubIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Download CV">
                        <IconButton color="primary" className="social-icon">
                          <DescriptionIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper className="contact-form-card">
                  <Box p={4}>
                    <Typography variant="h5" gutterBottom>
                      Send Me a Message
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        margin="normal"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                      <TextField
                        fullWidth
                        label="Your Email"
                        variant="outlined"
                        margin="normal"
                        name="email"
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                      <TextField
                        fullWidth
                        label="Your Message"
                        variant="outlined"
                        margin="normal"
                        name="message"
                        multiline
                        rows={4}
                        value={formValues.message}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                      <Box mt={2}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          disabled={loading}
                          endIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
                          className="send-button"
                        >
                          {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                        {formStatus === 'success' && (
                          <Typography 
                            variant="body2" 
                            color="primary" 
                            sx={{ mt: 2 }}
                          >
                            Message sent successfully! I'll get back to you soon.
                          </Typography>
                        )}
                      </Box>
                    </form>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* Footer */}
        <footer className="footer">
          <Container>
            <Typography variant="body2" align="center" className="light-font">
              © {new Date().getFullYear()} Mark Gachanja Ngari. All rights reserved.
            </Typography>
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
  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        right: 20,
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        zIndex: 1000,
      }}
    >
      {navItems.map((item) => (
        <Box
          key={item.id}
          onClick={() => {
            if (item.id === "home") scrollToSection(refs.homeRef);
            if (item.id === "skills") scrollToSection(refs.skillsRef);
            if (item.id === "projects") scrollToSection(refs.projectsRef);
            if (item.id === "experience") scrollToSection(refs.experienceRef);
            if (item.id === "contact") scrollToSection(refs.contactRef);
          }}
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            bgcolor: activeSection === item.id ? "primary.main" : "grey.700",
            cursor: "pointer",
          }}
        />
      ))}
    </Box>
  );
};

export default App;
