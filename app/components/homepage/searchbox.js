'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import SearchStore from '../../stores/SearchStore';
import SearchActions from '../../actions/SearchActions';


export default class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = SearchStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SearchStore.listen(this.onChange);
    }
    componentWillUnmount() {
        SearchStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        var search = this.state.search.trim();

        if (!search) {
            SearchActions.invalidSearch();
            this.refs.searchTextField.getDOMNode().focus();
        }

        if (search) {
            SearchActions.performSearch(search);
        }
    }

    render() {
        var searchStyle = {
            width: '20px',
            height: '16px'
        }
        var spanresults = {
            zIndex: '99',
            margin: '0 auto'
        }
        var results = {
            background: 'white',
            height: 'auto',
            width: '350px',
            color: 'black'
        }
        var botlabel = {
            fontSize: '30px',
            fontFamily: 'Ar Darling',
            left: '20px',
        }
        var searchbox = {
            margin: 'auto',
            padding: '100px 40px'
        }
        return (
            <div className='head row flipInX animated'>
                    <div className="container">
                    <form onSubmit={this.handleSubmit.bind(this)} className="col-sm-4">
                        <label style={botlabel} className='control-label'>BOTSTORE</label>
                        <div style={searchbox} className='input-group'>
                            <input type="text" className="form-control" placeholder="Search"
                                ref='searchTextField' value={this.state.search}
                                onChange={SearchActions.updateSearch} autofocus />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <img style={searchStyle} src="img/searchicon.png" alt="" />
                                </button>
                            </div>
                        </div>
                        <span style={spanresults} className={this.state.searchValidationState + 'help-block'}><div style={results}>{this.state.searchHelpBlock}</div></span>
                    </form>
                </div>
            </div>
        );
    }
}


