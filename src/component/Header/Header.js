import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo/logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <>
            <Navbar className='navabr' collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/home'><img className='img' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#reviews">Reviews</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user
                                    ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out </button>
                                    :
                                    <Nav.Link as={Link} to='login'>
                                        Login
                                    </Nav.Link>}
                            <Nav.Link to="about" as={Link}>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;