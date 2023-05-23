import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../helper/auth/AuthContext';
import { getUserToken, logout } from '../../../helper/CommonFunction';
import createAPI from '../../../api/Api';
import { toast } from 'react-toastify';
import { STATUSCODE } from '../../../helper/Constent';
const HeaderLogic = () => {
   // Api 
   const apiCreator = createAPI(); 
   const api = apiCreator(); 
   //End 
    const { isLoggedIn, setIsLoggedIn, userName, setUserName } = useContext(AuthContext);
    const [loader, setLoader] = useState(false);//Loader
    const token = getUserToken();
    useEffect(()=>{
      checkIsLoggedIn();
      if(token){
        getProfileDetails();
      }
      
    },[]);
    // Check login
    const checkIsLoggedIn=() =>{
      if(token){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
    }
    // get profile
    const getProfileDetails = async() =>{
      setLoader(true);
      try {
          const res = await api.get('/profile')
          const resData = res.data;
          if(resData.status === true){
              setUserName(resData.user.name)
          }else if(resData.status === false){
            toast.error(resData.message);
          }else {
            toast.error(resData.message);
          }
      } catch (error) {
          const errorResponse = error.response.data;
          if(errorResponse.status=== STATUSCODE.UNAUTHENTICATED){
              logout();
          }
          const message = errorResponse.message;
          toast.error(message);
      }finally{
          setLoader(false)
      }
  }
  return {isLoggedIn, userName, loader}
}

export default HeaderLogic
