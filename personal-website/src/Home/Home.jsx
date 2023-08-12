import { Link } from "react-router-dom";
import styles from './Home.module.css';

export default function Home () {
    return (
        <header>
            <Link to="/" className={styles.logo}>Logo</Link>
            <ul className={styles.navlink}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </header>
    )
}