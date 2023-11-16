import React from 'react';
import 'boxicons'
import styles from './HeaderButton.module.css'
import {Link} from "react-router-dom";

const HeaderButton = () => {
    return (
        <Link to='/' className={styles.buttonDiv}>
            <box-icon name='left-arrow-alt'></box-icon>
        </Link>
    );
};

export default HeaderButton;