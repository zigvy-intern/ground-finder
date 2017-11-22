import React from 'react';
import { Grid, Col, Panel, Input,FormGroup, FormControl, Button, Glyphicon, Checkbox } from 'react-bootstrap';


  class Login extends React.Component {
      render() {
        const {error} = this.props;
          return (
            <div style={{padding:"10px",paddingBottom:"350px"}} >
              <Grid>
              <Col xs={12} sm={6} smOffset={3}>
                <Panel>
                  <h1>Login</h1>
                    {error ? <p style={{color: 'red'}}>{error}</p> : null}
                      <form>
                        <FormGroup>
                          <FormControl inputRef={mail => this.refMail = mail} type="email" placeholder="Email" />
                          <FormControl inputRef={password => this.refPass = password} type="password" placeholder="Password" />
                          <Checkbox>Remember me</Checkbox>
                          <Button onClick={this.login.bind(this)}
                          bsStyle="primary" type="submit" >Login </Button>
                        </FormGroup>
                      </form>
                    </Panel>
                  </Col>
                </Grid>
            </div>

              )
            }

        login(e) {
            e.preventDefault();
            const {loginUser} = this.props;
            const mail = this.refMail.value;
            const password = this.refPass.value;
            loginUser(mail,password);
          }
        }
export default Login;
