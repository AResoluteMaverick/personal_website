import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from "../Header/Header";
import CursorTrail from "../assets/CursorTrail";
import styles from './Portfolio.module.css';
import portfolioData from '../assets/portfoliodescription.json';

export default function Portfolio () {
    const navigate = useNavigate();
    const [selectedItemId, setSelectedItemId] = useState(null);

    return (
        <>
        <CursorTrail />
        <Header />
        <div className={styles.portfolioComponent}>
            <div className={styles.portfolioNav}>
                {portfolioData.map(item => (
                    <div 
                        key={item.id} 
                        className={`${styles.portfolioItemTitle} ${item.id === selectedItemId ? styles.selected : ''}`}
                        onClick={() => {
                            navigate(`project/${item.path}`, { state: { itemData: item } });
                            setSelectedItemId(item.id);
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