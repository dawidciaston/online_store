import React from 'react';
import {gmaillogo} from "images";
import {SocialImage} from "components/SocialImage";
import styles from './styles.module.css';

const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>
            <p>Contact us: +48 123 456 789</p>
            <div className={styles.emailInfo}>
                <SocialImage id="gmail" image={gmaillogo} alt="Gmail Image"/>
                <p>filipidawid@gmail.com</p>
            </div>
        </div>
    )
}

export {ContactInfo};
