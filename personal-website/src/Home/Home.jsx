import styles from './Home.module.css';
import Header from '../Header/Header';
import sky from '../assets/Parallax Assets/SKY.png';
import sun from '../assets/Parallax Assets/SUN.png';
import mountain from '../assets/Parallax Assets/MOUNTAIN.png';
import forest from '../assets/Parallax Assets/FOREST.png';
import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from 'react';

function SecondSection () {
    return (
        <section className={styles.secondSection}>
            <h2 className={styles.secondTitle}>Second Section</h2>
            <p className={styles.secondParagraph}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et.  <br />  <br />Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.  
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et.  <br />  <br /> Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.    <br /> <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et.  <br />   <br /> Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.  
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et. Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.  <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et.  <br />  <br />Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.  
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et.  <br />  <br /> Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.    <br /> <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et.  <br />   <br /> Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.  
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et. Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.  <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et.  <br />  <br /> Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.    <br /> <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et.  <br />   <br /> Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.  
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et. Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.  <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et.  <br />  <br />Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.  
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et.  <br />  <br /> Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.    <br /> <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et.  <br />   <br /> Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.  
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi debitis cupiditate omnis, ducimus officia et. Corporis, fuga excepturi quaerat nisi voluptas dicta harum iste, ab quo, magni quibusdam eaque officiis.  <br />
            </p>
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
      const mountainProps = useSpring({ transform: `translate3d(0, ${-scrollY * 0.2}px, 0)` });

    return(
      <section className={styles.firstSection}>
        <animated.img src={sky} className={styles.sky} style={skyProps} />
        <animated.img src={sun} className={styles.sun} style={sunProps} />
        <animated.img src={mountain} className={styles.mountain} style={mountainProps} />
        <h2 className={styles.greetings}>Welcome to my Website</h2>
        <animated.img src={forest} className={styles.forest} />
      </section>
    )
}

export default function Home () {
    return (
        <>
        <Header />
        <FirstSection />
        <SecondSection />
        </>
    )
}