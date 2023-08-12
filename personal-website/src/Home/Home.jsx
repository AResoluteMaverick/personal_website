import styles from './Home.module.css';
import Header from '../Header/Header';
import sky from '../assets/Parallax Assets/SKY.png';
import sun from '../assets/Parallax Assets/SUN.png';
import mountain from '../assets/Parallax Assets/MOUNTAIN.png';
import forest from '../assets/Parallax Assets/FOREST.png';
import { useRef } from 'react';

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
        <SecondSection />
        </>
    )
}