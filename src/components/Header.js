import React from 'react'
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div id="header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to='/'>
          ShoeRevoe
        </Navbar.Brand>
        <Nav>
            <Nav.Link as={Link} to='/archive'>
              Posts
            </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to='/about'>
            About
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header