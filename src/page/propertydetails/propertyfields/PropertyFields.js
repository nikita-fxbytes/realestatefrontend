import React from 'react'

const PropertyFields = () => {
  return (
    <>
        <div class="row mb-5 fields">
        <div class="col-md-6">
            <ul class="list-group list-group-flush">
            <li class="list-group-item text-secondary">
                <i class="fas fa-money-bill-alt"></i> Asking Price:
                <span class="float-right">$490,000</span>
            </li>
            <li class="list-group-item text-secondary">
                <i class="fas fa-bed"></i> Bedrooms:
                <span class="float-right">3</span>
            </li>
            <li class="list-group-item text-secondary">
                <i class="fas fa-bath"></i> Bathrooms:
                <span class="float-right">2</span>
            </li>
            <li class="list-group-item text-secondary">
                <i class="fas fa-car"></i> Garage:
                <span class="float-right">2
                </span>
            </li>
            </ul>
        </div>
        <div class="col-md-6">
            <ul class="list-group list-group-flush">
            <li class="list-group-item text-secondary">
                <i class="fas fa-th-large"></i> Square Feet:
                <span class="float-right">3200</span>
            </li>
            <li class="list-group-item text-secondary">
                <i class="fas fa-square"></i> Lot Size:
                <span class="float-right">2.5 Acres
                </span>
            </li>
            <li class="list-group-item text-secondary">
                <i class="fas fa-calendar"></i> Listing Date:
                <span class="float-right">8/30/2018</span>
            </li>
            <li class="list-group-item text-secondary">
                <i class="fas fa-bed"></i> Realtor:
                <span class="float-right">Kyle Brown
                </span>
            </li>


            </ul>
        </div>
        </div>
    </>
  )
}

export default PropertyFields
