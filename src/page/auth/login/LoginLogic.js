import createAPI from "../../../api/Api";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { setUserToken } from "../../../helper/CommonFunction";
import AuthContext from "../../../helper/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { LoginValidations } from "./LoginValidations";
const LoginLogic = () => {
  const { setIsLoggedIn, setUserName } = useContext(AuthContext);//Check login
  const navigate = useNavigate();  //redirect another page
  // Api
  const apiCreator = createAPI();
  const api = apiCreator(); 
  // Form value
  const [loader, setLoader] = useState(false);//Form loader

  const intialValues = {
    email: '',
    password: ''
  }
  const [formValues, setFormValues] = useState(intialValues);
  const [errors, setErrors] = useState({});//Error
  // End

  // Input change
  const handleChange = (e) =>{
    let {name, value} = e.target;
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
    const errors = LoginValidations(formValues);
    setErrors(errors);
    if(Object.keys(errors).length ===0){
      const {email,password} = formValues;
      const login = { email, password}
      addInquiry(login);
    }
  }
  // End
  // Add property api
  const addInquiry = async(formValues) => {
    setLoader(true);
    try {
      const res = await api.post(`/login`, formValues)
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
      message.forEach(element => {
        toast.error(element.msg);
      });
      toast.error(message);
    }finally{
        setLoader(false);
      }
    }
  // End
  return { handleSubmit, handleChange,loader, errors}
}
export default LoginLogic;





