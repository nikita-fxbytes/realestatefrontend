import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-4">
      <div className="container">
        <h2>We Search For The Perfect Home</h2>
        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
        <div className="row">
          <div className="col-md-4">
            <img src="img/about.jpg" alt=""/>
          </div>
          <div className="col-md-8">
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse officia repudiandae ad saepe ex, amet
              neque quod accusamus rem quia magnam magni dolorum facilis ullam minima perferendis? Exercitationem at quaerat
              commodi id libero eveniet harum perferendis laborum molestias quia.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
