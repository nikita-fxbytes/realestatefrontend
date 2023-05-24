import React from 'react'
import ProfileLogic from './ProfileLogic';
import Spinner from '../../../../components/common/spinner/Spinner';

const Profile = () => {
  const {handleChange, handleSubmit, formValues, loader, errors,  formLoader} = ProfileLogic()
  return (
    <div className='card'>
      <div className='p-3'>
      {loader && <Spinner/>}
        {
          formValues && 
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label > Name<span className="text-danger">*</span></label>
                <input  type="text" name="name" className="form-control" value={formValues.name} onChange={handleChange}/>
                {errors.name && <label className="text-danger mb-0"> {errors.name}</label>}
              </div>
              <div className="form-group">
                <label>Email<span className="text-danger">*</span></label>
                <input  type="email" name="email" className="form-control" value={formValues.email} onChange={handleChange}/>
                {errors.email && <label className="text-danger mb-0"> {errors.email}</label>}
              </div>
              <div className="form-group">
                <label >Mobile<span className="text-danger">*</span></label>
                <input  type="text" name="mobile" className="form-control" value={formValues.mobile} onChange={handleChange}/>
                {errors.mobile && <label className="text-danger mb-0"> {errors.mobile}</label>}
              </div>
              <button type="submit" className="btn btn-secondary btn-block" disabled={formLoader} >Update</button>
            </form>
        }
      </div>
    </div>
  )
}

export default Profile;