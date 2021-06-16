import React, {useEffect} from 'react';
import TopBar from "../TopBar/TopBar";
import {useDispatch, useSelector} from "react-redux";
import {fetchData, fetchHistoricalData, selectAllWallets} from "../../Store/Wallet";
import CoinsCarousel from "../CoinsCarousel/CoinsCarousel";
import {useParams} from "react-router-dom";
import CoinPageCard from "../CoinPageCard/CoinPageCard";
import ChartComponent from "../ChartComponent/ChartComponent";

function CoinPage(props) {
    const dispatch = useDispatch()
    const wallets = useSelector(selectAllWallets)
    const {coinName} = useParams()

    useEffect(() => {
        dispatch(fetchData())
        dispatch(fetchHistoricalData(coinName))
    }, [coinName, dispatch])

    return (
        <div className='page_wrapper'>
            <TopBar isMainPage={false}/>
            <CoinsCarousel wallets={wallets}/>
            {wallets.length > 0 &&
            <CoinPageCard wallet={wallets.find(wallet => wallet.name === coinName)} size={'big'}/>}
            {<ChartComponent/>}
        </div>
    );
}

export default CoinPage;