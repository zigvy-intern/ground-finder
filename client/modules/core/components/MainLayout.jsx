import React from 'react';
import {Button, Row, Col, Navbar, NavItem, Nav,NavDropdown,MenuItem,FormGroup,FormControl,Glyphicon,Grid} from 'react-bootstrap';

const Layout = ({content}) => (
  <div Name="Layout" style={{position:"relative",height:"100%"}}>
        <div>
          <Navbar inverse style={{backgroundColor:"black"}} collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="http://localhost:3000"><img src= "https://i.imgur.com/0hzaXxK.png" height="29" width="auto"/></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Form pullLeft>
                  <FormGroup>
                    <FormControl type="text"  placeholder="Search, grounds,teams or someone..." />
                  </FormGroup>
                  {' '}
                  <Button type="submit" ><Glyphicon glyph= "search"></Glyphicon></Button>
             </Navbar.Form>
             <Nav>
               <NavItem eventKey={1} href="http://localhost:3000/Matchs">Find Match</NavItem>
               <NavItem eventKey={2} href="http://localhost:3000/">Grounds</NavItem>
               <NavItem eventKey={3} href="#">Messages</NavItem>
               <NavItem eventKey={4} href="#">Upcoming</NavItem>
             </Nav>
              <Nav pullRight>
                  <NavDropdown  title={
                    <Col xs={6} md={4}>
                      <Glyphicon glyph="user"></Glyphicon></Col>} id="basic-nav-dropdown" >
                  <MenuItem eventKey={1} href="http://localhost:3000/register"><Glyphicon glyph= "log-in"></Glyphicon> Register</MenuItem>
                  <MenuItem eventKey={1} href="http://localhost:3000/login"><Glyphicon glyph= "log-in"></Glyphicon> Login</MenuItem>
                  <MenuItem eventKey={1} href="#"><Glyphicon glyph= "log-out"></Glyphicon> Logout </MenuItem>
                  <MenuItem eventKey={1} href="#"><Glyphicon glyph= "cog"></Glyphicon> Setting </MenuItem>
                  </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {content()}
        <div>
          <Grid>
            <Row>
              <hr />
              <Navbar style={{height:"80px",position:"relative",zIndex:"-1",width:"100%",backgroundColor:"white",borderColor:"transparent",clear:"both",bottom:"0"}} >
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
            </Row>
          </Grid>
        </div>
  </div>

);
export default Layout
