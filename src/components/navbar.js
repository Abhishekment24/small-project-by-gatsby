import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown, Button, Form} from "react-bootstrap";
import "./navbar.css"
const Navbars = () => {
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
  <div className="container">
  
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <div className="text-center">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/Home">Home</Nav.Link>
        <Nav.Link href="/about">Abouts</Nav.Link>
        <Button
               className="schedule-call-modal"
               href="/request"
               bsPrefix="btnn"
               >
            Request Demo
            </Button>
      </Nav>
    </div>
    </Navbar.Collapse>
  </div>
</Navbar>
    </div>
  )
}

export default Navbars
