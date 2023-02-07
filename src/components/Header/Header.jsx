import React from 'react'
import styles from './Header.module.css'
import logo from "../../images/logo.svg"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <Link className={styles.link}>
                <img src={logo} alt="Company logo" />
            </Link>

            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link to="/features" className={styles.link}>Features</Link>
                    </li>
                    <li>
                        <Link to="/team" className={styles.link}>Team</Link>
                    </li>
                    <li>
                        <Link to="/signin" className={styles.link}>Sign In</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
