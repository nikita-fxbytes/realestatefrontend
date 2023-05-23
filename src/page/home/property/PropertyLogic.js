import { useEffect, useState } from "react";
import { LIMIT, ORDERBY } from "../../../helper/Constent";
import createAPI from '../../../api/Api';
import { toast } from 'react-toastify';
const PropertyLogic = () => {
    const [properties, setProperties] = useState([]);
    const [loader, setLoader] = useState(false);
    const apiCreator = createAPI();
    const api = apiCreator(); 
    useEffect(()=>{
        getProperties();
    },[]);
     // Get property api
    const getProperties = async() =>{
        setLoader(true);
        try {
        const body = {
            sortColumn: ORDERBY.CREATEDAT,
            sortDirection: ORDERBY.DESC,
            page: LIMIT.ITEMONE,
            perPage: LIMIT.ITEMTHREE,
            onlyActive: LIMIT.ITEMONE
        };
        const res = await api.post(`/properties`, body)
        const resData = res.data;
        console.log(resData,"resData")
        if(resData.status === true){
            setProperties(resData.properties);
        }else if(resData.status === false){
            toast.error(resData.message);
        }else{
            toast.error(resData.message);
        }
        }catch (error) {
            const errorResponse = error.response.data;
            const message = errorResponse.message;
            toast.error(message);
        }finally{
            setLoader(false);
        }
      }
      // End
    return {properties, loader}
}

export default PropertyLogic
