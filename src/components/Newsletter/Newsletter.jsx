import React from 'react'
import Button from '../Button/Button';
import styles from './Newsletter.module.css'

const Newsletter = ({ heading, description }) => {
    return (
        <div  className={styles.alignement}>
            <h3>{heading}</h3>
            <p>{description}</p>
            <div className={styles.line}>
                <input type="text" className={styles.width}/>
                <Button text='Get started for free'></Button>
            </div>
        </div>
    )
}

export default Newsletter;
