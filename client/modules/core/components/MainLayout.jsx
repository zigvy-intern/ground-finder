import React from 'react';
import {PageHeader , Button, Row, Col, Navbar, NavItem, Nav,DropdownButton,MenuItem} from 'react-bootstrap';

const Layout = ({content}) => (
  <Navbar>
    <Nav>
      <NavItem eventKey={1} href="#">FIND MATCH</NavItem>
      <NavItem eventKey={2} href="#">GROUNDS</NavItem>
      <NavItem eventKey={3} href="#">MESSAGES</NavItem>
      <NavItem eventKey={4} href="#">UPCOMING</NavItem>
    </Nav>
    <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>Active Item</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  );
}
  </Navbar>
);




export default Layout;
