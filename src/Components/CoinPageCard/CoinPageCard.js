import React from 'react';
import styles from './CoinPageCard.module.css'
import CoinIconName from "../CoinIconName/CoinIconName";
import ProfitText from "../ProfitText/ProfitText";
import {useHistory, useParams} from "react-router-dom";

function CoinPageCard({wallet, size}) {
    const history = useHistory();
    const {coinName} = useParams();

    return (
        <div
            className={wallet.name === coinName ? `${styles.card_wrapper} ${styles.active}` : styles.card_wrapper}
            onClick={() => size !== 'big' ? history.push(`/coins/${wallet.name}`) : ''}
            style={{background: size === 'big' && "transparent", border: size === 'big' && "none", cursor: size !== 'big' && 'pointer'}}>
            <CoinIconName wallet={wallet} size={size}/>
            <div className={styles.balance_wrapper}>
                <h2 className={size === 'big' ? styles.card_name_big : styles.card_name}>{wallet.balance}</h2>
                <ProfitText profit={wallet.changePCT24Hour} fontSize={size === 'big' ? 14 : 12}/>
            </div>
        </div>
    );
}

export default CoinPageCard;