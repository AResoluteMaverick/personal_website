import Header from "../Header/Header";
import CursorTrail from "../assets/CursorTrail";
import styles from './Portfolio.module.css';
import portfolioData from '../assets/portfoliodescription.json';

export default function Portfolio () {

    return (
        <>
        <CursorTrail />
        <Header />
        <div className={styles.portfolioComponent}>
            <div className={styles.portfolioNav}>
                {
                    portfolioData.map(item => (
                        <h3 key={item.id}>{item.title}</h3>
                    ))
                }
            </div>

            <div className={styles.portfolioDisplay}>

            </div>
        </div>
        </>
    )
}