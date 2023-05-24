import React from 'react'
import Banner from '../../components/common/banner/Banner'
import Breadcrumb from '../../components/common/breadcrumb/Breadcrumb'
import AboutSection from './aboutsection/AboutSection'
import Work from './work/Work'
import Team from './team/Team'
import BestSeller from './bestseller/BestSeller'

const About = () => {
  return (
    <>
      <Banner pageTitle={'About BT Real Estate'}/>
      <Breadcrumb pageName={'About'}/>
      <AboutSection/>
      <BestSeller/>
      <Work/>
      <Team/>
    </>
  )
}

export default About
