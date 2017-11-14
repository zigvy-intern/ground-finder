import React from 'react';
<<<<<<< HEAD
import { Col, Panel, Input,FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
=======
import { Col, Panel, Input, Button, Glyphicon, FormGroup, FormControl } from 'react-bootstrap';
import ItemList from '../../items/components/ItemList.jsx'
>>>>>>> c851dfc60367ebb330c39bc0eec8d9fd159fd841

class NewUser extends React.Component {
  render() {
      const {error} = this.props;
      return (
<<<<<<< HEAD
        <Col xs={12} sm={6} smOffset={3}>
          <Panel>
            <h1>Register</h1>
            {error ? <p style={{color: 'red'}}>{error}</p> : null}
            <form>
              <FormGroup>
                <FormControl inputRef={mail => this.refMail = mail} type="email" placeholder="Email" />
                <FormControl inputRef={password => this.refPass = password} type="password" placeholder="Password" />
                <Button onClick={this.create.bind(this)}
                bsStyle="primary" type="submit" >Sign up </Button>
              </FormGroup>
            </form>
          </Panel>
        </Col>
=======
        <div>
          <Col xs={12} sm={6} smOffset={3}>
            <Panel>
              <h1>Register</h1>
              {error ? <p style={{color: 'red'}}>{error}</p> : null}
              <form>
                <FormGroup>
                <FormControl inputRef={mail => this.refMail = mail} type="email" placeholder="Email" />
                <FormControl inputRef={password => this.refPass = password} type="password" placeholder="Password" />
                <Button onClick={this.createUser.bind(this)}
                bsStyle="primary" type="submit" >Sign up </Button>
                </FormGroup>
              </form>
            </Panel>
          </Col>
          <ItemList />
        </div>

>>>>>>> c851dfc60367ebb330c39bc0eec8d9fd159fd841
      )
    }

    create(e) {
      e.preventDefault();
      const {createUser} = this.props;
      const mail = this.refMail.value;
      const password = this.refPass.value;
      createUser(mail,password);
    }
}
export default NewUser;
