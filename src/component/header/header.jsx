import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDuration } from '../../context/DurationContext';
import SelectRange1 from '../SelectRange1';
import TotalExpenses from '../TotalExpenses';

function Header() {
    const { selectedDuration, setSelectedDuration, setSelectedRange } = useDuration();

    const handleSelect = (eventKey) => {
        setSelectedDuration(eventKey);
        setSelectedRange({});
    };
   
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Fast Tag</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Select Duration" id="basic-nav-dropdown" onSelect={handleSelect}>
                    <NavDropdown.Item href="#action/3.1" eventKey='1Day'>1 Day</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" eventKey="1Week">1 Week</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"  eventKey="1Month">1 Month</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" eventKey="6Month">6 Month</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                {/* <Nav>
                    <TotalExpenses />
                </Nav> */}
                <Nav>
                    <SelectRange1/>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
