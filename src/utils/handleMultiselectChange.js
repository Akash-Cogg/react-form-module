const handleMultiselectChange = (optionKey, checked, setFormData) => {
    console.log("checked is,",optionKey,checked)
    setFormData((prevData) => ({
      ...prevData,
      [`${optionKey}`]: checked,
    }));
  };
  export default handleMultiselectChange;