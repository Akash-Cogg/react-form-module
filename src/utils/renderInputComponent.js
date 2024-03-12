import { Checkbox, FormControlLabel, FormHelperText, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import INPUTUICOMPONENT from "../constants/inputUiComponent";
import handleInputChange from "./handleInputChange";
import handleMultiselectChange from "./handleMultiselectChange";
import DATATYPE from "../constants/datatype";
import ACTION from "../constants/answeredOntologyAction";
import { FormContext } from "../context/formContext";
import { useContext } from "react";

const renderInputComponent = (question, ontologyConfig,answeredOntology, formData, formErrors, setFormData, setFormErrors) => {
  // const {  answeredOntology, formData, formErrors, setFormData, setFormErrors } = useContext(FormContext);

   
    switch (question.questionConfig.inputUiComponent) {
       case INPUTUICOMPONENT.TEXTFIELD:
        return (
          <>
            <TextField
              error={formErrors?.[ontologyConfig.ontologyNodes[0]?.Name]}
              type={
                question.questionConfig.dataType === DATATYPE.STRING
                  ? DATATYPE.TEXT
                  : question.questionConfig.dataType
              }
              placeholder={question.questionConfig.placeholder}
              sx={{ width: "75%" }}
              value={formData[ontologyConfig.ontologyNodes[0]?.Name] || ""}
              onChange={(e) =>
                handleInputChange(
                  e.target.value,ontologyConfig,
                  ontologyConfig.ontologyNodes[0]?.Name,question,setFormData,formData,setFormErrors
                )
              }
              disabled={
                answeredOntology.action === ACTION.VIEW &&
                answeredOntology.nodes[ontologyConfig.ontologyNodes[0]?.Name]
              }
            />

            <FormHelperText error>
              {formErrors?.[ontologyConfig.ontologyNodes[0]?.Name]}
            </FormHelperText>
          </>
        );
      case INPUTUICOMPONENT.RADIOGROUP:
        return (
          <RadioGroup>
            {question.questionConfig.options &&
              question.questionConfig.options.map((option) => (
                <Grid key={option.index}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Radio
                    sx={{
                      color: formErrors?.[ontologyConfig.ontologyNodes[0]?.Name]
                        ? "red"
                        : "primary",
                    }}
                    type= {DATATYPE.RADIO}
                    name={`option-${question.index}`}
                    value={option.value}
                    checked={
                      formData[ontologyConfig.ontologyNodes[0]?.Name] ===
                      option.key
                    }
                    disabled={
                      answeredOntology.action === ACTION.VIEW &&
                      answeredOntology.nodes[
                        ontologyConfig.ontologyNodes[0]?.Name
                      ]
                    }
                    onChange={(e) =>
                      handleInputChange(
                        option.key,ontologyConfig,
                        ontologyConfig.ontologyNodes[0].Name,question,setFormData,formData,setFormErrors
                      )
                    }
                  />
                  <Typography
                    variant="h8"
                    sx={{ alignItems: 'center', fontFamily: 'Roboto, sans-serif' }}
                  >
                    {option.value}
                  </Typography>
                  {option.image && (
                    <img
                      src={option.image}
                      alt={`Image for ${option.value}`}
                      style={{ height: "50px", width: "50px" }}
                    />
                  )}
                </div>
                </Grid>
              ))}
            <FormHelperText error>
              {formErrors?.[ontologyConfig.ontologyNodes[0]?.Name]}
            </FormHelperText>
          </RadioGroup>
        );

      case INPUTUICOMPONENT.CHECKBOX:
        return (
          <>
            {question.questionConfig.options &&
              question.questionConfig.options.map((option) =>
                !(
                  answeredOntology?.action === ACTION.SKIP &&
                  answeredOntology.nodes?.[option.key] !== undefined
                ) ? (
                  <div key={option.key}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData[option.key] || false}
                          disabled={
                            answeredOntology.action === ACTION.VIEW &&
                            answeredOntology.nodes[option.key] !== undefined
                          }
                          onChange={(e) =>
                            handleMultiselectChange(
                              option.key,
                              e.target.checked,setFormData
                            )
                          }
                        />
                      }
                      label={option.value}
                    />
                  </div>
                ) : null
              )}
          </>
        );

      default:
        return null;
    }
  };
  export default renderInputComponent;