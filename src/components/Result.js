import React, {Component} from 'react';
import { Grid, Col, Jumbotron } from 'react-bootstrap';
//import {Link} from "react-router-dom"; 

class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AllVote: []
        };
        fetch('https://gospel-awar.herokuapp.com/vote-totals')
            .then(response => response.json())
            .then(response => this.setState({AllVote: response.data}))
            .catch(err => console.error(err));
    }

    render() {
        const { AllVote } = this.state;
        return (
            <Grid>
                <Jumbotron>
                    <h2>Result of the <span style={{color: 'lightGray'}}>Gospel</span> Awards <span style={{color: 'orange'}}>2019</span></h2>
                    <p>Brought to you by Advocacy 4 Children's Education</p>
                </Jumbotron>
                <Col xs={12} sm={8} smOffset={2}>
                    <div className="loginbox">
                        <div className="loginFormBox">
                            <h1 className="display-4 text-center">Overall Result</h1>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-responsive">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Constant Name</th>
                                    <th>Ministry</th>
                                    <th>Total Vote</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    AllVote.map(AllVote => (
                                        <tr>
                                            <td>{AllVote.Full_Name}</td>
                                            <td>{AllVote.Ministry}</td>
                                            <td>{AllVote.Total_Vote}</td>
                                        </tr>
                                    ))

                                }
                            </tbody>
                        </table>
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

export default Result;
