import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
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
import MorphingSVG from '../assets/morphing/MorphingSVG';

function EigthSection () {
  return (
    <div className={styles.eightWrapper}>
      <MorphingSVG />
      <section className={styles.eightSection + " hidden"}>
      <div className={styles.eightSectionWrapper}>
        <h1 className={styles.diversityTitle}>Embracing Diversity</h1>
        <p className={styles.diversityDescription}> My experiences in universities, companies, and corporations have enriched my perspective and equipped me with a unique blend of technical know-how and human-centric skills. <br /> <br />
        Please feel free to explore my portfolio to learn more about my projects and accomplishments, or contact me directly to discuss how my unique blend of technical and interpersonal expertise can contribute to your organization.
        </p>
        <p className={styles.sideNote}>(P.S I wasn&apos;t able to name all the university organizations because their names are too long and too many! But you can personally ask me about it :P)</p>
      </div>
      <div className={styles.portfolio}>
        <Link to="/portfolio">See my Portfolio!</Link>
      </div>
      </section>
    </div>
  )
}

function SeventhSection () {
  return (
    <section className={styles.seventhSection + " hidden"}>
    <h1 className={styles.academicExperienceDescription}>...but also in Univerisity & Academic Leadership positions!</h1>
     <ul className={styles.academicExperiences}>
      <li><strong className={styles.strongHighlight}>Assistant Vice President for Memberships:</strong> <br /><br />Guided membership strategies and fostered community within the organization.</li>
      <li><strong className={styles.strongHighlight}>Assistant Vice President for Human Resources:</strong> <br /><br />Oversaw recruitment, development, and engagement of organizational members.</li>
      <li><strong className={styles.strongHighlight}>Junior Officer for Sponsorships:</strong> <br /><br />Managed relationships with sponsors and coordinated support for events and programs.</li>
      <li><strong className={styles.strongHighlight}>Junior Officer for External Affairs:</strong> <br /><br />Led initiatives to foster collaboration and partnership with external entities.</li>
      <li><strong className={styles.strongHighlight}>Junior Officer for Internal Affairs:</strong> <br /><br />Ensured smooth internal communication and coordinated organization-wide activities.</li>
     </ul>
    </section>
  )
}

function SixthSection () {
  return (
    <section className={styles.sixthSection + " hidden"}>

     <div className={styles.educationalEngagementWrapper}>
       <h1 className={styles.educationalEngagement}>Educational Engagement:</h1>
       <p className={styles.educationEngagementDescription}>
        During my university years, I took an active role in projects, university-wide programs, and both internal and external organizational affairs. These experiences allowed me to hone my leadership, teamwork, and problem-solving abilities.
       </p>
     </div>

     <div className={styles.professionalEngagementWrapper}>
       <h1 className={styles.professionalEngagement}>Professional Engagement:</h1>
       <p className={styles.professionalEngagementDescription}>
       In the corporate realm, I&apos;ve strategically positioned myself at the nexus of technology, recruitment, and operations. These diverse roles have not only honed my adaptability but also enabled me to appreciate the multifaceted dimensions of the business world!
       </p>
     </div>

    </section>
  )
}

function FifthSection () {
  return (
    <section className={styles.fifthSection + " hidden"}>
     <h1 className={styles.professionalExperienceDescription}>Skills (Well, majorly personal skills) of which I&apos;ve been able to apply in actual professional settings...</h1>
     <ul className={styles.professionalExperiences}>
      <li><strong className={styles.strongHighlight}>Intern at Kaya.ph -</strong> Chosen to assist with website design and community planning, I collaborated with a dynamic team to shape Kaya.ph&apos;s online presence and community growth strategies.</li>
      <li><strong className={styles.strongHighlight}>Recruiter Intern at NarraSoft -</strong> Immersed in a tech-driven environment, I connected with professionals spanning from full-stack developers to UI/UX designers. Beyond recruitment, I played a pivotal role in rejuvenating the website&apos;s design, ensuring its relevance in the tech space.</li>
      <li><strong className={styles.strongHighlight}>Accounts Management Intern at Kahon.ph - </strong> Diving deep into operations, I was entrusted with accounts management and pivotal operational tasks. Whether it was client inquiries, calls, or innovating new programs, I ensured a seamless and effective operational flow.</li>
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
              <h1 className={styles.secondTitle}>Passionate about Technology and Human Connection</h1>
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
        <div className={styles.flexWrapper}>
          <SecondSection />
          <SixthSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SeventhSection />
          <EigthSection />
        </div>
        </>
    )
}