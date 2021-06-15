import React from 'react';
import styles from './SearchIcon.module.css'

function NotificationIcon(props) {
    return (
        <>
            <img src='icons/search.svg' alt='Search Icon' className={styles.search_btn}/>
        </>
    );
}

export default NotificationIcon;