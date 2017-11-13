import React from 'react';
import {Button, Row, Col, Navbar, NavItem, Nav, NavDropdown, MenuItem, FormGroup, FormControl, Glyphicon, PageFooter, ResponsiveEmbed, Grid} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const ItemList = ({content}) => (
<Navbar >
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#"><img src= "https://i.imgur.com/TZ96sKM.png" height="29" width="auto"/></a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Nav pullLeft>
    <NavItem eventKey={1} href="#">Download App</NavItem>
    <NavItem eventKey={2} href="#">F.A.Q</NavItem>
    <NavItem eventKey={3} href="#">Support</NavItem>
    <NavItem eventKey={4} href="#">Feedback</NavItem>
    <br> ©2017 Zigvy Inc. </br>
  </Nav>
</Navbar>
);

export default ItemList;
