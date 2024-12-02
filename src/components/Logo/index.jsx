import {logo} from "images";
import React from "react";
import styles from './styles.module.css';

const Logo = () => {
    return (
        <img src={logo} alt="About Us Image" className={styles.aboutLogo}/>
    );
}

export {Logo};
