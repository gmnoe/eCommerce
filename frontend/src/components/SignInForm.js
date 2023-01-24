import { Button, Label, Col, FormGroup, Row } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateSignInForm } from '../utils/validateSignInForm';

const SignInForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        alert(JSON.stringify(values));
        resetForm();
    };
    
    return(
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={handleSubmit}
            validate={validateSignInForm}
        >
            <Form className='form'>
                <FormGroup row>
                    <Label className='label' htmlFor='email'>
                        Email Address
                    </Label>
                    <Row>
                        <Col md='12'>
                        <Field
                            name='email'
                            placeholder='Enter Email'
                            className='form-control'
                        />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup row>
                    <Label className='label' htmlFor='password'>
                        Password
                    </Label>
                    <Row>
                        <Col>
                        <Field
                            name='password'
                            type='password'
                            placeholder='Enter Password'
                            onBlur={Formik.handleBlur}
                            className='form-control'
                        />
                        <ErrorMessage name='password'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup row>
                    <Col me={{ size: 11, offset: 2}}>
                        <Button type='submit' className='form'>
                            Sign In
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};

export default SignInForm;