import React from 'react';
import {PageHeader , Button, Row, Col, Navbar, NavItem, Nav,NavDropdown,MenuItem,FormGroup,FormControl,Glyphicon} from 'react-bootstrap';

const Layout = ({content}) => (
  <Navbar>
  <Nav>
    <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text"  placeholder="Search, grounds,teams or someone..." />
      </FormGroup>
      {' '}
      <Button type="submit" ><Glyphicon glyph= "search"></Glyphicon></Button>
      </Navbar.Form>
      <NavItem eventKey={1} href="#">FIND MATCH</NavItem>
      <NavItem eventKey={2} href="#">GROUNDS</NavItem>
      <NavItem eventKey={3} href="#">MESSAGES</NavItem>
      <NavItem eventKey={4} href="#">UPCOMING</NavItem>
      <NavDropdown>
      <MenuItem eventKey={1} href="#">Login</MenuItem>
      <MenuItem eventKey={1} href="#">Logout </MenuItem>
      </NavDropdown>
  </Nav>
  </Navbar>
);
export default Layout
