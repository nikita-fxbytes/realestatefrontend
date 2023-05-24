import { useEffect, useState } from "react";
import createAPI from "../../../api/Api";
import { LIMIT, ORDERBY } from "../../../helper/Constent";
import { toast } from 'react-toastify';
const BestSellerLogic = () => {
    // Api
    const apiCreator = createAPI();
    const api = apiCreator(); 
    // Form value
    const [loader, setLoader] = useState(false);
    const [bestSellers, setBestSellers] = useState([]);
    useEffect(()=>{
        getBestSeller()
    },[])
    // Api
    const getBestSeller = async()=>{
        setLoader(true);
        const body = {
            sortColumn:ORDERBY.CREATEDAT, 
            sortDirection: ORDERBY.DESC, 
            page:LIMIT.ITEMONE, 
            perPage:LIMIT.ITEMTHREE, 
            onlyActive:LIMIT.ITEMONE,
            searchTerm: ''
        }
        try {
            const res = await api.post('/retator', body);
            const resData =res.data;
            console.log(resData)
            if(resData.status === true){
                setBestSellers(resData.realtors);
            }else if(resData.status === false){
                toast.error(resData.message);
            }else{
                toast.error(resData.message); 
            }
        } catch (error) {
            const errorResponse = error.response.data;
            const message = errorResponse.message;
            toast.error(message);
        }finally{
            setLoader(false);  
        }
    }
    // End
  return {loader, bestSellers}
}

export default BestSellerLogic

