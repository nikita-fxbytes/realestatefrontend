import React from 'react'
import Banner from '../../components/common/banner/Banner'
import Breadcrumb from '../../components/common/breadcrumb/Breadcrumb'
import AboutSection from './aboutsection/AboutSection'
import Work from './work/Work'
import Team from './team/Team'

const About = () => {
  return (
   <>
   <Banner/>
   <Breadcrumb/>
   <AboutSection/>
   <Work/>
   <Team/>
   </>
  )
}

export default About
