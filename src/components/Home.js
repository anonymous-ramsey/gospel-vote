import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import elizabeth from '../assets/elizabeth.jpeg';
import solomon from '../assets/solomon.jpeg';
import gbondo from '../assets/gbondo.jpeg';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to <span style={{color: 'lightGray'}}>Gospel</span> Awards <span style={{color: 'orange'}}>2019</span></h2>
          <p>Brought to you by Advocacy 4 Children's Education</p>
              <Link to="/">
                <Button bsStyle="primary">How to vote</Button>
              </Link>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <Link to="/vote">
                <button className={"btn btn-secondary"}><u>Click here to Vote</u></button>
              </Link>
        </Jumbotron>
        
        <Row className="show-grid text-center">
        <h2 style={{justifySelf: 'center'}}>List of Constants</h2>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={elizabeth} circle className="profile-pic"/>
            <h4>Elizabeth Ruth Williams</h4>
            <h5>Shaddai Ministries</h5>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={solomon} circle className="profile-pic"/>
            <h4>Solomon A Bamba</h4>
            <h5>Blazing Faith Ministry</h5>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={gbondo} circle className="profile-pic"/>
            <h4>Sis Phebean Gbondo</h4>
            <h5>Holy Cross Parish</h5>
          </Col>
          {/* <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h4>Mohamed Ramsey</h4>
            <h5>Faith Ministry</h5>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
            <h4>Sheku Kokobaye</h4>
            <h5>Christ Ministry</h5>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
            <h4>Christiana Sesay</h4>
            <h5>Lamb of God Ministry</h5>
          </Col> */}
        </Row>
        <hr />
        <Footer />
      </Grid>
    )
  }
}
