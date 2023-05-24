import React from 'react'
import PropertyRealtorLogic from './PropertyRealtorLogic';
import CommonMessage from '../../../helper/messages/CommonMessage';
import  PropertyMessage from "../../../helper/messages/PropertyMessage";
const PropertyRealtor = ({propertyId, propertyRealtor, propertyName}) => {

  const {property_realtor, make_an_inquiry, property, write_here} = PropertyMessage;

  const {submit, name, email, mobile, message, enter_name, enter_email, enter_mobile} = CommonMessage;

  const {handleSubmit, handleChange,loader, errors, modalVisible, setModalVisible, logInDetails} = PropertyRealtorLogic(propertyId);

  return (
    <>
      <div className="card mb-3">
        <img className="card-img-top" src={process.env.PUBLIC_URL +'/img/kyle.jpg'}  alt="Seller of the month"/>
        <div className="card-body">
          <h5 className="card-title">{property_realtor}</h5>
          <h6 className="text-secondary">{propertyRealtor.name??''}</h6>
        </div>
      </div>
      <button className="btn-primary btn-block btn-lg" onClick={()=>setModalVisible(true)}>{make_an_inquiry}</button>
      {/* Model */}
      {modalVisible && (
        <div className="modal-overlay">
          <div className='modal_width'>
            <div className="modal_model">
              <div className="modal-header">
                <h5 className="modal-title">{make_an_inquiry}</h5>
                <button className="close" onClick={()=>setModalVisible(false)}> 
                    &times;
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="col-form-label">{property}<span className='text-danger'>*</span></label>
                      <input type="text" className="form-control" value={propertyName} disabled onChange={handleChange}/>
                      {errors.property && <label className="text-danger mb-0"> {errors.property}</label>}
                    </div>
                    {!logInDetails && <div className="form-group">
                      <label className="col-form-label">{name}<span className='text-danger'>*</span></label>
                      <input type="text" name="name" className="form-control" placeholder={enter_name} onChange={handleChange}/>
                      {errors.name && <label className="text-danger mb-0"> {errors.name}</label>}
                    </div>}
                    {!logInDetails &&<div className="form-group">
                      <label  className="col-form-label">{email}<span className='text-danger'>*</span></label>
                      <input type="email" name="email" className="form-control" placeholder={enter_email} onChange={handleChange} />
                      {errors.email && <label className="text-danger mb-0"> {errors.email}</label>}
                    </div>}
                    {!logInDetails &&<div className="form-group">
                      <label className="col-form-label">{mobile}<span className='text-danger'>*</span></label>
                      <input type="text" name="mobile" className="form-control" placeholder={enter_mobile} onChange={handleChange}/>
                      {errors.mobile && <label className="text-danger mb-0"> {errors.mobile}</label>}
                    </div>}
                    <div className="form-group">
                      <label  className="col-form-label" >{message}<span className='text-danger'>*</span></label>
                      <textarea name="message" className="form-control" onChange={handleChange} placeholder={write_here}></textarea>
                      {errors.message && <label className="text-danger mb-0"> {errors.message}</label>}
                    </div>
                    <hr/>
                    <button type="submit" className="btn btn-block btn-secondary" disabled={loader}>{submit}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* End */}
    </>
 );
}
export default PropertyRealtor
