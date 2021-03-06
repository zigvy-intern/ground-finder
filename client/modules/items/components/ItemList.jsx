import React from 'react';
import {Button, Row, Col, Navbar, NavItem, Nav, NavDropdown, MenuItem, FormGroup, FormControl, Glyphicon, PageFooter, ResponsiveEmbed, Grid} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const ItemList = ({content}) => (
<div>

    <Navbar style={{bottom:"",position:"absolute",width:"100%",backgroundColor:"white",borderColor:"transparent"}} >
       <Navbar.Header >
         <Navbar.Brand>
           <a href="#"><img src= "https://i.imgur.com/TZ96sKM.png" height="29" width="auto"/></a>
         </Navbar.Brand>
         <Navbar.Toggle />
       </Navbar.Header>
       <Row>
       <Nav pullLeft>
         <NavItem eventKey={1} href="#">Download App</NavItem>
         <NavItem eventKey={2} href="#">F.A.Q</NavItem>
         <NavItem eventKey={3} href="#">Support</NavItem>
         <NavItem eventKey={4} href="#">Feedback</NavItem>
         <NavItem eventKey={5} href="http://zigvy.com/">© 2017 Zigvy Inc</NavItem>
      </Nav>
      <Nav pullRight>
      <Navbar.Brand>
         <a href="#"><img src= "https://i.imgur.com/8QPN2zZ.png" height="16" width="16"/></a>
         {' '}
         <a href="#"><img src= "https://i.imgur.com/sFIaNFm.png" height="16" width="16"/></a>
         {' '}
         <a href="#"><img src= "https://i.imgur.com/T4T7fs3.png" height="16" width="16"/></a>
      </Navbar.Brand>
      </Nav>
    </Row>
    </Navbar>

  
</div>
);

export default ItemList;
