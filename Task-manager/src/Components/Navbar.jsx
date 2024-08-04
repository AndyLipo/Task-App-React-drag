import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Logo from '../assets/react.svg';
import NewTask from './NewTask';
import Columnas from './Columnas';
import './Recuadro.css';

function NavScrollExample() {
    const [showAlert, setAlert] = useState(false);

    const handleAlert = () => {
        setAlert(!showAlert);
        localStorage.setItem('newTaskVisibility', JSON.stringify(!showAlert));
    };

    return (
        <>
            <Navbar expand="lg" className="custom-navbar"> {/* Cambia la clase aquí */}
                <Container fluid>
                    <Navbar.Brand href="#">Task App Manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', marginLeft:'380px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">New Dashborad</Nav.Link>
                            <NavDropdown title="Tools" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Tool one</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Tool two</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Tool three</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                About us
                            </Nav.Link>
                            <Image src={Logo} roundedCircle />
                        </Nav>
                        <Button variant="outline-light" onClick={handleAlert} style={{ marginRight: '50px', borderColor: 'black', color:'black' }}>Add task</Button>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light" style={{borderColor: 'black', color:'black'}}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            {showAlert && <NewTask onClose={handleAlert} />}
            <Columnas showAlert={showAlert} setAlert={setAlert} />
        </>
    );
}

export default NavScrollExample;
