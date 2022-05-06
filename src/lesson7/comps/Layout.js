import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, NavItem } from "reactstrap";

class Layout extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <NavItem>
            <NavLink to="/" className="nav-link">
              {" "}
              Home ({this.props.todosNumber || 0})
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/done" className="nav-link">
              Todos Done ({this.props.todosDoneNumber || 0})
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/deleted" className="nav-link">
              Todos Deleted ({this.props.todosDeleteNumber || 0})
            </NavLink>
          </NavItem>
        </Nav>
        {this.props.children}
      </Container>
    );
  }
}

export default Layout;
