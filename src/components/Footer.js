import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className={"container"} style={{background: 'black'}}>
        <div className="container">
          <h2 className="text-center text-white pt-4" style={{fontSize: 20}}>Copyright &copy; 2019 Advocacy Network</h2>
        </div>
      </div>
    )
  }
}
