import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img className='img-fluid' src={logo} alt="logo image" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' pauseOnHover="true" speed={70}>
                    I can be a React component, multiple React components, or just some text..... I can be a React component, multiple React components, or just some text..... I can be a React component, multiple React components, or just some text......
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets">{user.displayName}</Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user ?
                                        <Button variant="secondary">Log Out</Button> :
                                        <Link to='/login'><Button variant="secondary">Login</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;