import React from 'react';
import {useState} from 'react';
import './App.css';

import profilePic from './Assets/ProfilePic.jpeg';

const primaryCol = 'rgb(53, 221, 221)';
const darkPrimaryCol = 'rgb(5, 30, 30)';
const secondaryCol = 'rgb(200, 97, 32)';

function App() {
  const placeholderImage1 = 'https://via.placeholder.com/200';
  const placeholderImage2 = 'https://via.placeholder.com/200';
  const placeholderImage3 = 'https://via.placeholder.com/200';

  return (
    <div style={styles.container}>
      {/* NAVIGATION BAR */}
      <nav style={styles.nav}>
        <a href="#about" style={styles.navLink} className='thin_text primary_secondary_hover'>About</a>
        <a href="#projects" className='thin_text primary_secondary_hover' style={styles.navLink}>Projects</a>
        <a href="#contact" className='thin_text primary_secondary_hover' style={styles.navLink}>Contact</a>
      </nav>

      {/* HERO / TOP SECTION */}
      <header id = "about" style={styles.header} className='breathe-background'>
        <div style={styles.headerContent}>
          <img 
            src={profilePic} 
            alt="Profile"
            className='slightly_enlarge_hover'
            style={styles.profilePic} 
          />
          <div style={styles.tldrContainer}>
            <h1 style={styles.title} className='thick_text'>Soheil Chavoshi</h1>
            <p style={styles.tldrText} className='thin_text'>
              First-year university student passionate about AI, computer vision, 
              and electronics. I love creating projects that merge creativity and technology, 
              from generative AI to custom neural network visualizers.
            </p>
          </div>
        </div>
      </header>

      {/* PROJECTS SECTION */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        
        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>NormalNet</h3>
          <p style={styles.projectDescription}>
            A generative AI model designed to create PBR materials from diffuse textures. 
            This project uses a GAN architecture to produce maps for 3D materials, 
            drastically reducing memory compared to traditional PBR packs.
          </p>
          <p style={styles.skillsUsed}>
            Skills: Python, PyTorch, OpenCV, NumPy, Pandas
          </p>
          <a 
            href="https://github.com/soheilchavo/NormalNet" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.link}
          >
            GitHub Repo
          </a>
        </div>

        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Neural Network Visualizer & Engine</h3>
          <p style={styles.projectDescription}>
            A custom MLP implementation in Java (Processing) achieving over 80% accuracy 
            on the MNIST dataset. Features backpropagation, network serialization, 
            and a user-friendly interface for dataset processing.
          </p>
          <p style={styles.skillsUsed}>
            Skills: Java, Processing
          </p>
          <a 
            href="https://github.com/soheilchavo/NeuralClass" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.link}
          >
            GitHub Repo
          </a>
        </div>

        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Autonomous Firefighter Robot</h3>
          <p style={styles.projectDescription}>
            Designed and built a robot capable of navigating a maze and extinguishing 
            randomly placed candles. Created custom PCBs, soldered components, and 
            programmed ICs to work cohesively for sensor-based navigation.
          </p>
          <p style={styles.skillsUsed}>
            Skills: TraxMaker, KiCad, GreatCowBasic
          </p>
        </div>

        {/* Example of images that "grow" on hover */}
        <div style={styles.imageGallery}>
          <img 
            src={placeholderImage1} 
            alt="Project 1" 
            style={styles.galleryImage}
          />
          <img 
            src={placeholderImage2} 
            alt="Project 2" 
            style={styles.galleryImage}
          />
          <img 
            src={placeholderImage3} 
            alt="Project 3" 
            style={styles.galleryImage}
          />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p style={styles.sectionText}>
          If you’d like to reach out, feel free to send me an email or connect on LinkedIn and GitHub!
        </p>
        <ul style={styles.contactList}>
          <li>Email: <a href="mailto:soheil.chavo@gmail.com" style={styles.link}>soheil.chavo@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/soheilchavo" style={styles.link}>@soheilchavo</a></li>
          {/* Add your LinkedIn or other socials as needed */}
        </ul>
      </section>
    </div>
  );
}

export default App;

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: darkPrimaryCol,
    padding: '1rem',
    position: 'sticky',
    opacity: '98%',
    top: 0,
    zIndex: 999,
  },
  navLink: {
    textDecoration: 'none',
    margin: '0 1rem',
    fontWeight: 'bold',
  },
  header: {
    background: `linear-gradient(135deg, ${primaryCol} 20%, ${secondaryCol})`,
    color: '#fff',
    padding: '2rem 1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  headerContent: {
    maxWidth: '900px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    margin: '1rem',
    objectFit: 'cover',
    border: '3px solid #fff',
  },
  tldrContainer: {
    maxWidth: '500px',
    margin: '1rem',
  },
  title: {
    fontSize: '2.5rem',
    margin: 0,
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    margin: 0,
    marginBottom: '1rem',
  },
  tldrText: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  section: {
    background: `${darkPrimaryCol}`,
    padding: '2rem 1rem',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  sectionText: {
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '2rem',
    textAlign: 'center',
  },
  projectCard: {
    backgroundColor: '#f7f7f7',
    margin: '1rem 0',
    padding: '1rem',
    borderRadius: '8px',
  },
  projectTitle: {
    marginTop: 0,
    marginBottom: '0.5rem',
  },
  projectDescription: {
    marginTop: 0,
    marginBottom: '0.5rem',
  },
  skillsUsed: {
    fontStyle: 'italic',
    marginBottom: '0.5rem',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
  imageGallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem',
  },
  galleryImage: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.3s',
  },
  contactList: {
    listStyle: 'none',
    textAlign: 'center',
    padding: 0,
  },
};
