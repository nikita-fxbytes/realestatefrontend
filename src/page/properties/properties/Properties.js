import PropertiesLogic from './PropertiesLogic';
import Spinner from '../../../components/common/spinner/Spinner'
import PropertiesBox from '../../../components/common/propertiesbox/PropertiesBox';
import CommonMessage from '../../../helper/messages/CommonMessage';
const Properties = () => {
  const {properties, loader} = PropertiesLogic();//Logic

  const {no_data_found} = CommonMessage;//Message
  return (
    <section id="listings" className="py-4">
    <div className="container">
      {loader && <Spinner/>}
        <div className="row">
          {
            properties.length>0 ?
            properties.map((property)=>(
              <div className="col-md-6 col-lg-4 mb-4" key={property._id}>
                {property && <PropertiesBox property={property}/>}
              </div>
            ))
             :
            <>
              {no_data_found}
            </>
          }
        </div>

      <div className="row">
        <div className="col-md-12">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#">&laquo;</a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">&raquo;</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Properties
