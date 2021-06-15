import React from 'react';
import style from './BalanceCard.module.css'
import {useSelector} from "react-redux";
import {selectBalance} from "../../Store/Wallet";



function BalanceCard(props) {
    const balance = useSelector(selectBalance)

    return (
        <div className={style.balance_card_wrapper}>
            <p className={style.balance_card_text}>Your total balance</p>
            <h2 className={style.balance_card_sum}><span
                className={style.dollar_sign}>$</span>{balance.toLocaleString('en-US', {maximumFractionDigits: 2})}</h2>
        </div>
    );
}

export default BalanceCard;