import Header from '../Header/Header';
import CursorTrail from '../assets/CursorTrail';
import MorphingSVG from '../assets/morphing/MorphingSVG';
import styles from './Contact.module.css';

export default function Contact () {
    return (
        <>
        <CursorTrail />
        <Header />
        <MorphingSVG />
        <div className={styles.contactComponent}>
            <div className={styles.contactItem}>GitHub</div>
            <div className={styles.contactItem}>official.raph.tapi@gmail.com</div>
            <div className={styles.contactItem}>LinkedIn</div>
        </div>
        </>
    )
}