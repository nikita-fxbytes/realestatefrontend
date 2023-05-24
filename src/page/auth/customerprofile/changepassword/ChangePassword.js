import React from 'react'
import ChangePasswordLogic from './ChangePasswordLogic'

const ChangePassword = () => {
  const {handleChange, handleSubmit, loader, errors} = ChangePasswordLogic();
  return (
    <div className='card'>
      <div className='p-3'>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label >Current Password<span className="text-danger">*</span></label>
            <input  type="password" name="current_password" className="form-control" onChange={handleChange}/>
            {errors.current_password && <label className="text-danger mb-0"> {errors.current_password}</label>}
          </div>
          <div className="form-group">
            <label >New Password<span className="text-danger">*</span></label>
            <input  type="password" name="new_password" className="form-control" onChange={handleChange}/>
            {errors.new_password && <label className="text-danger mb-0"> {errors.new_password}</label>}
          </div>
          <div className="form-group">
            <label>Confirm Password<span className="text-danger">*</span></label>
            <input  type="password" name="confirm_password" className="form-control" onChange={handleChange}/>
            {errors.confirm_password && <label className="text-danger mb-0"> {errors.confirm_password}</label>}
          </div>
          <button type="submit" className="btn btn-secondary btn-block" >Update</button>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
