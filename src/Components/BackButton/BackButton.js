import React from 'react';
import styles from "../BackButton/BackButton.module.css";

function BackButton(props) {
    return (
        <>
            <img src='icons/back.svg' alt='Back Icon' className={styles.back_btn}/>
        </>
    );
}

export default BackButton;