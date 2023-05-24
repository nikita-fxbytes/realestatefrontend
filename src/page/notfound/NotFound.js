import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="bg-light py-5">
        <div className="container">
        <div className="row">
            <div className="col-md-4 mx-auto">
            <div className="card text-center">
                <div className="card-header bg-primary text-white">
                <h1 className='mb-0'>
                    404
                </h1>
                </div>
                <div className="card-body">
                    <h4>Page not found</h4>
                    <p>The requested page does not exist.</p>
                    <Link to="/" className='btn btn-primary'>Back to home</Link>
                </div>
            </div>
            </div>
        </div>
        </div>
  </section>
  )
}

export default NotFound
