import {useState } from "react";
import LogOutLogic from "../../../../helper/auth/LogOutLogic";
import { toast } from 'react-toastify';
import createAPI from "../../../../api/Api";
import { STATUSCODE } from "../../../../helper/Constent";
import { ChangePasswordValidations } from "./ChangePasswordValidations";
const ChangePasswordLogic = () => {
  //Api
  const apiCreator = createAPI();
  const api = apiCreator();
  // End
  const {logOut} = LogOutLogic();//logout
  const [loader, setLoader] = useState(false);//Loader
  const intialValues = {
    current_password: '',
    new_password: '',
    confirm_password: ''
  }
  const [formValues, setFormValues] = useState(intialValues);//Form value
  const [errors, setErrors] = useState({});//Error
 
  
  // Form value
  // Input change
  const handleChange = (e) =>{
    let {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    if (Object.keys(errors).length > 0) {
      setErrors({ ...errors, [name]: '' });
    }
  }
  // End
  // handleSubmit
  const handleSubmit = (e)=>{
    e.preventDefault();
    const errors = ChangePasswordValidations(formValues);
    setErrors(errors);
    if(Object.keys(errors).length ===0){
      const {current_password, new_password, confirm_password} = formValues;
      const user = {current_password, new_password, confirm_password}
      changePassword(user);
    }
  }
  // End
   // Update user api
   const changePassword = async(formValues) => {
    setLoader(true);
    try {
      const res = await api.put(`/change-password`, formValues)
      const resData = res.data;
      if(resData.status === true){
        toast.success(resData.message);
        logOut();
      }else if(resData.status === false){
        toast.error(resData.message);
      }else if(resData.status === STATUSCODE.UNAUTHENTICATED){
        logOut();
        toast.error(resData.message);
      }else{
        toast.error(resData.message);
      }
    } catch (error) {
      const errorResponse = error.response.data;
      if(errorResponse.status=== STATUSCODE.UNAUTHENTICATED){
        logOut();
      }
      const message = errorResponse.message;
      toast.error(message);
    }finally{
      setLoader(false);
      }
    }
  // End
  return {handleChange, handleSubmit, loader, errors}
}
export default ChangePasswordLogic;

