import React from 'react';
import { instagramlogo, facebooklogo, xlogo, gmaillogo } from 'images';
import {SocialImage} from "components/SocialImage";
import {ContactInfo} from "components/ContactInfo";
import styles from './styles.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
                <div className={styles.socialLinks}>
                    <a href="https://instagram.com" target="_blank">
                        <SocialImage image={instagramlogo} alt="Instagram"/>
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <SocialImage image={facebooklogo} alt="Facebook"/>
                    </a>
                    <a href="https://X.com" target="_blank">
                        <SocialImage image={xlogo} alt="X"/>
                    </a>
                </div>
                <ContactInfo />
        </footer>
    )
}

export { Footer };
