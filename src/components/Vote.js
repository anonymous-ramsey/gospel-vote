import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import elizabeth from '../assets/elizabeth.jpeg';
import solomon from '../assets/solomon.jpeg';
import gbondo from '../assets/gbondo.jpeg';
import logo from '../assets/logo.png';
import { Grid, Col, Image, Row, Button } from 'react-bootstrap';
import './About.css';

export default class Vote extends Component {
  constructor(props){
    super(props);
    this.state = {
      register: true,
      verify: false,
      member: false,
      vote: false,
      voted: false,
      contacts: '',
      successful: false,
      response: '',
      voters: { fName: '', mName: '', lName: '', contact: '' },
      contestant: { contestant1: 1, contestant2: 2, contestant3: 3, contestant4: 4, contestant5: 5, contestant6: 6 }
    };
    this.showVerify = this.showVerify.bind(this);
    this.showMember = this.showMember.bind(this);
    this.showVote = this.showVote.bind(this);
    this.showVoted = this.showVoted.bind(this);
    this.showSuccessful = this.showSuccessful.bind(this);
  }

  showMember = () => {
    this.setState({
      member: true,
      register: false,
      verify: false,
      vote: false,
      voted: false,
      successful: false
    })
  };

  testMethod = (e) =>{
    e.preventDefault();
    const number = this.state.voters.contact
    axios.get(`https://gospel-awards-vote.herokuapp.com/search-vote?contact=${number}`)
      .then(response => {
        if(response.data.length > 0){
          this.showVoted();
        } 
        else{
          this.showVote();
        }
      })
      .catch(err => console.error(err))
  }

  showVerify = () => {
    this.setState({
      verify: true,
      register: false,
      member: false,
      vote: false,
      voted: false,
      successful: false,
    })
  };

  showVote = () => {
    this.setState({
      vote: true,
      verify: false,
      register: false,
      member: false,
      voted: false,
      successful: false
    })
  };
  showVoted = () => {
    this.setState({
      voted: true,
      verify: false,
      register: false,
      member: false,
      vote: false,
      successful: false
    })
  };
  showSuccessful = () => {
    this.setState({
      voted: false,
      verify: false,
      register: false,
      member: false,
      vote: false,
      successful: true
    })
  };

  searchVoter () {
      let f_name = this.state.voters.fName;
      let l_name = this.state.voters.lName;
      let mob = this.state.voters.contact;
      if (f_name.length > 2 && l_name.length > 2) {
        if (mob.length === 9){
          if (mob.startsWith('075') || mob.startsWith('076') || mob.startsWith('078') || mob.startsWith('079') || mob.startsWith('077') || mob.startsWith('080') || mob.startsWith('088') || mob.startsWith('099') || mob.startsWith('030') || mob.startsWith('033') || mob.startsWith('025') || mob.startsWith('031') || mob.startsWith('034')){
              const { voters } = this.state;
              fetch(`https://gospel-awards-vote.herokuapp.com/add-voter?f_name=${voters.fName}&m_name=${voters.mName}&l_name=${voters.lName}&contact=${voters.contact}`)
                .catch(err => console.log(err));
              this.showVerify();
          }
          else {
            alert('only sierra leone numbers are allowed, number should start with \n e.g 076, 088, 031, 025 should not start with \n e.g +232');
          }
        }
        else {
          alert('phone number should be 9 digit long');
        }
      }
      else {
        //alert('please check the length of your names');
      }
  };

  executeCheckVoterAPi = e => {
    e.preventDefault();
    e.persist();
    const { voters } = this.state;
    axios.get(`https://gospel-awards-vote.herokuapp.com/check-voter?contact=${voters.contact}`)
        .then(response => {
          if(response.data.length > 0){
            this.showMember();
          }
          else{
            this.searchVoter();
          }
        })
        .catch(err => console.error(err))
  };

