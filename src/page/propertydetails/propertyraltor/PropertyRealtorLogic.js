import createAPI from "../../../api/Api";
import { useState } from "react";
import { InquiryValidaions } from "./InquiryValidaions";
import { toast } from 'react-toastify';
const PropertyRealtorLogic = (propertyId) => {
  // Api
  const apiCreator = createAPI();
  const api = apiCreator(); 
  // Form value
  const [loader, setLoader] = useState(false);//Form loader
  const [modalVisible, setModalVisible] = useState(false);

  const intialValues = {
    name: '',
    email: '',
    mobile: '',
    message: '',
    property: propertyId
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
    const errors = InquiryValidaions(formValues);
    setErrors(errors);
    if(Object.keys(errors).length ===0){
      const {name, email, mobile, message, property} = formValues;
      const inquiry = {name, email, mobile, message, property}
      addInquiry(inquiry);
    }
  }
  // End
  // Add property api
  const addInquiry = async(formValues) => {
    setLoader(true);
    try {
      const res = await api.post(`/inquiries`, formValues)
      const resData = res.data;
      if(resData.status === true){
        toast.success(resData.message);
        setTimeout(()=>{
          setModalVisible(false)
        },1000)
        
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
  return { handleSubmit, handleChange,loader, errors, modalVisible, setModalVisible}
}
export default PropertyRealtorLogic;



