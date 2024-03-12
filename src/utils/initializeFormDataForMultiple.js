const initializeFormDataForMultiple = (json, ansOntology,formData,setRequiredError) => {
    console.log({ ansOntology });

    // set answered ontolgy value in the formData
    if (ansOntology?.nodes) {
      Object.keys(ansOntology?.nodes).forEach((key) => {
        formData[key] = ansOntology.nodes[key];
      });
    }

    json.sections.forEach((section) => {
      section.questions.forEach((question) => {
        if (
          question.preDefinedValidations &&
          question.preDefinedValidations.required &&
          question.preDefinedValidations.required.value === true
        ) {
          // do not send those ontologies that have value in ansOntology as their value is already set inititaly
          setRequiredError((prevData) => {
            const nodeName = question.ontologyConfig.ontologyNodes[0]?.Name;

            // if ansOntology?.nodes is not present then add all the required ontologies
            if (ansOntology?.nodes) {
              // Check if the nodeName is not present in Object.keys(ansOntology.nodes)
              if (!Object.keys(ansOntology.nodes).includes(nodeName)) {
                return {
                  ...prevData,
                  [nodeName]:
                    question.preDefinedValidations.required.errorMessage,
                };
              }
            } else {
              return {
                ...prevData,
                [nodeName]:
                  question.preDefinedValidations.required.errorMessage,
              };
            }

            // If nodeName is present, return the current state without modification
            return prevData;
          });
        }
        // Map through sections and questions to initialize formData for "multiple" type

        if (question.ontologyConfig.type === ONTOLOGYCONFIGTYPE.MULTIPLE) {
          // Initialize formData for each ontologyNode to false
          question.ontologyConfig.ontologyNodes.forEach((node) => {
            const key = node.Name;
            if (formData[key] === undefined) {
              // If the key is not already in formData, initialize it to false
              formData[key] = false;
            }
          });
        }
      });
    });
  };
export default initializeFormDataForMultiple;