import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, NavItem } from "reactstrap";
import "./Layout.css"

class Layout extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <NavItem>
            <NavLink to="/" className="nav-link">
              {" "}
              Contacts 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/favorite" className="nav-link">
              Fovorite Numbers 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/friends" className="nav-link">
              Friends 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/family" className="nav-link">
              Family
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/deleted" className="nav-link">
              Deleted Contacts
            </NavLink>
          </NavItem>
        </Nav>
        {this.props.children}
      </Container>
    );
  }
}

export default Layout;
