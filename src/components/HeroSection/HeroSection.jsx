import React from 'react'
import hero from '../../images/illustration-intro.png'
import Button from '../Button/Button'
import styles from './HeroSection.module.css'

const HeroSection = () => {
    return (
        <div className={styles.wrapper}>
            <img src={hero} />
            <h1 className={styles.heading}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            <h3 className={styles.body}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, laudantium! Sit architecto vel accusamus ut obcaecati nostrum harum rem doloribus quisquam, ad perspiciatis ullam enim est deleniti, vitae quasi adipisci. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, laudantium! Sit architecto vel accusamus ut obcaecati nostrum harum rem doloribus quisquam, ad perspiciatis ullam enim est deleniti, vitae quasi adipisci.</h3>
            <Button text='Get started'></Button>
        </div>
    )
}

export default HeroSection;
