import SOURCETYPE from "../constants/suorceType";
import ACTION from "../constants/answeredOntologyAction";
import renderInputComponent from "../utils/renderInputComponent";
import renderInputComponent2 from "../utils/renderInputComponent2";
import { InfoOutlined } from "@mui/icons-material";
import { CardContent, Grid, Tooltip, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FormContext } from "../context/formContext";

const FormQuestions = ( {questions} ) => {
    const {  answeredOntology, formData2, formData, formErrors, setFormData, setFormErrors } = useContext(FormContext);
    let counter = 1; // used to control question indexing
    return (

        <>
            {questions
                .sort((a, b) => a.index - b.index)
                .map((question) => (
                    <React.Fragment key={question.index}>
                        {question.ontologyConfig.sourceType !== SOURCETYPE.DERIVED &&
                        (answeredOntology.action !== ACTION.SKIP ||
                            (answeredOntology.action === ACTION.SKIP &&
                                question?.ontologyConfig?.ontologyNodes?.some(
                                    (node) => answeredOntology?.nodes?.[node.Name] === undefined,
                                ))) ? (
                            <CardContent>
                                <Grid>
                                    <Grid>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                paddingTop: "15px",
                                            }}
                                        >
                                            {counter++}. {question?.questionConfig?.label}
                                            <Tooltip title={question?.questionConfig?.toolTip} arrow>
                                                <InfoOutlined fontSize="small" sx={{ marginLeft: "1px" }} />
                                            </Tooltip>
                                        </Typography>
                                    </Grid>
                                    {renderInputComponent(
                                        question,
                                        question.ontologyConfig,
                                        answeredOntology, formData, formErrors, setFormData, setFormErrors
                                    )}
                                    {question.questionConfig.helperText && (
                                        <Typography variant="body1">{question.questionConfig.helperText}</Typography>
                                    )}
                                </Grid>
                            </CardContent>
                        ) : (
                            renderInputComponent2(question.ontologyConfig,formData2)
                        )}
                    </React.Fragment>
                ))}
        </>
    );
};
export default FormQuestions;
