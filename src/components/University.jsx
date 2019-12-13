import React, { Component } from 'react'
import './university.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link } from 'react-router-dom'


import limkokwing from '../images/limkokwing.png'
import fbc from '../images/fbc.jpg'
import ipam from '../images/ipam.jpg'
import njala from '../images/njala.png'
import comahs from '../images/comahs.jpg'
import unimak from '../images/unimak.jpg'


export default class University extends Component {

  render() {

    return (
        <div className="mainWrapper">

          <div className="university">
            <h3 className="my-3 text-center">Select a University to Apply</h3>
            <div className="row mt-5">

              <div class="col-sm-4">
                <div class="card img-responsive">
                  <img className="img-responsive"  src={limkokwing} alt="Limkokwing Logo"/>
                  <div class="card-body text-center">
                    <h5 class="card-title">Limkokwing University</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/register" className="btn btn-primary ml-3">Apply here</Link>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card img-responsive">
                  <img className="img-responsive" src={fbc} alt="Limkokwing Logo"/>
                  <div class="card-body text-center">
                    <h5 class="card-title">Fourahbay College</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/register" className="btn btn-primary ml-3">Apply here</Link>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card img-responsive">
                  <img className="img-responsive" src={ipam} alt="Limkokwing Logo"/>
                  <div class="card-body text-center">
                    <h5 class="card-title">IPAM</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/register" className="btn btn-primary ml-3">Apply here</Link>
                  </div>
                </div>
              </div>
              
            </div>



            <div className="row mt-5">

              <div class="col-sm-4">
                <div class="card img-responsive">
                  <img className="img-responsive" src={njala} alt="Limkokwing Logo"/>
                  <div class="card-body text-center">
                    <h5 class="card-title">N'jala University</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/register" className="btn btn-primary ml-3">Apply here</Link>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card img-responsive">
                  <img className="img-responsive" src={comahs} alt="Limkokwing Logo"/>
                  <div class="card-body text-center">
                    <h5 class="card-title">COMAHS</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/register" className="btn btn-primary ml-3">Apply here</Link>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card img-responsive">
                  <img className="img-responsive" src={unimak} alt="Limkokwing Logo"/>
                  <div class="card-body text-center">
                    <h5 class="card-title">University of Makeni</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/register" className="btn btn-primary ml-3">Apply here</Link>
                  </div>
                </div>
              </div>
              
            </div>
           

          </div>
         
         
        </div>
    )
  }
}
