import { UserButton } from '@clerk/nextjs';
import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';

function NavBar({ isUserLoggedIn }) {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
          <Image
            src="/logo-dark.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="GeniusPage Logo"
          />{' '}
          GeniusPage
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* If user is logged in, show sites bar, map over user's sites,
                  if no sites, show create new site button */}
            {isUserLoggedIn && (
              <NavDropdown title="Sites" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Site #1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Site #2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Site #3
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Nav>
            {isUserLoggedIn ? (
              <>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>{' '}
                <UserButton />
              </>
            ) : (
              <Nav.Link href="/sign-in">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
