import { Button, Label, Col, FormGroup, Row } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateRegisterForm } from '../utils/validateRegisterForm';

const RegisterForm = () => {
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
            validate={validateRegisterForm}
        >
            <Form className='form'>
                <FormGroup row>
                    <Label className='label' htmlFor='name'>
                        Name
                    </Label>
                    <Row>
                        <Col md='12'>
                        <Field
                            name='name'
                            placeholder='Enter Name'
                            className='form-control'
                        />
                        <ErrorMessage name='name'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup row>
                    <Label className='label' htmlFor='email'>
                        Email Address
                    </Label>
                    <Row>
                        <Col>
                        <Field
                            name='email'
                            placeholder='Enter Email'
                            className='form-control'
                        />
                        <ErrorMessage name='password'>
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
                    <Label className='label' htmlFor='confirmPassword'>
                        Confirm Password
                    </Label>
                    <Row>
                        <Col>
                        <Field
                            name='confirmPassword'
                            placeholder='Confirm Password'
                            className='form-control'
                        />
                        <ErrorMessage name='confirmPassword'>
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

export default RegisterForm;