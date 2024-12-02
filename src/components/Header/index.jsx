import React from 'react';
import {MobileNavigation, Navigation} from "components/Navigation";
import styles from './styles.module.css';

const Header = () => {
    return (
        <header className={styles.headline}>
            <div className="logo">
                <h1>DCFB</h1>
            </div>
            <Navigation />
            <MobileNavigation />
        </header>
    );
}

export { Header };
