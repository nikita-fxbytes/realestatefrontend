import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>We Search For The Perfect Home</h2>
          <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
          <img src="img/about.jpg" alt=""/>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse officia repudiandae ad saepe ex, amet
            neque quod accusamus rem quia magnam magni dolorum facilis ullam minima perferendis? Exercitationem at quaerat
            commodi id libero eveniet harum perferendis laborum molestias quia.</p>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src="img/kyle.jpg" alt="Seller of the month"/>
            <div className="card-body">
              <h5 className="card-title">Seller Of The Month</h5>
              <h6 className="text-secondary">Kyle Brown</h6>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt amet, illo itaque similique repellat.
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection
