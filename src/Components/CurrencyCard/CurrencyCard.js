import React from 'react';
import {useHistory} from "react-router-dom";
import styles from './CurrencyCard.module.css'
import CoinIconName from "../CoinIconName/CoinIconName";
import ProfitText from "../ProfitText/ProfitText";

function CurrencyCard({wallet}) {
    const history = useHistory();

    return (
        <div className={styles.card_wrapper} onClick={() => history.push(`/coins/${wallet.name}`)}>
            <div className={styles.card}>
                <CoinIconName wallet={wallet}/>
                <div className={styles.card_balance_wrapper}>
                    <h2>{wallet.balance.toLocaleString('en-US', {maximumFractionDigits: 10})}</h2>
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
                    <ProfitText profit={wallet.changePCT24Hour} fontSize={16}/>
                    <p className={styles.card_price_text}>Profit / Loss</p>
                </div>
            </div>
        </div>
    );
}

export default CurrencyCard;