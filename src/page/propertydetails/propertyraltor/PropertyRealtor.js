import React from 'react'

const PropertyRealtor = () => {
  return (
   <>
   <div class="card mb-3">
            <img class="card-img-top" src="assets/img/realtors/kyle.jpg" alt="Seller of the month"/>
            <div class="card-body">
              <h5 class="card-title">Property Realtor</h5>
              <h6 class="text-secondary">Kyle Brown</h6>
            </div>
          </div>
          <button class="btn-primary btn-block btn-lg" data-toggle="modal" data-target="#inquiryModal">Make An Inquiry</button>
          <div class="modal fade" id="inquiryModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="inquiryModalLabel">Make An Inquiry</h5>
          <button type="button" class="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label htmlFor="property_name" class="col-form-label">Property:</label>
              <input type="text" name="listing" class="form-control" value="45 Drivewood Cirlce" disabled/>
            </div>
            <div class="form-group">
              <label htmlFor="name" class="col-form-label">Name:</label>
              <input type="text" name="name" class="form-control" required/>
            </div>
            <div class="form-group">
              <label htmlFor="email" class="col-form-label">Email:</label>
              <input type="email" name="email" class="form-control" required/>
            </div>
            <div class="form-group">
              <label htmlFor="phone" class="col-form-label">Phone:</label>
              <input type="text" name="phone" class="form-control"/>
            </div>
            <div class="form-group">
              <label htmlFor="message" class="col-form-label">Message:</label>
              <textarea name="message" class="form-control"></textarea>
            </div>
            <hr/>
            <input type="submit" value="Send" class="btn btn-block btn-secondary"/>
          </form>
        </div>
      </div>
    </div>
  </div>
          </>
 
 )
}

export default PropertyRealtor
