import React, {useEffect} from 'react';
import styles from './HomePage.module.css'
import {useDispatch, useSelector} from "react-redux";

import TopBar from "../TopBar/TopBar";
import BalanceCard from "../BalanceCard/BalanceCard";
import ChangesCard from "../ChangesCard/ChangesCard";
import CurrencyCard from "../CurrencyCard/CurrencyCard";
import {fetchData, selectAllWallets} from "../../Store/Wallet";

function HomePage(props) {
    const dispatch = useDispatch()
    const wallets = useSelector(selectAllWallets)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch, fetchData])

    return (
        <div className={styles.homepage_wrapper}>
            <TopBar/>
            <BalanceCard/>
            <ChangesCard/>
            {wallets.map((wallet, index) => {
                return (
                    <CurrencyCard key={index} wallet={wallet}/>
                )
            })}
        </div>
    );
}

export default HomePage;