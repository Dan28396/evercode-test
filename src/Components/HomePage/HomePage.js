import React, {useEffect} from 'react';
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
        <div className='page_wrapper'>
            <TopBar isMainPage={true}/>
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