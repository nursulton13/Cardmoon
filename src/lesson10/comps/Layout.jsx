import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from "reactstrap";

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Navbar color="light" expand="md" light className="mb-3">
        <NavLink className="navbar-brand" to="/">
          Cardmon
        </NavLink>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse navbar className={isOpen ? "show" : ""}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/category">
                Category
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {props.children}
    </Container>
  );
};

export default Layout;
