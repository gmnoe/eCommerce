import { Link } from "react-router-dom"
import { Container, Row } from "reactstrap"
import SignInForm from "../components/SignInForm"

const SignInPage = () => {
    return (
        <Container>
            <br />
            <h2 className='form'>Sign In</h2>
            <br />
            <SignInForm />
            <div className='form'>
                New Customer? {' '}{' '} <Link className='register' to='/register'>Create Your Account</Link>
            </div>
        </Container>
    )
}

export default SignInPage