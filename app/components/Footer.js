import React from 'react';
import { Link } from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = FooterStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        FooterStore.listen(this.onChange);
        FooterActions.getTopCharacters();
    }
    componentWillUnmount() {
        FooterStore.unlisten(this.onChange);
    }
    onChange(state) {
        this.setState(state);
    }
    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <h3>Bot Store</h3>
                            <p>© 2017 Cysect.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;