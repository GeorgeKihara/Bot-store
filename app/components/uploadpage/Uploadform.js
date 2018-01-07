import React, { Component } from 'react';
import Search from "../homepage/Search";
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Button from 'muicss/lib/react/button';
import Countries from './countries';
import fetch from 'isomorphic-fetch';
import ImageUploader from './imageUpload';
import Alert from './alert';



export default class Uploadform extends Component {

	render() {
		
		return (
			<div>
				<div >
					<nav className="navbar navbar-inverse">
						<div className="container-fluid">

							<ul className="nav navbar-nav">
								<li ><a href="/">Home</a></li>
								<li className="active"><a href="/upload">Upload</a></li>
							</ul>
							<div className="navbar-header">
								<a className="navbar-brand" href="#">BOT STORE</a>
							</div>
						</div>
					</nav>
				</div>
				<Alert />
			</div>
		);
	}
}

