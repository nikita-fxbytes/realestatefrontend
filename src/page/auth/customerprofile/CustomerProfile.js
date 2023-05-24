import React from 'react'
import SideBar from './SideBar';
import Breadcrumb from '../../../components/common/breadcrumb/Breadcrumb';

const CustomerProfile = ({Component, pageName}) => {
  return (
    <section className="bg-light py-5">
        <div className="container">
            <Breadcrumb pageName={pageName}/>
            <div className='row'>
                <div className='col-lg-3 col-md-3 col-12'>
                    <SideBar/>
                </div>
                <div className='col-lg-9 col-md-9 col-12'>
                    <div>
                        <Component/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CustomerProfile;
