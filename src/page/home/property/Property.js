import React from 'react'
import PropertiesBox from '../../../components/common/propertiesbox/PropertiesBox'

const Property = () => {
  return (
    <section id="listings" className="py-5">
        <div className="container">
            <h3 className="text-center mb-3">Latest Listings</h3>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                    <PropertiesBox/>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <PropertiesBox/>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <PropertiesBox/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Property
