import { Link } from "react-router-dom";
import styles from './Header.module.css';

export default function Header () {
    return (
        <header className={styles.headerComponent}>
            <Link to="/" className={styles.logo}>tapi</Link>
            <ul className={styles.navlink}>
                <li className={styles.liLink}><Link to="/">Home</Link></li>
                <li className={styles.liLink}><Link to="/portfolio">Portfolio</Link></li>
                <li className={styles.liLink}><Link to="/contact">Contact</Link></li>
            </ul>
        </header>
    )
}