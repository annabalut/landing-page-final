import React from 'react'
import picture from '../../images/illustration-stay-productive.png';
import styles from './MiddleSection.module.css'

const MiddleSection = () => {
    return (
        <div className={styles.place}>
            <img src={picture} alt="" />
            <div>
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum lorem ipsum</p>
                <a href='' className={styles.underline}>See how fylo works</a>
            </div>
        </div>
    )
}

export default MiddleSection;
