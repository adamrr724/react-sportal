import React from 'react'
import { Nav, Navbar } from "react-bootstrap"
import logo from "../styles/images/sportal-logo.png"
import { useAuth } from "../contexts/AuthContext"

export default function Menu() {
  const { currentUser } = useAuth()

  // console.log(currentUser);

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
          <Nav.Link href="/explore">Explore</Nav.Link>
          {currentUser && <Nav.Link href="/create">Create</Nav.Link>}
          {!currentUser && <Nav.Link href="/login">Login</Nav.Link>}
          {currentUser && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
        </Nav>
      </Navbar>

  );
}
