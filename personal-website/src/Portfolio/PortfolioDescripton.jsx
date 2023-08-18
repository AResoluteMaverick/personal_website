import { useLocation } from 'react-router-dom';
import styles from './PortfolioDescription.module.css';

export default function PortfolioDescription () {
    const location = useLocation();
    const itemData = location.state?.itemData;

    if (!itemData) {
        return <div>Error: Data not found!</div>;
    }

    return (
        <>
        <div className={styles.portfolioDescriptionComponent}>
            <div className={styles.imageWrapper}> 

            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.mainContentWrapper}>
                    <div>{itemData.title}</div>
                    <div>{itemData.objective}</div>
                    <div>{itemData.statement}</div>
                </div>

                <div className={styles.sideContentWrapper}>
                    <div>{itemData.tools}</div>
                    <div>{itemData.userinterface}</div>
                    <div>{itemData.features}</div>
                </div>

                <div className={styles.footerWrapper}>
                    <div>{itemData.challenges}</div>
                    <div>{itemData.websiteLink}</div>
                </div>
                
            </div>

        </div>
        </>
    )
}