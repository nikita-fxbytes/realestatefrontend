import React from 'react'
import PropertiesBox from '../../../components/common/propertiesbox/PropertiesBox'

const Properties = () => {
  return (
    <section id="listings" class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-4">
            <PropertiesBox/>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
            <PropertiesBox/>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
            <PropertiesBox/>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
            <PropertiesBox/>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
            <PropertiesBox/>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
            <PropertiesBox/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#">&laquo;</a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">&raquo;</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Properties
