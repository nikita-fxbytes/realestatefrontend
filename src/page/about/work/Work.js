import React from 'react'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
    <section id="work" className="bg-dark text-white text-center">
    <h2 className="display-4">We Work For You</h2>
    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit aperiam, unde aliquid at similique!</h4>
    <hr/>
    <Link to="/properties" className="btn btn-secondary text-white btn-lg">View Our Featured Listings</Link>
  </section>
  )
}

export default Work
