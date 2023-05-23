import React from 'react'
import { dateFormate } from '../../../helper/CommonFunction';
import PropertyMessage from '../../../helper/messages/PropertyMessage';
const PropertyFields = ({properties}) => {
    const {price, bedrooms, bathrooms, garage, date, sqft, property_realtor} = PropertyMessage;
  return (
    <>
        <div className="row mb-5 fields">
            <div className="col-md-6">
                <ul className="list-group list-group-flush">
                <li className="list-group-item text-secondary">
                    <i className="fas fa-money-bill-alt"></i> {price}:
                    <span className="float-right">{properties.price ? "₹" + properties.price.toLocaleString("en-IN"): 0}</span>
                </li>
                <li className="list-group-item text-secondary">
                    <i className="fas fa-bed"></i> {bedrooms}:
                    <span className="float-right">{properties.bedrooms??''}</span>
                </li>
                <li className="list-group-item text-secondary">
                    <i className="fas fa-bath"></i> {bathrooms}:
                    <span className="float-right">{properties.bathrooms}</span>
                </li>
                <li className="list-group-item text-secondary">
                    <i className="fas fa-car"></i> {garage}:
                    <span className="float-right">{properties.garage??''}
                    </span>
                </li>
                </ul>
            </div>
            <div className="col-md-6">
                <ul className="list-group list-group-flush">
                <li className="list-group-item text-secondary">
                    <i className="fas fa-th-large"></i> {sqft}:
                    <span className="float-right">{properties.squareFeet??''}</span>
                </li>
                <li className="list-group-item text-secondary">
                    <i className="fas fa-square"></i> Lot Size:
                    <span className="float-right">2.5 Acres
                    </span>
                </li>
                <li className="list-group-item text-secondary">
                    <i className="fas fa-calendar"></i> {date}:
                    <span className="float-right">{dateFormate(properties.createdAt)}</span>
                </li>
                <li className="list-group-item text-secondary">
                    <i className="fas fa-bed"></i> {property_realtor}:
                    <span className="float-right">{ properties.propertyRealtor !=undefined && properties.propertyRealtor.name !=undefined ? properties.propertyRealtor.name:''}
                    </span>
                </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default PropertyFields
