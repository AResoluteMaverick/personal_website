import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Header from '../Header/Header';
import sky from '../assets/Parallax Assets/SKY.png';
import sun from '../assets/Parallax Assets/SUN.png';
import mountain from '../assets/Parallax Assets/MOUNTAIN.png';
import forest from '../assets/Parallax Assets/FOREST.png';
import birds from '../assets/Parallax Assets/image-from-rawpixel-id-6483181-svg.svg'
import { useSpring, animated } from 'react-spring';
import profileImage from '../assets/images/profilepicture.jpg';
import gitIcon from '../assets/icons/git_icon.png';
import cssIcon from '../assets/icons/css_icon.png';
import githubIcon from '../assets/icons/github_icon.png';
import htmlIcon from '../assets/icons/html5_icon.png';
import jsIcon from '../assets/icons/js_icon.png';
import nodeJSIcon from '../assets/icons/nodejs_icon.png';
import vsIcon from '../assets/icons/vscode_icon.png';
import viteIcon from '../assets/icons/vite_icon.svg';
import webpackIcon from '../assets/icons/webpack_icon.svg';
import reactIcon from '../assets/icons/react_icon.png';


function FifthSection () {
  return (
    <section className={styles.fifthSection + " hidden"}>
     <h1 className={styles.professionalExperienceDescription}>Skills (Well, majorly personal skills) of which I&apos;ve been able to apply in actual professional settings!</h1>
     <ul className={styles.professionalExperiences}>
      <li><strong>Intern at Kaya.ph:</strong> Assisted in the planning and conceptualization of the design of their website and was selected to help shape the future community initiatives.</li>
      <li><strong>Recruiter Intern at NarraSoft:</strong> Engaged with diverse talents such as full-stack developers, cloud engineers, and UI/UX designers. My contributions included recruiting these key professionals, and contributing to a complete company website redesign.</li>
      <li><strong>Accounts Management Intern at Kahon.ph:</strong> Managed accounts and handled internal and external operations including client inquiry handling, calls, and innovative program development.</li>
     </ul>
    </section>
  )
}

function FourthSection () {
  const icons = [
    { src: gitIcon, alt: 'Git' },
    { src: cssIcon, alt: 'CSS' },
    { src: githubIcon, alt: 'GitHub' },
    { src: htmlIcon, alt: 'HTML5' },
    { src: jsIcon, alt: 'JavaScript' },
    { src: nodeJSIcon, alt: 'Node.js' },
    { src: vsIcon, alt: 'Visual Studio Code' },
    { src: viteIcon, alt: 'Vite' },
    { src: webpackIcon, alt: 'Webpack' },
    { src: reactIcon, alt: 'React' },
  ];


  return (
  <section className={styles.fourthSection + " hidden"}>
    <h1 className={styles.computerSkillDescription}>
      ...and Tech skills!
    </h1>

    <div className={styles.computerSkills}>
      {icons.map((icon, index) => (
            <img key={index} src={icon.src} alt={icon.alt} className={styles.icon} />
          ))}
    </div>
    
  </section>
  )
}

function ThirdSection () {
  const skills = [
    'Critical Thinking',
    'Effective Communication',
    'Problem Solving',
    'Adaptability',
    'Collaboration and Teamwork',
    'Leadership',
    'Emotional Intelligence',
    'Conflict Resolution',
    'Decision Making',
    'Project Management',
    'Time Management',
    'Creativity and Innovation',
    'Customer Service Orientation',
    'Attention to Detail',
    'Intercultural Competence',
    'Ethical Judgment',
    'Negotiation Skills',
    'Analytical Thinking',
    'Self-Motivation',
    'Resilience and Stress Management'
  ];

  return (
    <section className={styles.thirdSection + " hidden"}>
      <div className={styles.personalSkillWrapper}>
        <h1 className={styles.personalSkillDescription}>
          Because of my education and background in Psychology and Computer Science, I developed refined personal skills...
        </h1>
        <div className={styles.personalSkillCarousel}>
          {skills.map((skill, index) => (
            <button key={index} className={styles.skillButton}>{skill}</button>
          ))}
          {skills.map((skill, index) => (
            <button key={index + skills.length} className={styles.skillButton}>{skill}</button>
          ))}
        </div>
      </div>
    </section>
  );
  
 
}

function SecondSection () {
    return (
      <section className={styles.secondSection + " hidden"}>

            <div className={styles.secondSectionWrapper}>
              <h2 className={styles.secondTitle}>Passionate about Technology and Human Connection</h2>
              <p className={styles.secondParagraph}> Hi, I&apos;m Raphael Tapiador, a person with background in Computer Science and Psychology from De La Salle University in the Philippines. My fascination with the intersection of technology and human behavior has led me through a diverse journey, bridging the gap between coding and communication in various environments. </p>
            </div>
            <div className={styles.profilePictureWrapper}>
              <img src={profileImage} alt="raphael_tapiador_picture" className={styles.profilePicture} />
            </div>
      </section>
    )
}

function FirstSection () {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [scrollY]);

      const skyProps = useSpring({ transform: `translate3d(0, ${-scrollY * 0.1}px, 0)` });
      const sunProps = useSpring({ transform: `translate3d(0, ${scrollY * 0.4}px, 0)` });
      const mountainProps = useSpring({ transform: `translate3d(0, ${-scrollY * 0.25}px, 0)` });
      const birdsProps = useSpring({ transform: `translate3d(${scrollY * 0.3}px, 0, 0) scale(0.5)` });

    return(
      <section className={styles.firstSection}>
        <animated.img src={sky} className={styles.sky} style={skyProps} />
        <animated.img src={sun} className={styles.sun} style={sunProps} />
        <animated.img src={mountain} className={styles.mountain} style={mountainProps} />
        <animated.img src={forest} className={styles.forest} />
        <animated.img src={birds} className={styles.birds} style={birdsProps}/>
      </section>
    )
}

export default function Home () {
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewport');
        } else {
          entry.target.classList.remove('in-viewport');
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
      if (index >= 2) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section, index) => {
        if (index >= 2) {
          observer.unobserve(section);
        }
      });
      observer.disconnect();
    };
  }, []);


    return (
        <>
        <Header />
        <FirstSection />
        <section className={styles.dummySection}></section>
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        </>
    )
}