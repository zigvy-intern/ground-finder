import React from 'react';
import {Pagination,Button, Thumbnail, Row, Col, Navbar, MenuItem, Form, FormGroup, FormControl, ControlLabel, Glyphicon, ResponsiveEmbed, Grid,ButtonGroup} from 'react-bootstrap';

class Matchs extends React.Component {
  render() {
    return(

    <div style={{paddingBottom:"60px"}}>
      <Grid>
        <Row>
          <Col md={12} lg={12}>
            <Form inline>
              <FormGroup>
                <h2>Matchs </h2>
              </FormGroup>
              {' '}
              <FormGroup controlId="formControlsSelect">
                <FormControl componentClass="select" placeholder="select" style={{paddingRight:"30px"}}>
                  <option value="Select">Nearest</option>
                  <option value="other">Farest</option>
                </FormControl>
              </FormGroup>
              {' '}

              <FormGroup controlId="formControlsSelect">
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">Rating</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>
              {' '}
              <Navbar.Form pullRight>
                <FormGroup controlId="formControlsSelect" style={{paddingRight:"25"}}>
                  <FormControl type="text" placeholder="Search Matchs" style={{borderColor:"transparent",backgroundColor:"#f2f2f2",color:"#d9d9d9"}} />

                    <Button type="submit" style={{borderColor:"transparent"}} ><Glyphicon glyph= "search" ></Glyphicon></Button>
                  
                </FormGroup>
                <Button bsStyle="success" bsSize="large">Quick Match</Button>
              </Navbar.Form>
            </Form>
          </Col>
        </Row>
    <br></br>
    <Row>
      <Col xs={9} md={6}>
        <Thumbnail ><a href=""><img src="https://seeklogo.com/images/C/chelsea-fc-logo-A24FEB6BFB-seeklogo.com.png" style={{width:"100",height:"100"}} alt="240x200" /></a>
          <h3>Chelsea</h3>
          <p>Old Trafford Stadium</p>

        </Thumbnail>
      </Col>
      <Col xs={9} md={6}>
        <Thumbnail><a href=""><img src="https://img00.deviantart.net/1e9f/i/2011/268/3/f/real_madrid_cf_psd_by_chicot101-d4awaon.png" style={{width:"100",height:"100"}}  alt="240x200" /></a>
          <h3>Real Madrid</h3>
          <p>Old Trafford Stadium</p>
        </Thumbnail>
      </Col>
    </Row>

    <Row>
      <Col xs={9} md={6}>
        <Thumbnail ><a href="http://localhost:3000/Detail"><img src="https://seeklogo.com/images/C/chelsea-fc-logo-A24FEB6BFB-seeklogo.com.png" style={{width:"100",height:"100"}} alt="240x200" /></a>
          <h3>Chelsea</h3>
          <p>Old Trafford Stadium</p>

        </Thumbnail>
      </Col>
      <Col xs={9} md={6}>
        <Thumbnail><a href=""><img src="https://img00.deviantart.net/1e9f/i/2011/268/3/f/real_madrid_cf_psd_by_chicot101-d4awaon.png" style={{width:"100",height:"100"}}  alt="240x200" /></a>
          <h3>Real Madrid</h3>
          <p>Old Trafford Stadium</p>
        </Thumbnail>
      </Col>
    </Row>

  </Grid>
  </div>


    )
    }
  }
    export default Matchs;
