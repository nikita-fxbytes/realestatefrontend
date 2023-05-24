import React from 'react'
import TeamBox from './teambox/TeamBox'
import TeamLogic from './TeamLogic'
import Spinner from '../../../components/common/spinner/Spinner';

const Team = () => {
  const {loader, teams} = TeamLogic();
  return (
    <>
      {teams.length>0 && <section id="team" className="py-5">
        <div className="container">
          <h2 className="text-center">Our Team</h2>
          {loader && <Spinner/>}
          <div className="row text-center">
            {teams.map((team)=>(
              <div className="col-md-4" key={team._id}>
                <TeamBox team={team}/>
              </div>
            ))}
          </div>
        </div>
      </section>}
    </> 
  )
}

export default Team
