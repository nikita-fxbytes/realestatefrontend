import React from 'react'
import SellerBox from './SellerBox'
import BestSellerLogic from './BestSellerLogic'
import Spinner from '../../../components/common/spinner/Spinner';


const BestSeller = () => {
    const {loader, bestSellers} = BestSellerLogic()
  return (
    <>
      {bestSellers.length>0 && <section id="team" className="py-5">
        <div className="container">
          <h2 className="text-center">Best Seller</h2>
          {loader && <Spinner/>}
          <div className="row text-center">
            {bestSellers.map((bestSeller)=>(
              <div className="col-md-4" key={bestSeller.id}>
                <SellerBox bestSeller={bestSeller}/>
              </div>
            ))}
          </div>
        </div>
      </section>}
    </> 
  )
}

export default BestSeller
