import { Outlet, useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import CursorTrail from "../assets/CursorTrail";
import styles from './Portfolio.module.css';
import portfolioData from '../assets/portfoliodescription.json';

export default function Portfolio () {
    const navigate = useNavigate();
    
    return (
        <>
        <CursorTrail />
        <Header />
        <div className={styles.portfolioComponent}>
            <div className={styles.portfolioNav}>
                {portfolioData.map(item => (
                    <div 
                        key={item.id} 
                        className={styles.portfolioItemTitle}
                        onClick={() => {
                            navigate(`project/${item.path}`, { state: { itemData: item } });
                        }}
                    >
                        {item.title}
                    </div>
                ))}
            </div>

            <div className={styles.portfolioDisplay}>
                <Outlet />
            </div>
        </div>
        </>
    )
}