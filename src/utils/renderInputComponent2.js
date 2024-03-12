import { FormContext } from "../context/formContext";
import SOURCETYPE from "../constants/suorceType";
import { useContext } from "react";

  // for derived ontologies
  const renderInputComponent2 = (ontologyConfig) => {
    let { formData2 } = useContext(FormContext);
    debugger;
    console.log("formData2 is",formData2)

    // Extract the ontology node name
    const nodeName = ontologyConfig.ontologyNodes[0].Name;

    // Check if the value is not already added to the formData2
    if (
      ontologyConfig.sourceType === SOURCETYPE.DERIVED &&
      (!formData2.derived || !formData2.derived.includes(nodeName))
    ) {
      // Create a copy of the current formData2
      const updatedFormData2 = { ...formData2 };

      // Initialize the 'derived' array if not present
      if (!updatedFormData2.derived) {
        updatedFormData2.derived = [];
      }

      // Add the derived value to the 'derived' array
      updatedFormData2.derived.push(nodeName);

      // Update the formData2 state
      formData2 = updatedFormData2;
    }
  };
  export default renderInputComponent2;