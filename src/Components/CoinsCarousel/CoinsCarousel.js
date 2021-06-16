import React, {useRef} from 'react';
import styles from './CoinsCarousel.module.css'
import CoinPageCard from "../CoinPageCard/CoinPageCard";

function CoinsCarousel({wallets}) {
    const carouselWrapperRef = useRef();

    return (
        <div className={styles.scrolling_wrapper} ref={carouselWrapperRef}>
            {wallets.map((wallet, index) => {
                return (
                    <CoinPageCard wallet={wallet} key={index}/>
                )
            })}
        </div>
    )
}

export default CoinsCarousel;