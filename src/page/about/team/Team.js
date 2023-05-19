import React from 'react'
import TeamBox from './teambox/TeamBox'

const Team = () => {
  return (
    <section id="team" className="py-5">
    <div className="container">
      <h2 className="text-center">Our Team</h2>
      <div className="row text-center">
        <div className="col-md-4">
          <TeamBox/>
        </div>

        <div className="col-md-4">
        <TeamBox/>
        </div>

        <div className="col-md-4">
        <TeamBox/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Team
