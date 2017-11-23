import React from 'react';
import {Button, Thumbnail, Row, Col, Navbar, MenuItem, Form, FormGroup, FormControl, ControlLabel, Glyphicon, ResponsiveEmbed, Grid,Nav,NavItem,NavDropdown } from 'react-bootstrap';



class Body extends React.Component {
  render() {
    return(
    <div style={{padding:"10px",paddingBottom:"60px"}}>
      <Grid >
        <Row>
          <Navbar style={{backgroundColor:"white",borderColor:"transparent"}} collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand >
                <a href="#" style={{fontSize:"40px",color:"black"}}>Grounds</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Form pullLeft>
              <FormGroup controlId="formControlsSelect" style={{paddingRight:"30"}}>
                <FormControl componentClass="select" placeholder="select" style={{borderColor:"transparent"}}>
                  <option value="Select">Nearest</option>
                  <option value="other">Farest</option>
                </FormControl>
              </FormGroup>
              {' '}
              <FormGroup controlId="formControlsSelect" style={{paddingRight:"30"}}>
                <FormControl componentClass="select" placeholder="select" style={{borderColor:"transparent"}}>
                  <option value="select">Price Range</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>
              {' '}
              <FormGroup controlId="formControlsSelect">
                <FormControl componentClass="select" placeholder="select" style={{borderColor:"transparent"}}>
                  <option value="select">Available Only</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>
            </Navbar.Form>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl style={{borderColor:"transparent",backgroundColor:"#f2f2f2",color:"#d9d9d9"}} type="text" placeholder="Search Grounds..." />
              </FormGroup>
              {' '}
              <Button style={{borderColor:"transparent"}} type="submit" ><Glyphicon glyph= "search"></Glyphicon></Button>
            </Navbar.Form>
          </Navbar>

              <Col xs={6} md={4}>
                <Thumbnail ><a href="http://localhost:3000/Detail"><img src="http://stadiumdb.com/pic-projects/stamford_bridge/stamford_bridge08.jpg" style={{width:"335",height:"250"}} alt="240x200" /></a>
                  <h3>Stamford Bridge</h3>
                  <p>Description</p>

                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail><a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/The_Santiago_Bernabeu_Stadium_-_U-g-g-B-o-y.jpg/1200px-The_Santiago_Bernabeu_Stadium_-_U-g-g-B-o-y.jpg" style={{width:"335",height:"250"}}  alt="240x200" /></a>
                  <h3>Santiago Bernabeu</h3>
                  <p>Description</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail><a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Old_Trafford_inside_20060726_1.jpg"  style={{width:"335",height:"250"}}  alt="240x200" /></a>
                  <h3>Old Trafford</h3>
                  <p>Description</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail><a href=""><img src="https://i2-prod.mirror.co.uk/incoming/article10949786.ece/ALTERNATES/s1200/Liverpool-FCs-new-pitch-at-Anfield.jpg"  style={{width:"335",height:"250"}}  alt="240x200" /></a>
                <h3>Anfield</h3>
                <p>Description</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail><a href=""><img src="http://events.arsenal.com/assets/slide186.jpg"  style={{width:"335",height:"250"}}  alt="240x200" /></a>
                <h3>Emirates Stadium</h3>
                <p>Description</p>
            </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail><a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2014._Camp_Nou._M%C3%A9s_que_un_club._Barcelona_B40.jpg/1200px-2014._Camp_Nou._M%C3%A9s_que_un_club._Barcelona_B40.jpg"  style={{width:"335",height:"250"}}  alt="240x200" /></a>
                <h3>Nou Camp</h3>
                <p>Description</p>
              </Thumbnail>
            </Col>
          </Row>
      </Grid>
    </div>
  )
  }
}

export default Body
