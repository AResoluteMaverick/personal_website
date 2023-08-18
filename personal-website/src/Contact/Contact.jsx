import Header from '../Header/Header';
import styles from './Contact.module.css';

export default function Contact () {
    return (
        <>
        <Header />
        <div className={styles.contactComponent}>
            Here is my contact!
        </div>
        </>
    )
}