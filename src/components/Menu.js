import React from 'react'
import { Nav, Navbar } from "react-bootstrap"
import logo from "../styles/images/sportal-logo.png"
  
class Menu extends React.Component {
    render() {
      return (
      <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">
            <img
                src={logo}
                width="50"
                height="30"
                className="d-inline-block align-top"
                alt="Sportal logo"
            />
          </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar>

      );
    }
  }
 
  export default Menu;