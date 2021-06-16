import React from 'react';
import SearchIcon from "../SearchIcon/SearchIcon";
import NotificationIcon from "../NotificationIcon/NotificationIcon";
import BackButton from "../BackButton/BackButton";

import styles from './TopBar.module.css'

function TopBar({isMainPage}) {
    return (
        <div className={styles.topbar_wrapper}>
            {isMainPage && <SearchIcon/>}
            {isMainPage && <NotificationIcon/>}
            {!isMainPage && <BackButton/>}
        </div>
    );
}

export default TopBar;