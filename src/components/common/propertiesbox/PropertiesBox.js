import React from 'react'
import { dateFormate } from '../../../helper/CommonFunction';
import PropertyMessage from '../../../helper/messages/PropertyMessage';
import { NavLink } from 'react-router-dom';

const PropertiesBox = ({property}) => {
    const {sqft, garage, bedrooms, bathrooms, more_info} = PropertyMessage;//Message
    return (
        <NavLink to={'/details/'+ property.slug} className="text-decoration-none">
            <div className="card listing-preview">
            <img className="card-img-top" src="img/home-1.jpg" alt=""/>
            <div className="card-img-overlay">
                <h2>
                    <span className="badge badge-secondary text-white">{property.price ? "₹" + property.price.toLocaleString("en-IN"): 0}</span>
                </h2>
            </div>
            <div className="card-body">
                <div className="listing-heading text-center">
                    <h4 className="text-primary">{property.name??''}</h4>
                    <p>
                        <i className="fas fa-map-marker text-secondary"></i> {property.location ?? ''}
                    </p>
                </div>
                <hr/>
                <div className="row py-2 text-secondary">
                    <div className="col-6">
                        <i className="fas fa-th-large"></i> {sqft}: {property.squareFeet??''}
                    </div>
                    <div className="col-6">
                        <i className="fas fa-car"></i> {garage}: {property.garage??''}
                    </div>
                </div>
                <div className="row py-2 text-secondary">
                    <div className="col-6">
                        <i className="fas fa-bed"></i> {bedrooms}: {property.bedrooms??''}
                    </div>
                    <div className="col-6">
                        <i className="fas fa-bath"></i> {bathrooms}: {property.bathrooms}
                    </div>
                </div>
                <hr/>
                <div className="row py-2 text-secondary">
                    <div className="col-6">
                        <i className="fas fa-user"></i> { property.propertyRealtor.name??''}
                    </div>
                </div>
                <div className="row text-secondary pb-2">
                    <div className="col-6">
                        <i className="fas fa-clock"></i> {dateFormate(property.createdAt)}
                    </div>
                </div>
                 <hr/>
                <NavLink to={'/details/'+ property.slug} className="btn btn-primary btn-block">{more_info}</NavLink>
            </div>
        </div>
        </NavLink>
        
    );
}
export default PropertiesBox;