  voteContestant_1 = _ => {
    const { contestant, voters } = this.state;
    fetch(`https://gospel-awards-vote.herokuapp.com/voters/vote?constantID=${contestant.contestant1}&voterContact=${voters.contact}`)
        .catch(err => console.log(err));
    this.showSuccessful()
  };
  voteContestant_2 = _ => {
    const { contestant, voters } = this.state;
    fetch(`https://gospel-awards-vote.herokuapp.com/voters/vote?constantID=${contestant.contestant2}&voterContact=${voters.contact}`)
        .catch(err => console.log(err));
    this.showSuccessful()
  };
  voteContestant_3 = _ => {
    const { contestant, voters } = this.state;
    fetch(`https://gospel-awards-vote.herokuapp.com/voters/vote?constantID=${contestant.contestant3}&voterContact=${voters.contact}`)
        .catch(err => console.log(err));
    this.showSuccessful()
  };
  // voteContestant_4 = _ => {
  //   const { contestant, voters } = this.state;
  //   fetch(`http://localhost:3001/voters/vote?constantID=${contestant.contestant4}&voterContact=${voters.contact}`)
  //       .catch(err => console.log(err));
  //   this.showSuccessful()
  // };
  // voteContestant_5 = _ => {
  //   const { contestant, voters } = this.state;
  //   fetch(`http://localhost:3001/voters/vote?constantID=${contestant.contestant5}&voterContact=${voters.contact}`)
  //       .catch(err => console.log(err));
  //   this.showSuccessful()
  // };
  // voteContestant_6 = _ => {
  //   const { contestant, voters } = this.state;
  //   fetch(`http://localhost:3001/voters/vote?constantID=${contestant.contestant6}&voterContact=${voters.contact}`)
  //       .catch(err => console.log(err));
  //   this.showSuccessful()
  // };

