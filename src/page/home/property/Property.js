import PropertyLogic from './PropertyLogic';
import Spinner from '../../../components/common/spinner/Spinner'
import PropertyMessage from '../../../helper/messages/PropertyMessage';
import PropertiesBox from '../../../components/common/propertiesbox/PropertiesBox';
import CommonMessage from '../../../helper/messages/CommonMessage';
const Property = () => {
  const {properties, loader} = PropertyLogic();//Logic
 const {latest_listings} = PropertyMessage;//Meaage
 const {no_data_found} = CommonMessage;//Message
  return (
    <section id="listings" className="py-5">
      <div className="container">
        <h3 className="text-center mb-3">{latest_listings}</h3>
        {loader && <Spinner/>}
        {
          properties.length>0 ?
            <div className="row">
            {
              properties.map((property)=>(
                <div className="col-md-6 col-lg-4 mb-4" key={property._id}>
                  {property && <PropertiesBox property={property}/>}
                </div>
              ))
            }
          </div>
          :
          <div className='text-center'>
            {no_data_found}
          </div>
        }
      </div>
    </section>
  );
};
export default Property;