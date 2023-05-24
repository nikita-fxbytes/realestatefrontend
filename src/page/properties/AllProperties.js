import React from 'react'
import Properties from './properties/Properties'
import Banner from '../../components/common/banner/Banner'
import Breadcrumb from '../../components/common/breadcrumb/Breadcrumb'

const AllProperties = () => {
  return (
   <>
      <Banner pageTitle={'Browse Our Properties'}/>
      <Breadcrumb pageName={'Properties'}/>
      <Properties/>
   </>
  )
}

export default AllProperties
