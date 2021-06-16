import React from 'react';
import styles from './SearchIcon.module.css'

function SearchIcon(props) {
    return (
        <>
            <img src='/icons/search.svg' alt='Search Icon' className={styles.search_btn}/>
        </>
    );
}

export default SearchIcon;