import React from 'react';
import {Grid,Row, Col, Panel, Input,FormGroup, FormControl, Button, Glyphicon, ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';



class NewUser extends React.Component {
  render() {
      const {error} = this.props;
      return (
        <div style={{paddingBottom:"300px"}}>
          <Grid>
            <Row>
              <Col xs={6} sm={6} smOffset={3}>
                <Panel>
                  <h1>Register</h1>
                  {error ? <p style={{color: 'red'}}>{error}</p> : null}
                  <form>
                    <FormGroup>
                    <FormControl inputRef={mail => this.refMail = mail} type="email" placeholder="Email" />
                    <FormControl inputRef={password => this.refPass = password} type="password" placeholder="Password" />
                    <FormControl inputRef={name => this.refName = name} type="name" placeholder="Name" />
                    <FormControl inputRef={phoneNumber => this.refPhoneNumber = phoneNumber} type="phoneNumber" placeholder="Phone Number" />
                    <br/>
                    <ButtonToolbar>
                      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton value={1}>User</ToggleButton>
                        <ToggleButton value={2}>Owner</ToggleButton>
                      </ToggleButtonGroup>
                        <Button onClick={this.create.bind(this)}
                        bsStyle="primary" type="submit" >Sign up </Button>
                    </ButtonToolbar>
                    </FormGroup>
                  </form>
                </Panel>
              </Col>
            </Row>
          </Grid>
        </div>

      )
    }

    create(e) {
      e.preventDefault();
      const {createUser} = this.props;
      const mail = this.refMail.value;
      const password = this.refPass.value;
      const name = this.refName.value;
      const phoneNumber = this.refPhoneNumber.value;
      createUser(mail,password,name,phoneNumber);
    }
}
export default NewUser;
