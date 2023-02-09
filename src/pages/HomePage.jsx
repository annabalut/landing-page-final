import React from 'react'
import Button from '../components/Button/Button'
import HeroSection from '../components/HeroSection/HeroSection'
import Icon from '../components/IconSection/Icon'
import IconSection from '../components/IconSection/IconSection'
import MainTemplate from '../components/MainTemplate/MainTemplate'
import MiddleSection from '../components/MiddleSection/MiddleSection'
import Newsletter from '../components/Newsletter/Newsletter'
import QuotesSection from '../components/Quotes/QuotesSection'

const HomePage = () => {
  return (
    <MainTemplate>
        <HeroSection/> 
        <IconSection/>
        <MiddleSection/>
        <QuotesSection/>
        <Newsletter heading='Get early access today' description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>
        
    </MainTemplate>
  )
}

export default HomePage
