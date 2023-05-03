import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <Container>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </Container>
    );
};

export default LoginLayout;