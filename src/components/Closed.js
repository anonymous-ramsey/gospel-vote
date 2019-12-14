import React, {Component} from 'react';
import { Grid, Col, Jumbotron } from 'react-bootstrap';
//import {Link} from "react-router-dom";

class Closed extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Result of the <span style={{color: 'lightGray'}}>Gospel</span> Awards <span style={{color: 'orange'}}>2019</span></h2>
                    <p>Brought to you by Advocacy 4 Children's Education</p>
                </Jumbotron>
                <Col xs={12} sm={8} smOffset={2}>
                    <div className="login-box">
                        <div className="loginFormBox">
                            <h1 className="display-4 text-center">OOPS!!!, 402 ERROR!</h1>
                            <p>Your access to the page has been blocked by the owners</p>
                            <h1 className="display-4 text-center">Sorry for the inconvenience caused</h1>
                        </div>
                    </div>
                    <hr className={"length"}/>
                    <div className="loginForm text-center">
                        <p className="mt-5 small">
                            &copy; A4CE, 2019. All Rights Reserved.
                        </p>
                    </div>
                </Col>
            </Grid>
        );
    }
}

export default Closed;