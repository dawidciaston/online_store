import React from 'react';
import { MainLayout } from 'modules/layouts';
import styles from './styles.module.css';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        // form submit handler
        // logic related to form submission
    }

    return (
        <MainLayout>
            <div className={styles.loginSection}>
                <h1>Log In</h1>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <div className={styles.inputContainer}>
                        <i className="fas fa-user"></i>
                        <input type="text" id="username" name="username" placeholder="Enter your username" required/>
                    </div>
                    <label htmlFor="password">Password</label>
                    <div className={styles.inputContainer}>
                        <i className="fas fa-lock"></i>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required/>
                    </div>
                    <button type="submit" className={styles.loginButton}>Log In</button>
                    <div className={styles.additionalOptions}>
                        <a href="#">Forgot your password?</a>
                        <a href="#">Sign up</a>
                    </div>
                </form>
            </div>
        </MainLayout>
    )
}

export { Login };
