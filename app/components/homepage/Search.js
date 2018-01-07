'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">

            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="/upload">Upload</a></li>
            </ul>

            <div className="navbar-header">
              <a className="navbar-brand" href="#">BOT STORE</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


