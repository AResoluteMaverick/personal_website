import styles from './Home.module.css';
import Header from '../Header/Header';
import sky from '../assets/Parallax Assets/SKY.png';
import sun from '../assets/Parallax Assets/SUN.png';
import mountain from '../assets/Parallax Assets/MOUNTAIN.png';
import forest from '../assets/Parallax Assets/FOREST.png';

function FirstSection () {
    return(
        <section className={styles.firstSection}>
            <img src={sky} className={styles.sky} />
            <img src={sun} className={styles.sun} />
            <img src={mountain} className={styles.mountain} />
            <img src={forest} className={styles.forest} />
        </section>       
    )
}

export default function Home () {
    return (
        <>
        <Header />
        <FirstSection />
        </>
    )
}