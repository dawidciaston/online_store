import React from "react";
import styles from './styles.module.css';

const Text = ({ children }) => {
    return (
        <p className={styles.text}>
            {children}
        </p>
    )
}

export { Text };
