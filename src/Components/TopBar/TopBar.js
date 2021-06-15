import React from 'react';
import {Route} from "react-router-dom";
import SearchIcon from "../SearchIcon/SearchIcon";
import NotificationIcon from "../NotificationIcon/NotificationIcon";
import BackButton from "../BackButton/BackButton";

import styles from './TopBar.module.css'

function TopBar(props) {
    return (
        <div className={styles.topbar_wrapper}>
            <Route exact path='/'>
                <SearchIcon/>
                <NotificationIcon/>
            </Route>
            <Route path='/qwer'>
                <BackButton/>
            </Route>
        </div>
    );
}

export default TopBar;