import React from "react";
import Image from 'next/image'
import GoogleIcon from '../../public/GoogleIcon.png'
import styles from '@/styles/modules/Home.module.scss'


export const SignWithGoogle = () => {
    return (
        <button className={styles.signWithGoogle}>
            <Image src={GoogleIcon} alt="Google Icon" width={20} height={20} />
            <p>Continue with Google</p>
        </button>
    );
};
