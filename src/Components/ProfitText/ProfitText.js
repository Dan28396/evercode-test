import React, {useEffect, useState} from 'react';
import styles from "./ProfitText.module.css";

function ProfitText({profit, isAbsolute, fontSize = 14}) {
    const [profitClass, setProfitClass] = useState({});
    const [absoluteClass, setAbsoluteClass] = useState({});
    useEffect(() => {
        setProfitClass(() => profit > 0 ? styles.profit : styles.loss);
        setAbsoluteClass(() => isAbsolute ? styles.absolute : styles.percent);
    }, [profit, isAbsolute]);


    return (
        <h2 className={`${profitClass} ${absoluteClass}`}
            style={{fontSize: `${fontSize}px`}}>{isAbsolute && '$'}{Math.abs(profit).toLocaleString('en-US', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        })}{!isAbsolute && '%'}</h2>
    );
}

export default ProfitText;