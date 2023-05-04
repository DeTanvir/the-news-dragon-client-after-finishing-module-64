import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => console.error(error.message))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none me-2' to="/category/0">Home</Link>
                            <Link className='text-decoration-none me-2' href="#features">About</Link>
                            <Link className='text-decoration-none me-2' href="#pricing">Career</Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle className='me-2' style={{ fontSize: '2rem' }}></FaUserCircle>}
                            {
                                // toggle between login and sign out button
                                user ?
                                    <Button onClick={handleSignOut} variant="secondary">Sign Out</Button> :
                                    <Link to='/login'><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;