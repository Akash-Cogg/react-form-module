import { FormContext } from "../context/formContext";
import { Card, CardContent, Grid, Typography } from "@mui/material"
import React, { useContext } from "react";
import FormQuestions from "./FormQuestions";


const FormCntent = () => {
  const { formConfig, answeredOntology, formData, formErrors, setFormData, setFormErrors, handleSubmit } = useContext(FormContext);
  console.log('formConfig is',formConfig);
  console.log('answeredOntology is',answeredOntology);
  console.log('formData is',formData);
  console.log('formErrors is',formErrors);
  console.log('handleSubmit is',handleSubmit);
  console.log('setFormData is',setFormData);
  console.log('setFormErrors is',setFormErrors);

    return(
      <>
          {formConfig?.sections?.map((section) => (
              <Grid item xs={12} key={section.index}>
                  <Card sx={{ maxWidth: 800, marginBottom: "20px" }}>
                      <CardContent>
                          <Typography variant="h8" sx={{ fontWeight: "bold" }}>
                              {section.title}
                          </Typography>
                          <Typography variant="body1" sx={{ paddingBottom: "20px" }}>
                              {section.description}
                          </Typography>
                          {/* Sort the questions based on question.index */}
                          <FormQuestions questions={section.questions} />
                      </CardContent>
                  </Card>
              </Grid>
          ))}
      </>

    )
}

export default FormCntent