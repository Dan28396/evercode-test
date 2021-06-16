import React from 'react';
import styles from "./CoinIconName.module.css";

function CoinIconName({wallet, size}) {
    return (
        <div className={styles.card_wrapper}>
            <span
                className={`icon icon-${wallet.name} ${size === 'big' ? styles.card_icon_big : styles.card_icon}`}></span>
            <div className={styles.card_name_wrapper}>
                <h2 className={size === 'big' ? styles.card_name_big : styles.card_name}>{wallet.name}</h2>
                <p className={size === 'big' ? styles.card_fullname_big : styles.card_fullname}>{wallet.fullname}</p>
            </div>
        </div>
    );
}

export default CoinIconName;