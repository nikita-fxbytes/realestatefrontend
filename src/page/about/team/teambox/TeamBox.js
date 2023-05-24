import React from 'react'

const TeamBox = ({team}) => {
  return (
    <>
        <img src="img/kyle.jpg" alt="" className="rounded-circle mb-3"/>
        <h4>{team.name??''}</h4>
        <p className="text-success">
            <i className="fas fa-award text-success mb-3"></i> {team.roleId !=undefined && team.roleId !=null ? team.roleId.name:''}
        </p>
        <hr/>
        <p>
        <i className="fas fa-phone"></i> {team.mobile??''}</p>
        <p>
        <i className="fas fa-envelope-open"></i> {team.email??''}</p>
    </>
  )
}

export default TeamBox
