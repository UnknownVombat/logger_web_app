import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from "../Header/Header";
import styles from './Layout.module.css'

const Layout = () => {
    return (
        <div className={styles.Layout}>
            <Header />
            <div className={styles.Outlet}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;