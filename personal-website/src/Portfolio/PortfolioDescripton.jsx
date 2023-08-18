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
            <img 
                src={itemData.imagepath} 
                alt={itemData.title}
                className={styles.portfolioImage}
            />
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.mainContentWrapper}>
                    <div><strong className={styles.strongTitle}>Project Title</strong> <br /> <br /> <h2 className={styles.projectTitle}>{itemData.title}</h2></div>
                    <p><strong className={styles.strongTitle}>Objective</strong>  <br /> <br /> {itemData.objective}</p>
                    <p><strong className={styles.strongTitle}>Statement</strong>   <br /> <br /> {itemData.statement}</p>
                    <div className={styles.toolWrapper}>
                    {
                    itemData.tools.map((item,index) =>(
                        <div key={index} className={styles.toolItem}>{item}</div>
                    ))}
                    </div>
                    <p><strong  className={styles.strongTitle}>User Interface</strong>  <br /> <br /> {itemData.userinterface}</p>
                    <p><strong  className={styles.strongTitle}>Features </strong>  <br /> <br /> {itemData.features}</p>
                </div>

                <div className={styles.footerWrapper}>
                    <p> <strong className={styles.strongTitle}>Challenges faced</strong> <br /> <br /> {itemData.challenges}</p>
                    <div className={styles.websiteWrapper}><a href={itemData.websiteLink} target="_blank" rel="noopener noreferrer">{itemData.websiteLink}</a></div>
                </div>
                
            </div>

        </div>
        </>
    )
}