const Header = () => {
    return (
            <header className="row">
            <div>
                <a className="brand" href="/">eCommerce</a>
                <a href='/product'>Products</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
    );
}

export default Header;