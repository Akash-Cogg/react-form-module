import validateInput from "./validateInput";

const handleInputChange = (value,ontologyConfig, key,question,setFormData,formData,setFormErrors) => {
    // Handle updating form data
    if (value === "") {
      console.log("value is:", value);
      const updatedFormData = { ...formData };
      delete updatedFormData[key];
      setFormData(updatedFormData);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [`${key}`]: value,
      }));
    }

    const preDefinedValidation = question.preDefinedValidations;
    // Perform validations
    const isValid = validateInput(value, preDefinedValidation);

    // Handle validation feedback
    if(setFormErrors)
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [ontologyConfig.ontologyNodes[0]?.Name]:
        isValid === true ? undefined : isValid,
    }));
  };
  export default handleInputChange;