"use client";
import { Button, Grid} from "@mui/material";
import React, { useEffect } from "react";
import Header from "./Header";
import FormCntent from "./FormContent";
import { FormContext } from "../context/formContext";

const FormComponent = ({
    formConfig,
    answeredOntology,
    formData,
    formErrors,
    setFormData,
    setFormErrors,
    handleSubmit,
    formData2
}) => {
   
    return (
        <>
        <FormContext.Provider
            value={{
                formConfig,
                answeredOntology,
                formData,
                formErrors,
                setFormData,
                setFormErrors,
                handleSubmit,
                formData2,
            }}
        >

            <Grid container justifyContent="center" spacing={2} style={{ overflowY: "auto", maxHeight: "100vh" }}>
                <Header formConfig={formConfig} />
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        <FormCntent />
                        <Button
                            variant="contained"
                            disabled={!formErrors || !Object.values(formErrors).every((error) => !error)} // Enable/disable based on form validity
                            sx={{
                                marginTop: "20px",
                                marginBottom: "20px",
                                marginLeft: "20px",
                            }}
                            onClick={handleSubmit} // Handle form submission
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            </FormContext.Provider>

        </>
    );
};
export default FormComponent;
