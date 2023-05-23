import React from 'react'

const PropertySlider = () => {
  return (
   <>
   <img src={process.env.PUBLIC_URL +'/img/home-1.jpg'} alt="" className="img-main img-fluid mb-3"/>
          
          <div className="row mb-5 thumbs">
            <div className="col-md-2">
              <a href={process.env.PUBLIC_URL +'/img/home-1.jpg'} data-lightbox="home-images">
                <img src={process.env.PUBLIC_URL +'/img/home-1.jpg'} alt="" className="img-fluid"/>
              </a>
            </div>
            <div className="col-md-2">
              <a href={process.env.PUBLIC_URL +'/img/home-1.jpg'} data-lightbox="home-images">
                <img src={process.env.PUBLIC_URL +'/img/home-1.jpg'} alt="" className="img-fluid"/>
              </a>
            </div>
            <div className="col-md-2">
              <a href={process.env.PUBLIC_URL +'/img/home-1.jpg'} data-lightbox="home-images">
                <img src={process.env.PUBLIC_URL +'/img/home-1.jpg'} alt="" className="img-fluid"/>
              </a>
            </div>
            <div className="col-md-2">
              <a href={process.env.PUBLIC_URL +'/img/home-1.jpg'} data-lightbox="home-images">
                <img src={process.env.PUBLIC_URL +'/img/home-1.jpg'} alt="" className="img-fluid"/>
              </a>
            </div>
            <div className="col-md-2">
              <a href={process.env.PUBLIC_URL +'/img/home-1.jpg'} data-lightbox="home-images">
                <img src={process.env.PUBLIC_URL +'/img/home-1.jpg'} alt="" className="img-fluid"/>
              </a>
            </div>
            <div className="col-md-2">
              <a href={process.env.PUBLIC_URL +'/img/home-1.jpg'} data-lightbox="home-images">
                <img src={process.env.PUBLIC_URL +'/img/home-1.jpg'} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
   </>
  )
}

export default PropertySlider
