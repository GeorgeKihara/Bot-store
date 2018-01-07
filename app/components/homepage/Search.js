'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">

            <ul className="nav navbar-nav navbar-header">
              <li className="active"><a className="navbar-brand" href="#">Home</a></li>
              <li><a className="navbar-brand" href="/upload">Upload</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}


