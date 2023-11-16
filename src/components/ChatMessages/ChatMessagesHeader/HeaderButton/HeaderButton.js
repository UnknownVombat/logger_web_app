import React from 'react';
import 'boxicons'
import styles from './HeaderButton.module.css'

const HeaderButton = () => {
    return (
        <div className={styles.buttonDiv} onClick={() => this.props.history.push('/')}>
            <box-icon name='left-arrow-alt'></box-icon>
        </div>
    );
};

export default HeaderButton;