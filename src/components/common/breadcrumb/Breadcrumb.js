import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({pageName}) => {
  return (
    <section id="bc" className="mt-3">
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="fas fa-home"></i> Home</Link>
          </li>
          <li className="breadcrumb-item active"> {pageName}</li>
        </ol>
      </nav>
    </div>
  </section>
  )
}

export default Breadcrumb
