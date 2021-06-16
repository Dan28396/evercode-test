import React from 'react';
import styles from './ChangesCard.module.css'
import {useSelector} from "react-redux";
import {selectTotalProfit} from "../../Store/Wallet";
import ProfitText from "../ProfitText/ProfitText";

function ChangesCard(props) {
    const totalProfit = useSelector(selectTotalProfit)

    return (
        <div className={styles.changes_wrapper}>
            <p className={styles.changes_title}>24h Changes</p>
            <ProfitText profit={totalProfit} isAbsolute={true}/>
        </div>
    );
}

export default ChangesCard;