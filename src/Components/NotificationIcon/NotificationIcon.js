import React from 'react';
import styles from './NotificationIcon.module.css'

function NotificationIcon(props) {
    return (
        <>
            <img src='icons/notification.svg' alt='Notification Icon' className={styles.notification_btn}/>
        </>
    );
}

export default NotificationIcon;