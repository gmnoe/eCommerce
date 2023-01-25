import { Link } from "react-router-dom"
import { Container } from "reactstrap"
import RegisterForm from "../components/RegisterForm"

const RegisterPage = () => {
    return (
        <Container>
            <br />
            <h2 className='form'>Register</h2>
            <br />
            <RegisterForm />
            <div className='form'>
                Already Have An Account? {' '}{' '} <Link  to='/signin'>Sign In</Link>
            </div>
        </Container>
    )
}

export default RegisterPage