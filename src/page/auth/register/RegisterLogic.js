import createAPI from "../../../api/Api";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { RegisterValidations } from "./RegisterValidations";
import { setUserToken } from "../../../helper/CommonFunction";
import AuthContext from "../../../helper/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { STATUSCODE } from "../../../helper/Constent";
const RegisterLogic = () => {
  const { setIsLoggedIn, setUserName } = useContext(AuthContext);//Check login
  const navigate = useNavigate();  //redirect another page
  // Api
  const apiCreator = createAPI();
  const api = apiCreator(); 
  // Form value
  const [loader, setLoader] = useState(false);//Form loader

  const intialValues = {
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirm_password: ''
  }
  const [formValues, setFormValues] = useState(intialValues);
  const [errors, setErrors] = useState({});//Error
  // End

  // Input change
  const handleChange = (e) =>{
    let {name, value} = e.target;
    if (name === 'mobile') {
      // restrict input to only numbers for the 'mobile' field
      const regex = /[^0-9]/g; // match anything that's not a digit
      value = value.replace(regex, ''); // update the value variable with the filtered value
    }
    setFormValues({...formValues, [name]: value});
    if (Object.keys(errors).length > 0) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  // End
  // Submit Form
  const handleSubmit = (e) =>{
    console.log(formValues)
    e.preventDefault();
    const errors = RegisterValidations(formValues);
    setErrors(errors);
    if(Object.keys(errors).length ===0){
      const {name, email, mobile, password, confirm_password} = formValues;
      const register = {name, email, mobile, password, confirm_password}
      addInquiry(register);
    }
  }
  // End
  // Add property api
  const addInquiry = async(formValues) => {
    setLoader(true);
    try {
      const res = await api.post(`/users/create`, formValues)
      const resData = res.data;
      console.log(resData)
      if(resData.status === true){
        setUserToken(resData.authToken)
        toast.success(resData.message);
        setIsLoggedIn(true);
        setUserName(resData.user.name);
        navigate('/properties');
      }else if(resData.status === false){
        console.log(resData.message)
        resData.message.forEach(element => {
          toast.error(element.msg);
        });
        
      }else{
        console.log(resData.message)
        toast.error(resData.message);
      }
      
    } catch (error) {
      console.log(error)
      const errorResponse = error.response.data;
      const message = errorResponse.message;
      const messageType = typeof(message)
      if(messageType === STATUSCODE.OBJECT){
        message.forEach(element => {
          toast.error(element.msg);
        });
      }else{
        toast.error(message);
      }
    }finally{
        setLoader(false);
      }
    }
  // End
  return { handleSubmit, handleChange,loader, errors}
}
export default RegisterLogic;




