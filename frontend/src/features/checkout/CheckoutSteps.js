
const CheckoutSteps = () => {
    return (
        <div className='row checkout-steps'>
            <div className={step1 ? 'active' : ''} >Sign-In</div>
            <div className={step2 ? 'active' : ''} >Shipping</div>
            <div className={step3 ? 'active' : ''} >Payment</div>
            <div className={step4 ? 'active' : ''} >Place Order</div>
        </div>
    ) 
}

export default CheckoutSteps