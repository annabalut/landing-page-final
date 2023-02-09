import React from 'react'
import styles from './Quotes.module.css'

const Quotes = ({ image, name, position, quote }) => {
    return (
        <div className={styles.width}>
            <p>{quote}</p>
            <div className={styles.alignement}>
                <img src={image} alt="" className={styles.avatar} />
                <div className={styles.space}>
                    <p>{name}</p>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    )
}

export default Quotes
