import React from "react";
import styles from '../styles/modules/Form.module.scss'

export const SignInForm = () => {
    return (
        <form className={styles.form}>
            <span className={`${styles.form_group} animate__animated animate__bounce animate__delay-1s`}>
                <label className={styles.input_label} htmlFor="email">Name</label>
                <input type="email" name="email" id="email" className={styles.input} placeholder="@gmail.com" />
            </span>
            <span className={`${styles.form_group} animate__animated animate__bounce animate__delay-1.5s`}>
                <label className={styles.input_label} htmlFor="email">Password</label>
                <input type="password" name="password" id="password" className={styles.input} placeholder="•••••••••" />
            </span>
            <span className={`${styles.input_footer} ${styles.medium_margin}`}>
                <span >
                    <input type="checkbox" id="remember-user" />
                    <label className={styles.input_label} htmlFor="remember-user">Remember me</label>
                </span>
                <a href="http://">Forgot password</a>

            </span>
            <span className={`${styles.large_margin} animate__animated animate__bounce animate__delay-2s`}>
                <button className={styles.submit_button} type="submit">Login</button>
            </span>
        </form>
    );
};
