import React from 'react'
import PropertySlider from './propertyslider/PropertySlider'
import PropertyFields from './propertyfields/PropertyFields'
import PropertyRealtor from './propertyraltor/PropertyRealtor'
import PropertyDetailsLogic from './PropertyDetailsLogic'
import { Link } from 'react-router-dom'
import CommonMessage from '../../helper/messages/CommonMessage'
import Spinner from '../../components/common/spinner/Spinner'

const PropertyDetails = () => {
  const {propertyDetails, loader} = PropertyDetailsLogic();
  const {no_data_found} = CommonMessage
  return (
    <>
      {loader && <Spinner/>}
      {propertyDetails ? 
      <section id="listing" className="py-4">
        <div className="container">
          <Link to="/properties" className="btn btn-light mb-4">Back To Listings</Link>
          <div className="row">
            <div className="col-md-9">
                <PropertySlider/>
                <PropertyFields properties={propertyDetails}/>
              {propertyDetails.description && <div className="row mb-5">
                <div className="col-md-12">
                  {propertyDetails.description??''}
                </div>
              </div>}
            </div>
            <div className="col-md-3">
              <PropertyRealtor propertyId={propertyDetails._id} propertyRealtor={propertyDetails.propertyRealtor} propertyName={propertyDetails.name}/>
            </div>
          </div>
        </div>
      </section> :
      <div className='text-center'>{no_data_found}</div>}
    </>
  )
}

export default PropertyDetails
