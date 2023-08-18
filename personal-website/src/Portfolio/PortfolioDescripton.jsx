import portfolioData from '../assets/portfoliodescription.json';
import styles from './PortfolioDescription.module.css';

export default function PortfolioDescription () {
    return (
        <>
        <div className={styles.portfolioDescriptionComponent}>
            <div className={styles.imageWrapper}> 

            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.mainContenrWrapper}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={styles.sideContentWrapper}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={styles.footerWrapper}>
                    <div></div>
                    <div></div>
                </div>
                
            </div>
        </div>
        </>
    )
}