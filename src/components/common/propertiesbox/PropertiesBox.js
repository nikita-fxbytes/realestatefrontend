import React from 'react'

const PropertiesBox = () => {
  return (
    <div className="card listing-preview">
    <img className="card-img-top" src="img/home-1.jpg" alt=""/>
    <div className="card-img-overlay">
    <h2>
        <span className="badge badge-secondary text-white">$490,000</span>
    </h2>
    </div>
    <div className="card-body">
    <div className="listing-heading text-center">
        <h4 className="text-primary">45 Drivewood Circle</h4>
        <p>
        <i className="fas fa-map-marker text-secondary"></i> Norwood MA, 02062</p>
    </div>
    <hr/>
    <div className="row py-2 text-secondary">
        <div className="col-6">
        <i className="fas fa-th-large"></i> Sqft: 2500</div>
        <div className="col-6">
        <i className="fas fa-car"></i> Garage: 2</div>
    </div>
    <div className="row py-2 text-secondary">
        <div className="col-6">
        <i className="fas fa-bed"></i> Bedrooms: 3</div>
        <div className="col-6">
        <i className="fas fa-bath"></i> Bathrooms: 2</div>
    </div>
    <hr/>
    <div className="row py-2 text-secondary">
        <div className="col-6">
        <i className="fas fa-user"></i> Kyle Brown</div>
    </div>
    <div className="row text-secondary pb-2">
        <div className="col-6">
        <i className="fas fa-clock"></i> 5 days ago</div>
    </div>
    <hr/>
    <a href="listing.html" className="btn btn-primary btn-block">More Info</a>
    </div>
</div>
  )
}

export default PropertiesBox
