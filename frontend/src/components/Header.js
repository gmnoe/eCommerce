import { useState } from "react";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectAllCart } from "../features/cart/CartSlice";

const Header = () => {

    const cart = useSelector(selectAllCart);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <h1 className="mt-1">eComm</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/products'>
                            Products
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/cart'>
                            <i className='fa fa-home fa-lg' /> Cart
                            {cart.length > 0 && (
                                <span className='badge'>{cart.length}</span>
                            )}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/signin'>
                            <i className='fa fa-home fa-lg' /> Sign In
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;