import React, { useState, useEffect } from 'react';
import './App.css';

/* Replace these with your actual imports */
import profilePic from './Assets/ProfilePic.jpeg';
import normalNetImage1 from './Assets/NormalNetArch.png';
import normalNetImage2 from './Assets/NormalNetShowcase.png';
import normalNetImage3 from './Assets/NormalNetMaps.png';
import neuralClassImage1 from './Assets/NeuralClassNet.png';
import neuralClassImage2 from './Assets/NeuralClassParameters.png';
import firefighterImage1 from './Assets/FirefighterPCB.png';
import firefighterImage2 from './Assets/FirefighterBoard.png';
import firefighterImage3 from './Assets/FirefighterRobot.png';

/* Color variables */
const primaryCol = 'rgb(53, 221, 221)';
const darkPrimaryCol = 'rgb(5, 30, 30)';
const darkPrimaryCol2 = 'rgb(25, 40, 40)';
const darkPrimaryCol3 = 'rgb(55, 70, 70)';
const secondaryCol = 'rgb(200, 80, 66)';

function App() {
  // Track which image (if any) is enlarged in the NormalNet card
  const [enlarged, setEnlarged] = useState(null);

  // Toggle which image is enlarged
  const handleImageClick = (img) => {
    if (enlarged === img) {
      setEnlarged(null); // if the same image is clicked again, shrink it
    } else {
      setEnlarged(img);
    }
  };

  useEffect(() => {
    document.title = 'Soheil Chavoshi Portfolio';
  }, []);

  return (
    <div style={styles.container}>
      {/* NAVIGATION BAR */}
      <nav style={styles.nav}>
        <a href="#about" style={styles.navLink} className="smooth_scroll thin_text primary_secondary_hover">
          About
        </a>
        <a href="#softwareprojects" style={styles.navLink} className="smooth_scroll thin_text primary_secondary_hover">
          Software Projects
        </a>
        <a href="#hardwareprojects" style={styles.navLink} className="smooth_scroll thin_text primary_secondary_hover">
          Hardware Projects
        </a>
        <a href="#contact" style={styles.navLink} className="smooth_scroll thin_text primary_secondary_hover">
          Contact
        </a>
      </nav>

      {/* HERO / TOP SECTION */}
      <header id="about" style={styles.header} className="breathe-background">
        <div style={styles.headerContent}>
          <img
            src={profilePic}
            alt="Profile"
            className="slightly_enlarge_hover"
            style={styles.profilePic}
          />
          <div style={styles.tldrContainer}>
            <h1 style={styles.title} className="thick_text">
              Soheil Chavoshi
            </h1>
            <p style={styles.tldrText} className="thin_text">
              First-year Computer Engineering student at Queen's University.
              I love programming, robotics, 3d Printing, and just creating cool stuff. 
              Check out some of my projects below, and reach out using my email.
            </p>
          </div>
        </div>
      </header>

      {/* PROJECTS SECTION */}
      <section id="softwareprojects" style={styles.section}>
        <h2 style={styles.sectionTitle} className="type_effect futuristic_text primary_secondary_hover">
          Software Projects
        </h2>

        {/* NormalNet Card with Freeform Images */}
        <div style={styles.projectCard}>
          {/* Left Column (Text) */}
          <div style={styles.leftColumn}>
            <h3 style={styles.projectTitle} className="thick_text">
              NormalNet - Generative ML Model
            </h3>
            <p style={styles.projectDescription} className="thin_text">
              A <mark className='marked_quaternary thick_text'>Generative AI model</mark> created with <mark className='marked_tertiary thick_text'>PyTorch</mark> and <mark className='marked_tertiary thick_text'>NumPy</mark>. 
              <br></br>
              Designed to create PBR materials from diffuse textures.This project uses a <mark className='marked_quaternary thick_text'>GAN architecture</mark> to
              produce maps for 3D materials, <mark className='marked_primary thick_text'> reducing memmory ussage by up to 5x as
              traditional methods </mark> of storing large PBR packs. <br></br> <br></br>
              The project is available on GitHub as an open-source means for users to
              train their own models, as well as a <mark className='marked_tertiary thick_text'>Blender</mark> plugin created with <mark className='marked_tertiary thick_text'>Python</mark> to 
              empower 3D artists to create professional renders fast.
            </p>
            <a
              href="https://github.com/soheilchavo/NormalNet"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              className='thick_text'
            >
              GitHub Repo
            </a>
          </div>

          {/* Right Column (Freeform Images) */}
          <div style={styles.rightColumn}>
            <div style={styles.imagesContainer}>
              <img
                src={normalNetImage1}
                alt="NormalNet Image 1"
                onClick={() => handleImageClick('image1')}
                style={{
                  ...styles.freeformImage1,
                  ...(enlarged === 'image1' ? styles.enlargedImage : {}),
                }}
                className="slightly_enlarge_hover float_y"
                title="Click Me!"
              />
              <img
                src={normalNetImage2}
                alt="NormalNet Image 2"
                onClick={() => handleImageClick('image2')}
                style={{
                  ...styles.freeformImage2,
                  ...(enlarged === 'image2' ? styles.enlargedImage : {}),
                }}
                className="slightly_enlarge_hover float_y"
                title="Click Me!"
              />
              <img
                src={normalNetImage3}
                alt="NormalNet Image 3"
                onClick={() => handleImageClick('image3')}
                style={{
                  ...styles.freeformImage3,
                  ...(enlarged === 'image3' ? styles.enlargedImage : {}),
                }}
                className="slightly_enlarge_hover float_y"
                title="Click Me!"
              />
            </div>
          </div>
        </div>
        {/* NeuralClass Card with Freeform Images */}
        <div style={styles.projectCard}>
          {/* Left Column (Text) */}
          <div style={styles.leftColumn}>
            <h3 style={styles.projectTitle} className="thick_text">
              NeuralClass: Custom Neural Network Engine and Visualizer
            </h3>
            <p style={styles.projectDescription} className="thin_text">
              NeuralClass is a <mark className='marked_primary thick_text'>ML software</mark> created in <mark className='marked_tertiary thick_text'>Processing Java</mark>. Users are able
              to create their own <mark className='marked_secondary thick_text'>MLP's and train them on any dataset</mark>. The project uses no
              dependencies, and all algorithms were programmed from scratch, including backpropagation.
              <br></br><br></br>
              <mark className='marked_quaternary thick_text'>Achieved 80% accuracy on the validation dataset for MNIST.</mark>
            </p>
            <a
              href="https://github.com/soheilchavo/NeuralClass"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              className='thick_text'
            >
              GitHub Repo
            </a>
          </div>

          {/* Right Column (Freeform Images) */}
          <div style={styles.rightColumn}>
            <div style={styles.imagesContainer}>
              <img
                src={neuralClassImage1}
                alt="NeuralClass Image 1"
                onClick={() => handleImageClick('image1')}
                style={{
                  ...styles.freeformImage4,
                  ...(enlarged === 'image1' ? styles.enlargedImage : {}),
                }}
                className="slightly_enlarge_hover float_y"
                title="Click Me!"
              />
              <img
                src={neuralClassImage2}
                alt="NeuralClass Image 2"
                onClick={() => handleImageClick('image3')}
                style={{
                  ...styles.freeformImage5,
                  ...(enlarged === 'image3' ? styles.enlargedImage : {}),
                }}
                className="slightly_enlarge_hover float_y"
                title="Click Me!"
              />
            </div>
          </div>
        </div>
      </section>


      {/* HARDWARE PROJECTS SECTION */}
      <section id="hardwareprojects" style={styles.section}>
        <h2 style={styles.sectionTitle} className="type_effect futuristic_text primary_secondary_hover">
          Hardware Projects
        </h2>

        {/* NormalNet Card with Freeform Images */}
        <div style={styles.projectCard}>
          {/* Left Column (Text) */}
          <div style={styles.leftColumn}>
            <h3 style={styles.projectTitle} className="thick_text">
              Autonomous Firefighter Robot
            </h3>
            <p style={styles.projectDescription} className="thin_text">
              Designed three <mark className='marked_primary thick_text'>PCBs</mark>, including a motherboard, motor board, and sensor board, using <mark className='marked_tertiary thick_text'>TraxMaker</mark> and <mark className='marked_tertiary thick_text'>KiCad</mark>
              , <mark className='marked_secondary thick_text'>Soldered components</mark>, built the robot's body through woodworking, debugged sensors and components with a multimeter.
              <br></br><br></br>
              Programmed IC’s in <mark className='marked_quaternary thick_text'>C</mark> to function cohesively, and
              developed a maze-solving algorithm that enabled the robot to navigate and extinguish randomly placed candles

            </p>
          </div>

          {/* Right Column (Freeform Images) */}
          <div style={styles.rightColumn}>
            <div style={styles.imagesContainer}>
              <img
                src={firefighterImage1}
                alt="Firefighter Image 1"
                onClick={() => handleImageClick('image1')}
                style={{
                  ...styles.freeformImage1,
                  ...(enlarged === 'image1' ? styles.enlargedImage : {}),
                }}
                className="slightly_enlarge_hover float_y"
                title="Click Me!"
              />
              <img
                src={firefighterImage2}
                alt="Firefighter Image 1"
                onClick={() => handleImageClick('image2')}
                style={{
                  ...styles.freeformImage2,
                  ...(enlarged === 'image2' ? styles.enlargedImage : {}),
                }}
                className="slightly_enlarge_hover float_y"
                title="Click Me!"
              />
              <img
                src={firefighterImage3}
                alt="Firefighter Image 3"
                onClick={() => handleImageClick('image3')}
                style={{
                  ...styles.freeformImage3,
                  ...(enlarged === 'image3' ? styles.enlargedImage : {}),
                }}
                className="slightly_enlarge_hover float_y"
                title="Click Me!"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={styles.contactSection}>
        <h2 style={styles.sectionTitle} className="type_effect futuristic_text primary_secondary_hover">Contact</h2>
        <p style={styles.sectionText} className='thin_text'>
          If you’d like to reach out, feel free to send me an email or connect on LinkedIn and GitHub!
        </p>
        <ul style={styles.contactList} className='thin_text'>
          <li>
            Email:{' '}
            <a href="mailto:soheil.chavo@gmail.com" style={styles.link}>
              soheil.chavo@gmail.com
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a href="https://github.com/soheilchavo" style={styles.link}>
              @soheilchavo
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/soheil-chavoshi-b436a41a1/" style={styles.link}>
              @Soheil Chavoshi
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;

/* Inline styles for demonstration; 
   consider moving these into a separate CSS file or using a CSS framework. */
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
  tldrText: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  section: {
    background: darkPrimaryCol2,
    padding: '2rem 1rem',
    margin: '0 auto',
  },
  contactSection: {
    background: darkPrimaryCol,
    color: 'white',
    padding: '2rem 1rem',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '3rem',
    marginBottom: '2rem',
    marginTop: '0rem',
    textAlign: 'center',
  },
  sectionText: {
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '2rem',
    textAlign: 'center',
  },
  contactList: {
    listStyle: 'none',
    textAlign: 'center',
    padding: 0,
  },

  /* Project Card Styles */
  projectCard: {
    backgroundColor: darkPrimaryCol3,
    margin: '1rem 0',
    padding: '1rem',
    borderRadius: '8px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
  },
  leftColumn: {
    flex: '1',
    marginRight: '1rem',
    color: '#fff',
  },
  rightColumn: {
    flex: '1',
    position: 'relative', // needed for absolute positioning of images
  },
  imagesContainer: {
    width: '100%',
    height: '300px', // adjust as needed
    position: 'relative',
  },
  projectTitle: {
    marginTop: 0,
    marginBottom: '0.5rem',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'underline 1px'
  },
  projectDescription: {
    marginTop: 0,
    marginBottom: '0.5rem',
    color: 'white',
    lineHeight: '200%'
  },
  skillsUsed: {
    fontStyle: 'italic',
    marginBottom: '0.5rem',
    color: secondaryCol,
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },

  /* Freeform Images */
  freeformImage1: {
    position: 'absolute',
    top: '2%',
    left: '9%',
    width: '40%',
    height: 'auto',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.3s, width 0.3s, left 0.3s, top 0.3s',
    boxShadow: '0 5px 8px rgba(0,0,0,0.5)',
    zIndex: 10
  },
  freeformImage2: {
    position: 'absolute',
    top: '50%',
    left: '35%',
    width: '30%',
    height: 'auto',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.3s, width 0.3s, left 0.3s, top 0.3s',
    boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
    zIndex: 10
  },
  freeformImage3: {
    position: 'absolute',
    top: '0px',
    left: '55%',
    width: '30%',
    height: 'auto',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.3s, width 0.3s, left 0.3s, top 0.3s',
    boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
    zIndex: 10
  },
  freeformImage4: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    width: '40%',
    height: 'auto',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.3s, width 0.3s, left 0.3s, top 0.3s',
    boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
    zIndex: 10
  },
  freeformImage5: {
    position: 'absolute',
    top: '0%',
    left: '50%',
    width: '20%',
    height: 'auto',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.3s, width 0.3s, left 0.3s, top 0.3s',
    boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
    zIndex: 10
  },
  enlargedImage: {
    zIndex: 999,
    transform: 'scale(1.6)',
  },
};
