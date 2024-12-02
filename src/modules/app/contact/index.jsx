import React from 'react';
import { MainLayout } from 'modules/layouts';
import styles from './styles.module.css';

const Contact = () => {
    return (
        <MainLayout>
            <div className={styles.contactSection}>
                <h2 className={styles.contactSectionTitle}>Get in Touch</h2>
                <div className={styles.contactSectionContainer}>
                    <div className={styles.contactInfo}>
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d761.3992713208378!2d19.91494132327869!3d50.06696850900455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165ba4425bca11%3A0x3250619b07bede7!2sKatedra%20Telekomunikacji%20AGH%2C%20Czarnowiejska%2078%2C%2030-054%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1731938066291!5m2!1spl!2spl"
                                width="600"
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className={styles.info}>
                            <h3>Here you can find us:</h3>
                            <p><strong>Phone:</strong> +48 123 456 789</p>
                            <p><strong>Email:</strong> filipidawid@gmail.com</p>
                            <p><strong>Address:</strong> Czarnowiejska 78, 30-054 Kraków</p>
                            <p><strong>Working Hours:</strong> Mon-Fri: 9am - 6pm</p>
                        </div>
                    </div>

                    <div className={styles.contactFormWrapper}>
                        <form className={styles.contactForm}>
                            <div className={styles.textInput}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" required/>
                            </div>
                            <div className={styles.textInput}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email" required/>
                            </div>
                            <div className={styles.textInput}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Write your message" required></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export { Contact };
