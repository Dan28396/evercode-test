import React from 'react';
import styles from './ChangesCard.module.css'
import {useSelector} from "react-redux";
import {selectTotalProfit} from "../../Store/Wallet";

function ChangesCard(props) {
    const totalProfit = useSelector(selectTotalProfit)

    return (
        <div className={styles.changes_wrapper}>
            <p className={styles.changes_title}>24h Changes</p>
            <p className={totalProfit > 0 ? styles.changes_content_profit : styles.changes_content_loss}>${Math.abs(totalProfit).toLocaleString('en-US', {maximumFractionDigits: 2})}</p>
        </div>
    );
}

export default ChangesCard;