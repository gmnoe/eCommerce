import { Button, Label, Col, FormGroup, Row, Container } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateSignInForm } from '../utils/validateSignInForm';

const SignInForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
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
            <Form>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email Address
                    </Label>
                    <Row>
                        <Col md='8'>
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
                    <Label htmlFor='password' md='2'>
                        Password
                    </Label>
                    <Row>
                        <Col md='8'>
                        <Field
                            name='password'
                            placeholder='Enter Password'
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
                        <Button type='submit' className>
                            Sign In
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};

export default SignInForm;