import React from 'react'
import PropertySlider from './propertyslider/PropertySlider'
import PropertyFields from './propertyfields/PropertyFields'
import PropertyRealtor from './propertyraltor/PropertyRealtor'

const PropertyDetails = () => {
  return (
    <section id="listing" class="py-4">
    <div class="container">
      <a href="listings.html" class="btn btn-light mb-4">Back To Listings</a>
      <div class="row">
        <div class="col-md-9">
          
            <PropertySlider/>
            <PropertyFields/>
          <div class="row mb-5">
            <div class="col-md-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae esse reiciendis officia omnis non rerum dicta
              cupiditate nostrum molestias deserunt aut minus inventore animi atque, consequuntur ad fugit. Possimus culpa
              blanditiis repellendus ipsa similique ullam, natus error dolor harum.
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <PropertyRealtor/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PropertyDetails
