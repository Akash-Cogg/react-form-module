import VALIDATION from "../constants/validationType";

 // validations handler
 const validateInput = (value, preDefinedValidations) => {
    for (const validation in preDefinedValidations) {
      switch (validation) {
        case VALIDATION.REQUIRED:
          if (
            preDefinedValidations.required &&
            preDefinedValidations.required.value === true
          ) {
            if (!value) return preDefinedValidations[validation].errorMessage;
          }
          break;
        case VALIDATION.REGEX:
          const regex = new RegExp(preDefinedValidations[validation].value);
          if (!regex.test(value))
            return preDefinedValidations[validation].errorMessage;
          break;
        case VALIDATION.MINLENGTH:
          if (value.length < preDefinedValidations[validation].value)
            return preDefinedValidations[validation].errorMessage;
          break;
        case VALIDATION.MAXLENGTH:
          if (value.length > preDefinedValidations[validation].value)
            return preDefinedValidations[validation].errorMessage;
          break;

        case VALIDATION.DATEFORMAT:
          const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Assuming the date format is YYYY-MM-DD
          if (!dateRegex.test(value))
            return preDefinedValidations[validation].errorMessage;
          break;
        case VALIDATION.MINDATE:
          const minDate = new Date(preDefinedValidations[validation].value);
          if (new Date(value) < minDate)
            return preDefinedValidations[validation].errorMessage;
          break;
        case VALIDATION.MAXDATE:
          const maxDate = new Date(preDefinedValidations[validation].value);
          if (new Date(value) > maxDate)
            return preDefinedValidations[validation].errorMessage;
          break;
        case VALIDATION.MINNUMBER:
          if (parseFloat(value) < preDefinedValidations[validation].value)
            return preDefinedValidations[validation].errorMessage;
          break;
        case VALIDATION.MAXNUMBER:
          if (parseFloat(value) > preDefinedValidations[validation].value)
            return preDefinedValidations[validation].errorMessage;
          break;

        default:
          break;
      }
    }
    return true; // Validation successful
  };
export default validateInput;