import React from 'react'
import IntroCarousel from './IntroCarousel'
import FocusCards from './FocusCards'
import BusinessInfo from './BusinessInfo'
import ServicesTabs from './ServiceTabs'
import PortfolioSection from './PortfolioSection'


const Home = () => {
  return (
    <>
   
    <IntroCarousel />
    <FocusCards />
    <BusinessInfo />
    <ServicesTabs />
    <PortfolioSection/>
 
  </>
  )
}

export default Home