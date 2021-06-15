import React from 'react';
import styles from './CurrencyCard.module.css'

function CurrencyCard({wallet}) {
    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card}>
                <div className={styles.card_name_wrapper}>
                    <span className={`icon icon-${wallet.name.toLowerCase()} ${styles.card_icon}`}></span>
                    <div className={styles.card_name}>
                        <h2>{wallet.name}</h2>
                        <p className={styles.card_currency_fullname}>{wallet.fullname}</p>
                    </div>
                </div>
                <div className={styles.card_balance_wrapper}>
                    <h2>{wallet.balance}</h2>
                    <p className={styles.card_balance_dollar}>${(wallet.balance * wallet.price).toLocaleString('en-US', {maximumFractionDigits: 2})}</p>
                </div>
            </div>
            <hr/>
            <div className={styles.card}>
                <div className={styles.card_price}>
                    <h2>${wallet.price.toLocaleString('en-US', {maximumFractionDigits: 2})}</h2>
                    <p className={styles.card_price_text}>Price</p>
                </div>
                <div className={styles.card_balance_wrapper}>
                    <h2 className={wallet.changePCT24Hour > 0 ? styles.card_profit : styles.card_loss}>{wallet.changePCT24Hour.toFixed(2)}%</h2>
                    <p className={styles.card_price_text}>Profit / Loss</p>
                </div>
            </div>
        </div>
    );
}

export default CurrencyCard;