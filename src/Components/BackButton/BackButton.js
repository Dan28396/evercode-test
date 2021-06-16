import React from 'react';
import styles from "./BackButton.module.css";
import {Link} from "react-router-dom";

function BackButton(props) {
    return (
        <Link to={'/'} className={styles.link_btn}>
            <img src='/icons/back.svg' alt='Back Icon' className={styles.back_btn}/>
        </Link>
    );
}

export default BackButton;