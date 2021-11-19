import React from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormHelperText } from '@material-ui/core';
import * as Yup from 'yup';
import '../App.css';
import Data from "../TalentSignUp.json";

console.log(Data);

const TalentSignUp = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: '0.5em' }

    const initialValues = {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        termsAndConditions: false
    }

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().min(3, "It's too short").required("Required"),
        last_name: Yup.string().min(3, "It's too short").required("Required"),
        username: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })

    // using async function to fetch/get data
    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000);
    }

    return (
        <Grid>
            <Paper className="formBg" style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Talent Sign Up</h2>
                </Grid>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} fullWidth name="first_name" label='First Name'
                                placeholder="Enter first name" helperText={<ErrorMessage name="first_name" />} />
                            <Field as={TextField} fullWidth name="last_name" label='Last Name'
                                placeholder="Enter last name" helperText={<ErrorMessage name="last_name" />} />
                            <Field as={TextField} fullWidth name="username" label='User Name'
                                placeholder="Enter user name" helperText={<ErrorMessage name="username" />} />
                            <Field as={TextField} fullWidth name="email" label='Email'
                                placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />
                            <Field as={TextField} fullWidth name='password' type="password"
                                label='Password' placeholder="Enter your password" autoComplete="on"
                                helperText={<ErrorMessage name="password" />} />
                            <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="I agree to the"/><span className="terms">terms and conditions.</span>
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                            <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                color='primary'>{props.isSubmitting ? "Loading" : "Sign up"}</Button>
                        </Form>
                    )}
                </Formik>

            </Paper>
        </Grid>
    )
}

export default TalentSignUp;