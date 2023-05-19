import React from 'react'

const Breadcrumb = () => {
  return (
    <section id="bc" className="mt-3">
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">
              <i className="fas fa-home"></i> Home</a>
          </li>
          <li className="breadcrumb-item active"> About</li>
        </ol>
      </nav>
    </div>
  </section>
  )
}

export default Breadcrumb
