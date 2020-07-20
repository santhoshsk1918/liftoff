import React from 'react';
import {Navbar} from 'react-bootstrap';

const Header = props => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" className={"mb-4"}>
            <Navbar.Brand href="!#">Lift Off</Navbar.Brand>
        </Navbar>
    );
};

export default Header;