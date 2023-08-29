import React from "react";
import { useState } from "react";
import StepOne from "./StepOne";
import { useNavigate } from "react-router-dom";
import StepTwo from "./Steptwo";
import StepThree from "./StepThree";
export default function CreateStore(){
    const [step, setstep] = useState(1);
    const navigate=useNavigate()
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: ""
  })

  const nextStep = () => {
    setstep(step + 1);
  };
  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = input => e => {
    const {value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

  switch (step) {
    
    case 1:
      return (
          <StepOne next={nextStep} pre={prevStep}/>

      );
    case 2:
      return (
        
        <StepTwo next={nextStep} pre={prevStep}/>
      );
    case 3:
      return (
        <StepThree next={nextStep} pre={prevStep}/>   
        
      );
    case 4:
      return(
        navigate("/Deshboard")
      )
    default:
      return (
        <div className="App">
        </div>
      );
  }
}