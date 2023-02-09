import React from 'react'
import Quotes from './Quotes'
import pic1 from '../../images/profile-1.jpg'
import pic2 from '../../images/profile-2.jpg'
import pic3 from '../../images/profile-3.jpg'
import styles from './QuotesSection.module.css';
import picture from '../../images/bg-quotes.png'

const QuotesSection = () => {
    return (
        <div className={styles.place}>
            <img src={picture} className={styles.position}/>
            <Quotes image={pic1}
                quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur.'
                name='Satish Patel'
                position='Founder & CEO Huddle'
            />
            <Quotes image={pic2}
                quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur.'
                name='Bruce McKenzie'
                position='Founder & CEO Huddle'
            />
            <Quotes image={pic3}
                quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur.'
                name='Iva Boyd'
                position='Founder & CEO Huddle'
            />
        </div>
    )
}

export default QuotesSection
