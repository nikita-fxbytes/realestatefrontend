import React from 'react'

const TeamBox = () => {
  return (
    <>
        <img src="img/kyle.jpg" alt="" className="rounded-circle mb-3"/>
        <h4>Kyle Brown</h4>
        <p className="text-success">
            <i className="fas fa-award text-success mb-3"></i> Realtor
        </p>
        <hr/>
        <p>
        <i className="fas fa-phone"></i> (555)-555-5555</p>
        <p>
        <i className="fas fa-envelope-open"></i> kyle@btrealestate.co</p>
    </>
  )
}

export default TeamBox
