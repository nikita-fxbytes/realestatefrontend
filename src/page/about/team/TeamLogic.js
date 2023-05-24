import { useEffect, useState } from "react";
import createAPI from "../../../api/Api";
import { LIMIT, ORDERBY } from "../../../helper/Constent";
import { toast } from 'react-toastify';
const TeamLogic = () => {
    // Api
    const apiCreator = createAPI();
    const api = apiCreator(); 
    // Form value
    const [loader, setLoader] = useState(false);
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        getTeam()
    },[])
    // Api
    const getTeam = async()=>{
        setLoader(true);
        const body = {
            sortColumn:ORDERBY.CREATEDAT, 
            sortDirection: ORDERBY.DESC, 
            page:LIMIT.ITEMONE, 
            perPage:LIMIT.ITEMTHREE, 
            onlyActive:LIMIT.ITEMONE
        }
        try {
            const res = await api.post('/users', body);
            const resData =res.data;
            console.log(resData)
            if(resData.status === true){
                setTeams(resData.users);
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
  return {loader, teams}
}

export default TeamLogic