  render() {
    const { voters } = this.state;
    return (
      <div>
        <Image src={logo} className="header-image" />
        <Grid>
          {
            this.state.register ?
            <div>
              <Col xs={12} sm={8} smOffset={2}>
                <div className="loginbox">
                  <div className="loginFormBox">
                        <h1 className="display-4 text-center">Your Details</h1>
                
                    <form className="formDiv">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" required={true} value={voters.fName} onChange={e => this.setState({ voters: {...voters, fName: e.target.value}})} name="firstName" className="form-control" id="emailll" placeholder="Enter your first name here..."/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="middleName">Middle Name: </label>
                        <input type="text" required={true} value={voters.mName} onChange={e => this.setState({ voters: {...voters, mName: e.target.value}})} name="middleName" id="passw" className="form-control" placeholder="Enter your middle name here..."/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text" required={true} value={voters.lName} onChange={e => this.setState({ voters: {...voters, lName: e.target.value}})} name="lastName" id="passw" className="form-control" placeholder="Enter your last name here..."/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number: </label>
                        <input type="number" required={true} value={voters.contact} onChange={e => this.setState({ voters: {...voters, contact: e.target.value}})} name="lastName" id="passw" className="form-control" placeholder="last 8 digit of your phone number here..."/>
                      </div>
                      {/* <div className="formDiv" style={{float: "right"}}>
                        <p className="lead small mt-3"><a href="/" style={{textDecoration: 'none'}}>Already Registered</a></p>
                      </div> */}
                    </form>

                    <button
                      onClick={this.executeCheckVoterAPi}
                      className="btn btn-primary loginbtn btn-block text-white">
                      Submit
                    </button>

                    <hr className={"length"}/>
                    <div className="loginForm text-center">
                      <p className="mt-5 small">
                          &copy; A4CE, 2019. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
            : null
          }
          {
            this.state.verify ?
            <div>
              <Col xs={12} sm={8} smOffset={2}>
                <div className="loginbox">
                  <div className="loginFormBox">
                    <h1 className="display-4 text-center">Registration Successful</h1>
                    <br />
                    <p className="display-4 text-center">Thanks for been part of us. Your number is<span style={{color: 'orange'}}>{(voters.contact)}</span> </p>
                    <h3 className="display-4 text-center">{voters.fName + ' ' + voters.mName + ' ' + voters.lName}</h3>
                    <p className="display-4 text-center">Kindly note that you will be allowed to vote only once </p>
                    <form className="formDiv">
                      <p className="display-4 text-center">please click the button below to continue</p>
                      <button onClick={this.showVote}
                          className="btn btn-primary loginbtn btn-block text-white">
                        Next
                      </button>
                    </form>

                    <hr className={"length"}/>
                    <div className="loginForm text-center">
                      <p className="mt-5 small">
                        &copy; A4CE, 2019. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
            : null
          }
          {
            this.state.member ?
            <div>
              <Col xs={12} sm={8} smOffset={2}>
                <div className="loginbox">
                  <div className="loginFormBox">
                    <h1 className="display-4 text-center">You're already a member</h1>
                    <br />
                    <p className="display-4 text-center">Thanks for been part of us. Your number is <span id={"voter-contact"} style={{color: 'orange'}}>{(voters.contact)}</span> </p>
                    <p className="display-4 text-center">Kindly note that voting is done only once, if you have voted before you will not be allowed to vote again</p>
                    <form className="formDiv">
                      <p className="display-4 text-center">please click the button below to check if you are eligible to vote</p>
                      <button onClick={(this.testMethod)}
                              className="btn btn-primary loginbtn btn-block text-white">
                        Click to vote
                      </button>
                    </form>

                    <hr className={"length"}/>
                    <div className="loginForm text-center">
                      <p className="mt-5 small">
                        &copy; A4CE, 2019. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
            : null
          }
          {
            this.state.vote ?
            <div>
              <Col xs={12} sm={8} smOffset={2}>
                <Row className="show-grid text-center">
                  <h2 style={{justifySelf: 'center'}}>Please click the button to vote your choice</h2>
                  <Col xs={12} sm={4} className="person-wrapper">
                    <Image src={elizabeth} circle className="profile-pic"/>
                    <h4>Elizabeth Ruth Williams</h4>
                    <h5>Shaddai Ministries</h5>
                    <button onClick={this.voteContestant_1}
                            className="btn btn-primary loginbtn btn-block text-white">
                      Vote
                    </button>
                  </Col>
                  <Col xs={12} sm={4} className="person-wrapper">
                    <Image src={solomon} circle className="profile-pic"/>
                    <h4>Solomon A Bamba</h4>
                    <h5>Blazing Faith Ministry</h5>
                    <button onClick={this.voteContestant_2}
                            className="btn btn-primary loginbtn btn-block text-white">
                      Vote
                    </button>
                  </Col>
                  <Col xs={12} sm={4} className="person-wrapper">
                    <Image src={gbondo} circle className="profile-pic"/>
                    <h4>Sis Phebean Gbondo</h4>
                    <h5>Holy Cross Parish</h5>
                    <button onClick={this.voteContestant_3}
                            className="btn btn-primary loginbtn btn-block text-white">
                      Vote
                    </button>
                  </Col>
                  {/* <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/person-1.jpg" circle className="profile-pic"/>
                    <h4>Mohamed Ramsey</h4>
                    <h5>Faith Ministry</h5>
                    <button onClick={this.voteContestant_4}
                            className="btn btn-primary loginbtn btn-block text-white">
                      Vote
                    </button>
                  </Col>
                  <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/person-2.jpg" circle className="profile-pic"/>
                    <h4>Sheku Kokobaye</h4>
                    <h5>Christ Ministry</h5>
                    <button onClick={this.voteContestant_5}
                            className="btn btn-primary loginbtn btn-block text-white">
                      Vote
                    </button>
                  </Col>
                  <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/person-3.jpg" circle className="profile-pic"/>
                    <h4>Christiana Sesay</h4>
                    <h5>Lamb of God Ministry</h5>
                    <button onClick={this.voteContestant_6}
                            className="btn btn-primary loginbtn btn-block text-white">
                      Vote
                    </button>
                  </Col> */}
                </Row>
                <hr className={"length"}/>
                <div className="loginForm text-center">
                  <p className="mt-5 small">
                    &copy; A4CE, 2019. All Rights Reserved.
                  </p>
                </div>
              </Col>
            </div>
            : null
          }
          {
            this.state.successful ?
                <Col xs={12} sm={8} smOffset={2}>
                  <div className="loginbox">
                    <div className="loginFormBox">
                      <h1 className="display-4 text-center">You voted successfully</h1>
                      <br />
                      <p className="display-4 text-center">Thanks for been part of us. </p>
                      <form className="formDiv">
                        <p className="display-4 text-center">like to view result, click the button below to view</p>
                        <Link to="/result">
                          <Button bsStyle="primary">View Result</Button>
                        </Link>
                      </form>

                      <hr className={"length"}/>
                      <div className="loginForm text-center">
                        <p className="mt-5 small">
                          &copy; A4CE, 2019. All Rights Reserved.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
            : null
          }
          {
            this.state.voted ?
            <div>
              <Col xs={12} sm={8} smOffset={2}>
                <div className="loginbox">
                  <div className="loginFormBox">
                    <h1 className="display-4 text-center">OOPS!!! Sorry, you've already voted</h1>
                    <br />
                    <p className="display-4 text-center">Thanks for been part of us. </p>
                    <form className="formDiv">
                      <p className="display-4 text-center">like to view result, click the button below to view</p>
                      <Link to="/result">
                        <Button bsStyle="primary">View Result</Button>
                      </Link>
                    </form>

                    <hr className={"length"}/>
                    <div className="loginForm text-center">
                      <p className="mt-5 small">
                        &copy; A4CE, 2019. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
            : null
          }
        </Grid>
      </div>
    )
  }
}
